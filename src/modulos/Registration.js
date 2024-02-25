
import './App.css';
import { IoMdPerson, IoIosSearch, IoMdNotifications } from 'react-icons/io';



export const HeaderRegistration = () => {
  return (


    <header id='header_list'>
      <div className="list_header">
        <IoMdPerson id='user_header' />
        <span id="list_text">Registration</span>

      </div>

      <div className="list_header">
        <IoIosSearch id='search_header' />
        <input type="text" placeholder="Search" id="search_input" />
        <IoMdNotifications id='notificacion' />
      </div>


    </header>


  );
};
export const Registration = () => {

  return (
    <main id='main_list'>
  
      <div className='conteinerDAte'>

        <div className='conteInfoDate'>

          <table>
            <thead>
              <tr>
                <td className='td_infoDate'>ID</td>
                <td className='td_infoDate'>Name</td>
                <td className='td_infoDate'>Last Name</td>
                <td className='td_infoDate'>Fecha Inicio</td>
                <td className='td_infoDate'>Hora ingreso</td>
                <td className='td_infoDate'>Hora salida</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='td_valueDate'>5842</td>
                <td className='td_valueDate'>Raul</td>
                <td className='td_valueDate'>Perez</td>
                <td className='td_valueDate'>4/02/2024</td>
                <td className='td_valueDate'>6:00 am</td>
                <td className='td_valueDate'>5:00 pm</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>

    </main>
  );
};
