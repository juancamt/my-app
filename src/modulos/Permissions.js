import './App.css';
import axios from 'axios';
import React, {useEffect,useState} from 'react'; 
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

  // mostrar los permisos guardados 
const [permisos, setPermisos] = useState([]);
const [error, setError] = useState('');

useEffect(() => {
  const fetchPermisos = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/listarPermisos', { withCredentials: true });
      setPermisos(response.data);
    } catch (error) {
      setError('Error al cargar los permisos');
    }
  };

    fetchPermisos();
}, []);
 

if (error) {
    return <p>{error}</p>;
}
  return (
    <main id='main_list'>


      <div className='contePermissions'  >
    {permisos.map((permiso)=>(

        <div className='conteInfoPermissions' key={permiso._id}>

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
                <td className='td_value'>{permiso._id}</td>
                <td className='td_value'>{permiso.user.nombre}</td>
                <td className='td_value'>{permiso.user.apellido}</td>
                <td className='td_value'>{permiso.startDate}</td>
                <td className='td_value'>{permiso.endDate}</td>
              </tr>
            </tbody>
          </table>

          <h4 id='message'>Motivo de permiso:</h4>
          <div className='contenidoParrafo'>
            <p>{permiso.content}</p>
          </div>

        </div>
        

        ))}
      </div>
    </main>

  );
};
