import './App.css';
import { IoMdPerson,IoMdTrash, IoIosSearch, IoMdNotifications, IoIosAddCircle } from 'react-icons/io';
import {Link} from 'react-router-dom';
import React,{useState} from 'react';

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
        <Link to="/App/CreateUserList">
        <IoIosAddCircle id='addUser'/>
        </Link>
        <IoMdNotifications id='notificacion' />
      </div>


    </header>


  );
};
export const UserList = () => {
  
  const [colorR,setColor] = useState("");
  const miFuncion = ()=>{
    setColor(colorR==='disabled' ? 'activated':'disabled')
  };

  return (
    <main id='main_list'>

    <div className='conte_user'>
      <table>

        <thead>
          <tr>
            <td className="td_value">Id</td>
            <td className="td_value">Rol</td>
            <td className="td_value">User</td>
            <td className="td_value">Name</td>
            <td className="td_value">Last name</td>
            <td className="td_value">Email</td>
            <td className="td_value">state</td>
          </tr>
        </thead>

        <tbody>
          <tr className="tr_info">
            <td>2355</td>
            <td>Admin</td>
            <td><img src="\imagenes\persona-ciudad.jpg" className="img_table"/></td>
            <td>Lus</td>
            <td>Esperanza</td>
            <td>Lus@hotmail.com</td>
            {/* la funcion de onclick toca cambiarla ala secion de update para poder hacer el cambio de color y de valor ="acivated" && "disabled" */}
            <td className={`state_Act ${colorR==='disabled'?'red':''}`} onClick={miFuncion}>activated</td>
            <td><button className="button_actua">Update</button></td>
            <td><IoMdTrash className='delete'/></td>
          </tr>
          <tr className="tr_info">
            <td>2355</td>
            <td>Admin</td>
            <td><img src="\imagenes\persona-ciudad.jpg" className="img_table"/></td>
            <td>Lus</td>
            <td>Esperanza</td>
            <td>Lus@hotmail.com</td>
            <td className="state_Act">activated</td>
            <td><button className="button_actua">Update</button></td>
            <td><IoMdTrash className='delete'/></td>
          </tr>
          <tr className="tr_info">
            <td>2355</td>
            <td>Admin</td>
            <td><img src="\imagenes\persona-ciudad.jpg" className="img_table"/></td>
            <td>Lus</td>
            <td>Esperanza</td>
            <td>Lus@hotmail.com</td>
            <td className={`state_Act ${colorR==='disabled'?'red':''}`} onClick={miFuncion}>disabled</td>
            <td><button className="button_actua">Update</button></td>
            <td><IoMdTrash className='delete'/></td>
          </tr>

        </tbody>

      </table>
    </div>
    </main>
  );
};
  