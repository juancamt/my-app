
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
        const response = await axios.get('http://localhost:3001/api/listarRegistro', { withCredentials: true });
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
        const responseSalida = await axios.get('http://localhost:3001/api/listarRegistroSalida', { withCredentials: true });
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

          <div key={reg._id} className='conteInfoDate'>

            <table>
              <thead>
                <tr>
                  <td className='td_infoDate'>ID</td>
                  <td className='td_infoDate'>Name</td>
                  <td className='td_infoDate'>Last Name</td>
                  <td className='td_infoDate'>Fecha Inicio</td>
                  <td className='td_infoDate'>Hora ingreso</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='td_valueDate'>{reg.user._id}</td>
                  <td className='td_valueDate'>{reg.user.nombre}</td>
                  <td className='td_valueDate'>{reg.user.apellido}</td>
                  <td className='td_valueDate'>{formatDate(reg.fechaInicio)}</td>
                  <td className='td_valueDate'>{formatTime(reg.fechaInicio)}</td>
                </tr>
              </tbody>
            </table>

          </div>
        ))}
        {registroSalida.map((regSalida) => (

          <div key={regSalida._id} className='conteInfoDate'>

            <table>
              <thead>
                <tr>
                  <td className='td_infoDate'>ID</td>
                  <td className='td_infoDate'>Name</td>
                  <td className='td_infoDate'>Last Name</td>
                  <td className='td_infoDate'>Fecha Salida</td>
                  <td className='td_infoDate'>Hora salida</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='td_valueDate'>{regSalida.user._id}</td>
                  <td className='td_valueDate'>{regSalida.user.nombre}</td>
                  <td className='td_valueDate'>{regSalida.user.apellido}</td>
                  <td style={{ color: "red" }} className='td_valueDate'>{formatDate(regSalida.fechaFin)}</td>
                  <td style={{ color: "red" }} className='td_valueDate'>{formatTime(regSalida.fechaFin)}</td>
                </tr>
              </tbody>
            </table>

          </div>
        ))}
      </div>

    </main>
  );
};
