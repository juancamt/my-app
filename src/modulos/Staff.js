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

  //api para llamar datos  "get"

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

  //api para  borrar datos  "delete"

  const borrarEmpleado = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/deleteEmpleado/${id}`);
      getEmpleados(); // Actualizar la lista de usuarios después de eliminar
      cambiarEstadoMessagesRemove(true);
      console.log("Empleado eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar el empleado:", error);
    }
  };


  // actualizar datos  update 

  const [empleadoEditado, setEmpleadoEditado] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    años: '',
    genero:'',
    direccion:''
  });
  
  const handleEditClick = (empleado) => {
    setEmpleadoEditado({
      // rol: usuario.rol,
      nombre: empleado.nombre,
      apellido: empleado.apellido,
      correo: empleado.correo,
      direccion: empleado.direccion,
      telefono: empleado.telefono,
      años: empleado.años,
      _id: empleado._id
    });
    cambiarEstadoModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmpleadoEditado((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3001/api/updateEmpleado/${empleadoEditado._id}`, empleadoEditado);
      console.log("Respuesta de la API:", response.data); // Mostrar la respuesta completa en la consola
      getEmpleados();
      cambiarEstadoMes(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000); 
    } catch (error) {
      console.error("Error al actualizar empleado:", error);
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

          <form  onSubmit={handleFormSubmit}>
          <div>
              <label htmlFor="nombre">Name</label>
              <input type="text" name="nombre" value={empleadoEditado.nombre} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="apellido">Last name</label>
              <input type="text" name="apellido" value={empleadoEditado.apellido} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="direccion">Address</label>
              <input type="text" name="direccion" value={empleadoEditado.direccion} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="telefono">Cell phone</label>
              <input type="number" name="telefono" value={empleadoEditado.telefono} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="correo">Email</label>
              <input type="email" name="correo" value={empleadoEditado.correo} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="años">Age</label>
              <input type="number" name="años" value={empleadoEditado.años} onChange={handleInputChange} />
            </div>
            <div id='buttonModel'>
              <button type='submit'>Update</button>
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
                <td><button className="button_actua" onClick={() => handleEditClick(empleado)}>Update</button></td>
                <td><IoMdTrash className='delete' onClick={() => borrarEmpleado(empleado._id)} /></td>
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