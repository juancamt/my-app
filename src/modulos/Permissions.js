import './App.css';
import { IoMdPerson, IoIosSearch, IoMdNotifications } from 'react-icons/io';


export const HeaderPermissions = () => {
  return (


    <header id='header_list'>
      <div className="list_header">
        <IoMdPerson id='user_header' />
        <span id="list_text">Permissions</span>

      </div>

      <div className="list_header">
        <IoIosSearch id='search_header' />
        <input type="text" placeholder="Search" id="search_input" />
        <IoMdNotifications id='notificacion' />
      </div>


    </header>


  );
};
export const Permissions = () => {
  return (
    <main id='main_list'>


    <div className='contePermissions'>

      <div className='conteInfoPermissions'>

        <table>
          <thead>
            <tr>
              <td className='td_info'>ID</td>
              <td className='td_info'>Name</td>
              <td className='td_info'>Last Name</td>
              <td className='td_info'>Fecha Inicio</td>
              <td className='td_info'>Fecha Fin</td>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td className='td_value'>5842</td>
              <td className='td_value'>Jose</td>
              <td className='td_value'>Alvares</td>
              <td className='td_value'>4/02/2024</td>
              <td className='td_value'>6/02/2024</td>
            </tr>      
          </tbody>
        </table>

        <div className='ContetexArea'>
          <h4>Motivo de permiso:</h4>
          <div>
            <p>contenido del permiso....</p>
          </div>

        </div>

      </div>

    </div>
    </main>

  );
};
