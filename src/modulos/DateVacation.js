
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

    </header>


  );
};
export const DateVacation = () => {

  const [vacaciones, setVacaciones] = useState([]);
  const [error, setError] = useState('');
  const [filteredVacaciones, setFilteredVacaciones] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const filtered = vacaciones.filter(vacacioN =>
      `${vacacioN.user.nombre} ${vacacioN.user.apellido} `.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVacaciones(filtered);
  }, [searchTerm, vacaciones]);

  return (
    <main id='main_list'>

      <div className='conteinerDAte'>
        <div style={{
          position: 'fixed',
          top: '0px',
          right: '20px'
        }}>

          <IoIosSearch className='search' />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search_input"
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {filteredVacaciones.map((vacacione) => (
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

