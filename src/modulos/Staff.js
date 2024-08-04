import './App.css';
import { IoMdPerson, IoMdTrash, IoIosSearch, IoMdNotifications } from 'react-icons/io';
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import Messages, { MessagesRemove } from './Messages';
import axios from 'axios';

export const HeaderStaff = () => {
  return (


    <header id='header_list'>
      <div className="list_header">
        <IoMdPerson id='user_header' />
        <span id="list_text">Staff</span>

      </div>

    </header>


  );
};
export const Staff = () => {

  const [estadoModal1, cambiarEstadoModal] = useState(false);
  const [estadoMes, cambiarEstadoMes] = useState(false);
  const [estadoMessagesRemove, cambiarEstadoMessagesRemove] = useState(false);
  const [filteredUsuarios, setFilteredUsuarios] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [userStatus, setUserStatus] = useState({});


  //api para llamar datos  "get"

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {

    getUsuarios();
  }, []);
  const getUsuarios = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/usuarios");
      if (response.data.usuarios && Array.isArray(response.data.usuarios)) {
        const usuariosFiltrados = response.data.usuarios.filter(usuario => usuario.rol === 'usuario');
        setUsuarios(usuariosFiltrados);
        setFilteredUsuarios(usuariosFiltrados);

        const statuses = await Promise.all(usuariosFiltrados.map(async (usuario) => {
          try {
            const res = await axios.get(`http://localhost:3001/isOnline/${usuario._id}`, { withCredentials: true });
            console.log(`Online status for user ${usuario._id}:`, res.data);
            return { id: usuario._id, isOnline: res.data.isOnline };
          } catch (error) {
            console.error(`Error fetching online status for user ${usuario._id}:`, error);
            return { id: usuario._id, isOnline: false }; // Default to offline on error
          }
        }));

        // Crear un objeto de estado de usuarios en línea
        const statusMap = statuses.reduce((acc, { id, isOnline }) => {
          acc[id] = isOnline;
          return acc;
        }, {});
        console.log("User status map:", statusMap);

        setUserStatus(statusMap);
      } else {
        console.error("La respuesta de la API no contiene un array de usuarios válido:", response.data);
      }
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };



  //api para borrar datos  "delete"

  const borrarUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/deleteUsuario/${id}`);
      getUsuarios(); // Actualizar la lista de usuarios después de eliminar
      cambiarEstadoMessagesRemove(true);
      console.log("Usuario eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };


  // actualizar datos  update 

  const [usuarioEditado, setUsuarioEditado] = useState({
    rol:'',
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    años: '',
    genero: '',
    direccion: ''
  });

  const handleEditClick = (usuario) => {
    setUsuarioEditado({
      rol: usuario.rol,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      correo: usuario.correo,
      direccion: usuario.direccion,
      telefono: usuario.telefono,
      años: usuario.años,
      _id: usuario._id
    });
    cambiarEstadoModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuarioEditado((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3001/api/updateUsuario/${usuarioEditado._id}`, usuarioEditado);
      console.log("Respuesta de la API:", response.data); // Mostrar la respuesta completa en la consola
      getUsuarios();
      cambiarEstadoMes(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
    }
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const filtered = usuarios.filter(user =>
      `${user.nombre} ${user.apellido} ${user.correo}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsuarios(filtered);
  }, [searchTerm, usuarios]);



  return (
    <main id='main_list'>
      <Messages
        estadoMessages={estadoMes}
        cambiarEstadoMessages={cambiarEstadoMes}
        title2='update'
        messagesParrafo={'The data has been updated Successfully.'}
      >
      </Messages>
      <MessagesRemove
        estadoMessagesRemove={estadoMessagesRemove}
        cambiarEstadoMessagesRemove={cambiarEstadoMessagesRemove}
        messagesParrafoRemove='The user whas   successfully deleted.'
        linRemove='/administrador/staff'
      >
      </MessagesRemove>
      <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal} titulo='Update Staff' >
        <Contenido>

          <form onSubmit={handleFormSubmit}>
          <div>
              <label htmlFor="rol">Rol</label>
              <select className='seleccion' name="rol" value={usuarioEditado.rol} onChange={handleInputChange}>
                <option value="administrador">Administrador</option>
                <option value="usuario">Usuario</option>
              </select>
            </div>
            <div>
              <label htmlFor="nombre">Name</label>
              <input type="text" name="nombre" value={usuarioEditado.nombre} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="apellido">Last name</label>
              <input type="text" name="apellido" value={usuarioEditado.apellido} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="direccion">Address</label>
              <input type="text" name="direccion" value={usuarioEditado.direccion} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="telefono">Cell phone</label>
              <input type="number" name="telefono" value={usuarioEditado.telefono} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="correo">Email</label>
              <input type="email" name="correo" value={usuarioEditado.correo} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="años">Age</label>
              <input type="number" name="años" value={usuarioEditado.años} onChange={handleInputChange} />
            </div>
            <div id='buttonModel'>
              <button type='submit'>Update</button>
            </div>

          </form>
        </Contenido>
      </Modal>
      <div className='conte_user'>
      <div
        style={{
          position: 'fixed',
          top: '0px',
          right:'70px'      
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
        <table className='blueTable'>

          <thead>
            <tr>
              <td className="td_value">Id</td>
              <td className="td_value">Name</td>
              <td className="td_value">Rol</td>
              <td className="td_value">Last name</td>
              <td className="td_value">Age</td>
              <td className="td_value">Phone</td>
              <td className="td_value">Address</td>
              <td className="td_value">Email</td>
            </tr>
          </thead>

          <tbody>

            {filteredUsuarios.map((usuario) => (
              <tr key={usuario._id} className="tr_info">
                <td>{usuario._id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.rol}</td>
                <td>{usuario.apellido}</td>
                <td>{usuario.años}</td>
                <td>{usuario.telefono}</td>
                <td>{usuario.direccion}</td>
                <td>{usuario.correo}</td>
                <td><button className="button_actua" onClick={() => handleEditClick(usuario)}>Update</button></td>
                <td><IoMdTrash className='delete' onClick={() => borrarUsuario(usuario._id)} /></td>
                <td style={{ color: userStatus[usuario._id] ? 'green' : 'red' }}>
                {userStatus[usuario._id] ? 'Online' : 'Offline'}
              </td>
              </tr>
            ))}

          </tbody>

        </table>
      </div>
    </main>
  );
};

const Contenido = styled.div`

  position: relative;
  display:flex;
  justify-content:center;
  margin-top:-70px;
  height:650px;

  form{
    position: relative;
    height: 650px;
    width:200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    

    div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:15px;

    input{
       border-radius:50px;
      border: 3.5px solid var(--principal-color);
      background: transparent;
      outline: none;
      font-size: 18px;
      padding-left:10px;
      
      label{
        padding-bottom: 20px;
        font-size: 20px;
      }
    }
    button{
      height:30px;
    width:100px;
    background:#FCCA00;
    color:#000;
    border-radius:50px;
    }
    }
    #buttonModel{
    grid-column: span 2;
    display: flex;
    align-items: center;
    justify-content: center;


    }
  }
`;