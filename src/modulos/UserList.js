import './App.css';
import { IoMdPerson, IoMdTrash, IoIosSearch, IoMdNotifications, IoIosAddCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import Messages, { MessagesRemove } from './Messages';
import axios from 'axios';


export const Headerlist = () => {
  return (


    <header id='header_list'>
      <div className="list_header">
        <IoMdPerson id='user_header' />
        <span id="list_text">User List</span>

      </div>

      <div className="list_header">
        <IoIosSearch id='search_header' />
        <input type="text" placeholder="Search" id="search_input" />
        <Link to="/administrador/CreateUserList">
          <IoIosAddCircle id='addUser' />
        </Link>
        <IoMdNotifications id='notificacion' />
      </div>


    </header>


  );
};
export const UserList = () => {

  const [estadoModal1, cambiarEstadoModal] = useState(false);
  const [estadoMes, cambiarEstadoMes] = useState(false);
  const [estadoMessagesRemove, cambiarEstadoMessagesRemove] = useState(false);

  //api para llamar datos  "get"

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getUsuarios();
  }, []);
  const getUsuarios = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/usuarios");
      if (response.data.usuarios && Array.isArray(response.data.usuarios)) {
        setUsuarios(response.data.usuarios);

      } else {
        console.error("La respuesta de la API no contiene un array de usuarios válido:", response.data);
      }
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  //api para llamar borrar datos  "delete"

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
    rol: '',
    nombre: '',
    apellido: '',
    correo: ''
  });
  
  const handleEditClick = (usuario) => {
    setUsuarioEditado({
      rol: usuario.rol,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      correo: usuario.correo,
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
        linRemove='/administrador/userList'
      >
      </MessagesRemove>

      <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal} titulo='Update User' >
        <ContenidoUser>
          <form id='formula' onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="rol">Rol</label>
              <select name="rol" value={usuarioEditado.rol} onChange={handleInputChange}>
                <option value="adiministrador">Administrador</option>
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
              <label htmlFor="correo">Email</label>
              <input type="email" name="correo" value={usuarioEditado.correo} onChange={handleInputChange} />
            </div>
            <div id='buttonModel'>
              <button type='submit'>Update</button>
            </div>
          </form>
        </ContenidoUser>
      </Modal>


      <div className='conte_user'>
        <table className='blueTable'>

          <thead>
            <tr>
              <th className="td_value">Id</th>
              <th className="td_value">Rol</th>
              <th className="td_value">Name</th>
              <th className="td_value">Last name</th>
              <th className="td_value">Email</th>
            </tr>
          </thead>

          <tbody>

            {usuarios.map((usuario) => (
              <tr key={usuario._id} className="tr_info">
                <td>{usuario._id}</td>
                <td>{usuario.rol}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.apellido}</td>
                <td>{usuario.correo}</td>
                <td><button className="button_actua" onClick={() => handleEditClick(usuario)}>Update</button></td>
                <td><IoMdTrash className='delete' onClick={() => borrarUsuario(usuario._id)} /></td>
              </tr>
            ))}



          </tbody>

        </table>
      </div>
    </main>
  );
};

const ContenidoUser = styled.div`

  position: relative;
  display:flex;
  justify-content:center;

  #formula{
    position: relative;
    height: 500px;
    width:200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    

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
    select{
      border-radius:50px;
      border: 3.5px solid var(--principal-color);
      height: 27px;
      background:#fff;
      padding-left:15px;


    }
    button{
      height: 30px;
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

