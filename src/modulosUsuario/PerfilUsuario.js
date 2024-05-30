import React,{useState} from 'react'
import { IoMdPerson, IoMdNotifications } from 'react-icons/io';
import '../modulosUsuario/Usuarios.css';
import Messages from '../modulos/Messages';
import Modal from '../modulos/Modal';
import styled from 'styled-components';


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

      <div className='imagenPerfil'>

        <div className='imagen'>
          <img src="\imagenes\user-2.jpeg" />
        </div>

      </div>

      <div className='datosPerfil'>

        <div className='tabla'>
          <div className='fila'>

            <div className='columna'>
              <div className='header'>Name</div>
              <div className='contenido'>Raul</div>
            </div>
            <div className='columna'>
              <div className='header'>Last Name</div>
              <div className='contenido'>Perez</div>
            </div>
            <div className='columna'>
              <div className='header'>Age</div>
              <div className='contenido'>22</div>
            </div>
            <div className='columna'>
              <div className='header'>Phone</div>
              <div className='contenido'>45458454</div>
            </div>
            <div className='columna'>
              <div className='header'>Address</div>
              <div className='contenido'>Calle 53 No 10-60/46</div>
            </div>
            <div className='columna'>
              <div className='header'>Email</div>
              <div className='contenido'>Raul@hotmail.com</div>
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
