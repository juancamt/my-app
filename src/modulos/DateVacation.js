
import { useEffect, useState } from 'react';
import './App.css';
import { IoMdPerson, IoIosSearch, IoMdNotifications } from 'react-icons/io';
import axios from 'axios';

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

  const [vacaciones, setVacaciones] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVacaciones = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/listarVacaciones', { withCredentials: true });
        setVacaciones(response.data);
      } catch (error) {
        setError('Error al cargar las vacaciones');
      }
    };

    fetchVacaciones();
  }, []);


  return (
    <main id='main_list'>

      <div className='conteinerDAte'>
      {error && <p style={{ color: 'red' }}>{error}</p>}
        {vacaciones.map((vacacione) => (
          <div className='conteInfoDate' key={vacacione._id}>
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
                  <td className='td_valueDate'>{vacacione._id}</td>
                  <td className='td_valueDate'>{vacacione.user.nombre}</td>
                  <td className='td_valueDate'>{vacacione.user.apellido}</td>
                  <td className='td_valueDate'>{vacacione.fechaInicio}</td>
                  <td className='td_valueDate'>{vacacione.fechaFin}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}

      </div>

    </main>
  );
};

