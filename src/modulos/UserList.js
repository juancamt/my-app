import './App.css';
import { IoMdPerson, IoMdTrash, IoIosSearch, IoMdNotifications, IoIosAddCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import Messages, { MessagesRemove } from './Messages';

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

  const [colorR, setColor] = useState("");
  const miFuncion = () => {
    setColor(colorR === 'disabled' ? 'activated' : 'disabled')
  };
  const [estadoModal1, cambiarEstadoModal] = useState(false);
  const [estadoMes, cambiarEstadoMes] = useState(false);
  const [estadoMessagesRemove, cambiarEstadoMessagesRemove] = useState(false);

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
        linRemove='/App/userList'
      >
      </MessagesRemove>

      <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal} titulo='Update User' >
        <ContenidoUser>

          <form id='formula'>
            <div>
              <label for="rol">Rol</label>
              <select>
                <option value="adiministrador">Adiministrador</option>
                <option value="usuario">Usuario</option>
              </select>
            </div>
            <div >
              <label for="name">Name</label>
              <input type="text" />

            </div>
            <div >
              <label for="last name">Last name</label>
              <input type="text" name="" />
            </div>
            <div>
              <label for="email">Email</label>
              <input type="email" name="" />
            </div>
         
            <div id='buttonModel' >
              <button type='button' onClick={() => cambiarEstadoMes(!estadoMes)}>Register</button>

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
              <th className="td_value">User</th>
              <th className="td_value">Name</th>
              <th className="td_value">Last name</th>
              <th className="td_value">Email</th>
              <th className="td_value">state</th>
            </tr>
          </thead>

          <tbody>
            <tr className="tr_info">
              <td>2355</td>
              <td>Admin</td>
              <td><img src="\imagenes\persona-ciudad.jpg" className="img_table" /></td>
              <td>Lus</td>
              <td>Esperanza</td>
              <td>Lus@hotmail.com</td>
              {/* la funcion de onclick toca cambiarla ala secion de update para poder hacer el cambio de color y de valor ="acivated" && "disabled" */}
              <td className={`state_Act ${colorR === 'disabled' ? 'red' : ''}`} onClick={miFuncion}>activated</td>
              <td><button className="button_actua" onClick={() => cambiarEstadoModal(!estadoModal1)}>Update</button></td>
              <td><IoMdTrash className='delete' onClick={() => cambiarEstadoMessagesRemove(!estadoMes)} /></td>
            </tr>
            <tr className="tr_info">
              <td>2355</td>
              <td>Admin</td>
              <td><img src="\imagenes\persona-ciudad.jpg" className="img_table" /></td>
              <td>Lus</td>
              <td>Esperanza</td>
              <td>Lus@hotmail.com</td>
              <td className="state_Act">activated</td>
              <td><button className="button_actua" onClick={() => cambiarEstadoModal(!estadoModal1)}>Update</button></td>
              <td><IoMdTrash className='delete' onClick={() => cambiarEstadoMessagesRemove(!estadoMes)} /></td>
            </tr>
            <tr className="tr_info">
              <td>2355</td>
              <td>Admin</td>
              <td><img src="\imagenes\persona-ciudad.jpg" className="img_table" /></td>
              <td>Lus</td>
              <td>Esperanza</td>
              <td>Lus@hotmail.com</td>
              <td className={`state_Act ${colorR === 'disabled' ? 'red' : ''}`} onClick={miFuncion}>disabled</td>
              <td><button className="button_actua" onClick={() => cambiarEstadoModal(!estadoModal1)}>Update</button></td>
              <td><IoMdTrash className='delete' onClick={() => cambiarEstadoMessagesRemove(!estadoMes)} /></td>
            </tr>

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

