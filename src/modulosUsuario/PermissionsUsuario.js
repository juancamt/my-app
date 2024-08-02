import React, { useState,useContext,useEffect } from 'react'
import { IoMdPerson, IoMdNotifications,IoMdTrash,IoMdClipboard} from 'react-icons/io';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css'
import axios from 'axios';
import { UserContext } from '../modulos/UserContext';  


export const HeaderPermissionsUsuario = () => {
  return (


    <header id='header_list'>
      <div className="list_header">
        <IoMdClipboard id='user_header' />
        <span id="list_text">Permissions</span>

      </div>

      <div className="list_header">

        <IoMdNotifications id='notificacion' />
      </div>


    </header>


  );
};
export function PermissionsUsuario() {

  const { user } = useContext(UserContext);  // Obtén el usuario del contexto
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [textareaContent, setTextareaContent] = useState('');
  const [savedEntries, setSavedEntries] = useState([]); 
  const [permisos, setPermisos] = useState([]);
  const [error, setError] = useState('');

  const saveEntry = async () => {
    try {
      const newEntry = {
        startDate,
        endDate,
        content: textareaContent,
        userId: user._id  // Asumiendo que user._id contiene el ID del usuario
      };
      // Hacer la solicitud POST al backend para guardar el permiso
      const response = await axios.post('http://localhost:3001/api/guardarPermiso', newEntry ,{withCredentials:true} );

      // Agregar la entrada guardada al estado de entradas
      setSavedEntries([...savedEntries, response.data]);

      // Reiniciar los valores del formulario
      setPermisos([...permisos, response.data]);
      setStartDate(new Date());
      setEndDate(new Date());
      setTextareaContent('');
    } catch (error) {
      console.error('Error al guardar permiso:', error);
    }
  };// mostrar los permisos guardados 
  useEffect(() => {
    const fetchPermisos = async () => {
        try {
            const response = await axios.get(
                'http://localhost:3001/api/mostrarPermisos',
                { withCredentials: true }
            );
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
// borrar el permiso
const deleteEntry = async (permisoId) => {
  try {
    await axios.delete(`http://localhost:3001/api/borrarPermisos/${permisoId}`, { withCredentials: true });
    const updatedPermisos = permisos.filter((permiso) => permiso._id !== permisoId);
    setPermisos(updatedPermisos);
  } catch (error) {
    console.error('Error al eliminar permiso:', error);
  }
};


  const formatDate = (date) => {
    date = new Date(date)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  return (

    <div className='conteP'>

      <div className='conteDate'>

        <DatePicker className='fechas'
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          
        />
        <span id='span'>a</span>

        <DatePicker className='fechas'
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />

        <textarea
          name="postContent"
          rows={4}
          cols={40}
          value={textareaContent}
          onChange={(e) => setTextareaContent(e.target.value)}
        />
        <button className='btn' onClick={saveEntry}>+</button>

      </div>

      <div className='conteList'>
        {permisos.map((permiso) => (
          <div key={permiso._id} className='conteInfoDateUsuario'>
            <header className='headerDate' >

              <h3>Motivo de Permiso</h3>
              <h3>Fecha de Inicio</h3>
              <h3>Fecha de Fin</h3>
            </header>
            <div className="contedaP">
              <p> {permiso.content}</p>
              <p> {formatDate(permiso.startDate)}</p>
              <p> {formatDate(permiso.endDate)}</p>
              <IoMdTrash className='trash' onClick={() => deleteEntry(permiso._id)} />
            </div>
          </div>
        ))}
      </div>

    </div>

  )
};


