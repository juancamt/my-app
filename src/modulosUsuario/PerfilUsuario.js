import React, { useContext, useState } from 'react'
import { IoMdPerson, IoMdNotifications } from 'react-icons/io';
import '../modulosUsuario/Usuarios.css';
import Messages from '../modulos/Messages';
import Modal from '../modulos/Modal';
import styled from 'styled-components';
import { UserContext } from '../modulos/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const HeaderUsuario = () => {

  return (


    <header id='header_list'>
      <div className="list_header">
        <IoMdPerson id='user_header' />
        <span id="list_text">Profile</span>

      </div>

      <div className="list_header">

        <IoMdNotifications id='notificacion' />
      </div>


    </header>


  );
};
export const PerfilUsuario = () => {
  const [estadoMes, cambiarEstadoMes] = useState(false);
  const [estadoModal1, cambiarEstadoModal] = useState(false);

  const { user,setUser } = useContext(UserContext);

  const [nombre, setNombre] = useState(user?.nombre || '');
  const [apellido, setApellido] = useState(user?.apellido || '');
  const [direccion, setDireccion] = useState(user?.direccion || '');
  const [telefono, setTelefono] = useState(user?.telefono || '');
  const [correo, setCorreo] = useState(user?.correo || '');
  const [años, setAños] = useState(user?.años || '');
  const navigate = useNavigate();



  const handleUpdate = async () => {
    try {

      
      const updatedUser = {
        nombre,
        apellido,
        direccion,
        telefono,
        correo,
        años
      };
      const response = await axios.put(`http://localhost:3001/api/updateUsuario/${user._id}`, updatedUser);
      navigate('/Usuario/perfilUsuario');

    // Actualiza el estado local del usuario con los datos devueltos por el servidor
    setUser(response.data);
    console.log('perfil actualizado')

  } catch (error) {
    console.error('Error al actualizar usuario:', error);
  }
};

  if (!user) {
    return <div>No user logged</div>
  };
  return (



    <div className='contePerfil'>
      <Messages
        estadoMessages={estadoMes}
        cambiarEstadoMessages={cambiarEstadoMes}
        title2='update'
        messagesParrafo={'The data has been updated Successfully.'}
      >
      </Messages>

      <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal} titulo='Update Profile' >
        <Contenido>

          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div>
              <label htmlFor="last name">Last name</label>
              <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
            </div>
            <div>
              <label htmlFor="cell Phone">Cell phone</label>
              <input type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
            </div>
            <div>
              <label htmlFor="age">Age</label>
              <input type="number" value={años} onChange={(e) => setAños(e.target.value)} />
            </div>
            <div id='buttonModel'>
              <button type='button' onClick={handleUpdate}>Register</button>
            </div>

          </form>
        </Contenido>
      </Modal>

      <div className='imagenPerfil'>

        <div className='imagen'>
          <img src="\imagenes\user-1.jpeg" />
        </div>

      </div>

      <div className='datosPerfil'>

        <div className='tabla'>
          <div className='fila'>

            <div className='columna'>
              <div className='header'>Name</div>
              <div className='contenido'>{user.nombre}</div>
            </div>
            <div className='columna'>
              <div className='header'>Last Name</div>
              <div className='contenido'>{user.apellido}</div>
            </div>
            <div className='columna'>
              <div className='header'>Age</div>
              <div className='contenido'>{user.años}</div>
            </div>
            <div className='columna'>
              <div className='header'>Phone</div>
              <div className='contenido'>{user.telefono}</div>
            </div>
            <div className='columna'>
              <div className='header'>Address</div>
              <div className='contenido'>{user.direccion}</div>
            </div>
            <div className='columna'>
              <div className='header'>Email</div>
              <div className='contenido'>{user.correo}</div>
            </div>


          </div>
        </div>
        <div className='buttoUpdate' onClick={() => cambiarEstadoModal(!estadoModal1)}>
          Update
        </div>
      </div>

    </div>

  )
}
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
