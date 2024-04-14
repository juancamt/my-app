import './App.css';
import { IoMdPerson, IoMdTrash, IoIosSearch, IoMdNotifications } from 'react-icons/io';
import React, { useState } from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import Messages, { MessagesRemove } from './Messages';

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
        linRemove='/App/staff'
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
            <tr className="tr_info">
              <td>2355</td>
              <td>Lus</td>
              <td>Esperanza</td>
              <td>22</td>
              <td>3164778254</td>
              <td>calle 53 No 10-60/46</td>
              <td>Lus@hotmail.com</td>
              <td><button className="button_actua" onClick={() => cambiarEstadoModal(!estadoModal1)}>Update</button></td>
              <td><IoMdTrash className='delete' onClick={() => cambiarEstadoMessagesRemove(!estadoMes)} /></td>
            </tr>
            <tr className="tr_info">
              <td>5842</td>
              <td>Raul</td>
              <td>Perez</td>
              <td>22</td>
              <td>3164778254</td>
              <td>calle 53 No 10-60/46</td>
              <td>Raul@hotmail.com</td>
              <td><button className="button_actua" onClick={() => cambiarEstadoModal(!estadoModal1)}>Update</button></td>
              <td><IoMdTrash className='delete' onClick={() => cambiarEstadoMessagesRemove(!estadoMes)} /></td>
            </tr>
            <tr className="tr_info">
              <td>9854</td>
              <td>Ana</td>
              <td>velez</td>
              <td>25</td>
              <td>3164778254</td>
              <td>calle 53 No 10-60/46</td>
              <td>Ana@hotmail.com</td>
              <td><button className="button_actua" onClick={() => cambiarEstadoModal(!estadoModal1)}>Update</button></td>
              <td><IoMdTrash className='delete' onClick={() => cambiarEstadoMessagesRemove(!estadoMes)} /></td>
            </tr>

          </tbody>

        </table>
      </div>
    </main>
  );
};

const Contenido = styled.div`
position: relative;


  form{
    position: relative;
    height: 500px;
    display: grid;
    grid-template-columns: auto auto ;
    grid-template-rows: repeat(4,1fr);
    
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
      
      label{
        padding-bottom: 20px;
        font-size: 20px;
      }
    }
    button{
    background:#FCCA00;
    color:#000;

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