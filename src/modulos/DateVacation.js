
import './App.css';
import { IoMdPerson, IoIosSearch, IoMdNotifications } from 'react-icons/io';


export const HeaderDAte = () => {
  return (


    <header id='header_list'>
      <div className="list_header">
        <IoMdPerson id='user_header' />
        <span id="list_text">Date Vacation</span>

      </div>

      <div className="list_header">
        <IoIosSearch id='search_header' />
        <input type="text" placeholder="Search" id="search_input" />
        <IoMdNotifications id='notificacion' />
      </div>


    </header>


  );
};
export const DateVacation = () => {
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
                <td className='td_infoDate'>Fecha Fin</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='td_valueDate'>5842</td>
                <td className='td_valueDate'>Raul</td>
                <td className='td_valueDate'>Perez</td>
                <td className='td_valueDate'>4/02/2024</td>
                <td className='td_valueDate'>6/02/2024</td>
              </tr>
            </tbody>
          </table>

        </div>
        <div className='conteInfoDate'>

        <table>
            <thead>
              <tr>
                <td className='td_infoDate'>ID</td>
                <td className='td_infoDate'>Name</td>
                <td className='td_infoDate'>Last Name</td>
                <td className='td_infoDate'>Fecha Inicio</td>
                <td className='td_infoDate'>Fecha Fin</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='td_valueDate'>2355</td>
                <td className='td_valueDate'>Lus</td>
                <td className='td_valueDate'>Esperanza</td>
                <td className='td_valueDate'>4/02/2024</td>
                <td className='td_valueDate'>6/02/2024</td>
              </tr>
            </tbody>
          </table>

        </div>
        <div className='conteInfoDate'>

        <table>
            <thead>
              <tr>
                <td className='td_infoDate'>ID</td>
                <td className='td_infoDate'>Name</td>
                <td className='td_infoDate'>Last Name</td>
                <td className='td_infoDate'>Fecha Inicio</td>
                <td className='td_infoDate'>Fecha Fin</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='td_valueDate'>2225</td>
                <td className='td_valueDate'>Jose</td>
                <td className='td_valueDate'>Alvares</td>
                <td className='td_valueDate'>4/02/2024</td>
                <td className='td_valueDate'>6/02/2024</td>
              </tr>
            </tbody>
          </table>

        </div>
      
      </div>

    </main>
  );
};

