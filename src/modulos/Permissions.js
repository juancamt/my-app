import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoMdPerson, IoIosSearch, IoMdNotifications } from 'react-icons/io';



export const HeaderPermissions = () => {
  return (


    <header id='header_list'>
      <div className="list_header">
        <IoMdPerson id='user_header' />
        <span id="list_text">Permissions</span>

      </div>

    </header>


  );
};
export const Permissions = () => {

  // mostrar los permisos guardados 
  const [permisos, setPermisos] = useState([]);
  const [error, setError] = useState('');
  const [filteredPermisos, setFilteredPermiso] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPermisos = async () => {
      try {
        const response = await axios.get('https://personal-backend-project.onrender.com/api/listarPermisos', { withCredentials: true });
        setPermisos(response.data);
      } catch (error) {
        setError('Error al cargar los permisos');
      }
    };

    fetchPermisos();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const filtered = permisos.filter(permis =>
      `${permis.user.nombre} ${permis.user.apellido} `.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPermiso(filtered);
  }, [searchTerm, permisos]);


  if (error) {
    return <p>{error}</p>;
  }
  return (
    <main id='main_list'>


      <div className='contePermissions'  >
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
        {filteredPermisos.map((permiso) => (

        
          <div className="permission-card" key={permiso._id}>
            <div className="header">
              <div className="field">
                <span className="label">ID</span>
                <span>{permiso._id}</span>
              </div>
              <div className="field">
                <span className="label">Name</span>
                <span>{permiso.user.nombre}</span>
              </div>
              <div className="field">
                <span className="label">Last Name</span>
                <span>{permiso.user.apellido}</span>
              </div>
              <div className="field">
                <span className="label">Fecha Inicio</span>
                <span>{permiso.user.nombre}</span>
              </div>
              <div className="field">
                <span className="label">Fecha Fin</span>
                <span>{permiso.endDate}</span>
              </div>
            </div>
            <div className="bodyCard">
              <span className="reason-label">Motivo de permiso:</span>
              <p className="textoP">{permiso.content}</p>
            </div>
          </div>


        ))}
      </div>
    </main>

  );
};
