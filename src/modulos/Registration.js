
import './App.css';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { IoMdPerson, IoIosSearch, IoMdNotifications } from 'react-icons/io';



export const HeaderRegistration = () => {
  return (


    <header id='header_list'>
      <div className="list_header">
        <IoMdPerson id='user_header' />
        <span id="list_text">Registration</span>

      </div>

    </header>


  );
};
export const Registration = () => {
  const [registro, setregistro] = useState([]);
  const [registroSalida, setregistroSalida] = useState([]);
  const [filteredRegistro, setFilteredRegistro] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const registrosGet = async () => {
      try {
        const response = await axios.get('https://personal-backend-project.onrender.com/api/listarRegistro', { withCredentials: true });
        setregistro(response.data);
        console.log('Datos de registro:', response.data); // Verificar los datos recibidos
      } catch (error) {
        console.error('Error al cargar los registros:', error);
      }
    };
    registrosGet();
  }, []);
  useEffect(() => {
    const registrosGetSalida = async () => {
      try {
        const responseSalida = await axios.get('https://personal-backend-project.onrender.com/api/listarRegistroSalida', { withCredentials: true });
        setregistroSalida(responseSalida.data);
        console.log('Datos de registro salida:', responseSalida.data); // Verificar los datos recibidos

      } catch (error) {
        console.error('Error al cargar los registros:', error);
      }
    };
    registrosGetSalida();
  }, []);
  const formatDate = (date) => {
    if (!date) return 'Fecha no disponible';
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) return 'Fecha no disponible';
    return moment(parsedDate).format('YYYY-MM-DD');
  };
  const formatTime = (date) => {
    if (!date) return 'Hora no disponible';
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) return 'Hora no disponible';
    return moment(parsedDate).format('HH:mm:ss'); // Formato de hora
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const filtered = registro.filter(reg =>
      `${reg.user.nombre} ${reg.user.apellido} `.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRegistro(filtered);
  }, [searchTerm, registro]);


  return (
    <main id='main_list'>

      <div className='conteinerDAte'>
        <div style={{
          position: 'fixed',
          top: '0px',
          right: '20px'
        }}>

          <IoIosSearch className='search' />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search_input"
          />
        </div>

        {filteredRegistro.map((reg) => (

    
          <div className="table-wrapper" key={reg._id}>
            <div className="table-header">
              <div className="table-cell">ID</div>
              <div className="table-cell">NAME</div>
              <div className="table-cell">LAST NAME</div>
              <div className="table-cell">FECHA INICIO</div>
              <div className="table-cell">HORA INGRESO</div>
            </div>
            <div className="table-row">
              <div className="table-cell">{reg.user._id}</div>
              <div className="table-cell">{reg.user.nombre}</div>
              <div className="table-cell">{reg.user.apellido}</div>
              <div className="table-cell">{formatDate(reg.fechaInicio)}</div>
              <div className="table-cell" >{formatTime(reg.fechaInicio)}</div>
            </div>

          </div>
        ))}
        {registroSalida.map((regSalida) => (

          <div className="table-wrapper" key={regSalida._id}>
            <div className="table-header">
              <div className="table-cell">ID</div>
              <div className="table-cell">NAME</div>
              <div className="table-cell">LAST NAME</div>
              <div className="table-cell">FECHA SALIDA</div>
              <div className="table-cell">HORA SALIDA</div>
            </div>
            <div className="table-row">
              <div className="table-cell">{regSalida.user._id}</div>
              <div className="table-cell">{regSalida.user.nombre}</div>
              <div className="table-cell">{regSalida.user.apellido}</div>
              <div className="table-cell" style={{ color: "red" }}>{formatDate(regSalida.fechaFin)}</div>
              <div className="table-cell" style={{ color: "red" }}>{formatTime(regSalida.fechaFin)}</div>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
};
