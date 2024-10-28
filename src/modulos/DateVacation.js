
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
        const response = await axios.get('https://personal-backend-project.onrender.com/api/listarVacaciones', { withCredentials: true });
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
   
          <div className="table-wrapper" key={vacacione._id}>
            <div className="table-header">
              <div className="table-cell">ID</div>
              <div className="table-cell">NAME</div>
              <div className="table-cell">LAST NAME</div>
              <div className="table-cell">FECHA INICIO</div>
              <div className="table-cell">FECHA FIN</div>
            </div>
            <div className="table-row">
              <div className="table-cell">{vacacione._id}</div>
              <div className="table-cell">{vacacione.user.nombre}</div>
              <div className="table-cell">{vacacione.user.apellido}</div>
              <div className="table-cell">{vacacione.fechaInicio}</div>
              <div className="table-cell">{vacacione.fechaFin}</div>
            </div>
          </div>
        ))}

      </div>

    </main>
  );
};

