import './App.css';
import { IoMdPerson, IoMdTrash, IoIosSearch, IoMdNotifications } from 'react-icons/io';
import React, { useState,useEffect } from 'react';
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

      <div className="list_header">
        <IoIosSearch id='search_header' />
        <input type="text" placeholder="Search" id="search_input" />
        <IoMdNotifications id='notificacion' />
      </div>


    </header>


  );
};
export const Staff = () => {
 
  const [estadoModal1, cambiarEstadoModal] = useState(false);
  const [estadoMes, cambiarEstadoMes] = useState(false);
  const [estadoMessagesRemove, cambiarEstadoMessagesRemove] = useState(false);

  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    getEmpleados();
  }, []);
  
  const getEmpleados = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/empleados");
      if (response.data.empleado && Array.isArray(response.data.empleado)) {
        setEmpleados(response.data.empleado);
      } else {
        console.error("La respuesta de la API no contiene un array de empleados válido:", response.data);
      }
    } catch (error) {
      console.error("Error al obtener empleados:", error);
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
        linRemove='/administrador/staff'
      >
      </MessagesRemove>
      <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal} titulo='Update Staff' >
        <Contenido>

          <form>
            <div >
              <label for="name">Name</label>
              <input type="text" />

            </div>
            <div >
              <label for="last name">Last name</label>
              <input type="text" name="" />
            </div>
            <div>
              <label for="address">Address</label>
              <input type="text" name="" />
            </div>
            <div>
              <label for="cell Phone">Cell phone</label>
              <input type="number" name="" />
            </div>
            <div>
              <label for="email">Email</label>
              <input type="email" name="" />
            </div>
            <div>
              <label for="age">Age</label>
              <input type="number" name="" />
            </div>
            <div id='buttonModel' >
              <button type='button' onClick={() => cambiarEstadoMes(!estadoMes)}>Register</button>

            </div>

          </form>
        </Contenido>
      </Modal>
      <div className='conte_user'>
        <table className='blueTable'>

          <thead>
            <tr>
              <td className="td_value">Id</td>
              <td className="td_value">Name</td>
              <td className="td_value">Last name</td>
              <td className="td_value">Age</td>
              <td className="td_value">Phone</td>
              <td className="td_value">Address</td>
              <td className="td_value">Email</td>
            </tr>
          </thead>

          <tbody>
   
            {empleados.map((empleado) => (
              <tr key={empleado._id} className="tr_info">
                <td>{empleado._id}</td>
                <td>{empleado.nombre}</td>
                <td>{empleado.apellido}</td>
                <td>{empleado.años}</td>
                <td>{empleado.telefono}</td>
                <td>{empleado.direccion}</td>
                <td>{empleado.correo}</td>
                {/* <td><button className="button_actua" onClick={() => handleEditClick(usuario)}>Update</button></td> */}
                {/* <td><IoMdTrash className='delete' onClick={() => borrarUsuario(usuario._id)} /></td> */}
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