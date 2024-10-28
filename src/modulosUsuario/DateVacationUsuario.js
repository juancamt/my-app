import React, { useState, useContext, useEffect } from 'react'
import { IoMdPerson, IoMdNotifications, IoMdTrash, IoMdCalendar } from 'react-icons/io';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css'
import axios from 'axios';
import { UserContext } from '../modulos/UserContext';
import moment from 'moment';
import toast, { Toaster } from 'react-hot-toast';



export const HeaderDateVacation = () => {
  return (


    <header id='header_list'>
      <div className="list_header">
        <IoMdCalendar id='user_header' />
        <span id="list_text">Date Vacation</span>

      </div>

      <div className="list_header">

        <IoMdNotifications id='notificacion' />
      </div>


    </header>


  );
};
export function DateVacationUsuario() {
  // guardar datos 
  const { user } = useContext(UserContext);  // Obtén el usuario del contexto
  const [fechaInicio, setFechaInicio] = useState(new Date());
  const [fechaFin, setFechaFin] = useState(new Date());
  const [savedVaciones, setSaveVaciones] = useState([]);
  const [estado, setEstado] = useState('Fecha Registrada');
  const [vacaciones, setVacaciones] = useState([]);


  const saveVacaciones = async () => {
    try {
      const newEntry = {
        fechaInicio,
        fechaFin,
        estado,
        userId: user._id  // Asumiendo que user._id contiene el ID del usuario
      };
      // Hacer la solicitud POST al backend para guardar el permiso
      const response = await axios.post('https://personal-backend-project.onrender.com/api/guardarVacaciones', newEntry, { withCredentials: true });

      // Agregar la entrada guardada al estado de entradas
      setSaveVaciones([...savedVaciones, response.data]);
      toast.success('The vacation was saved successfully!')

      // Reiniciar los valores del formulario
      setVacaciones([...vacaciones, response.data]);
      setFechaInicio(new Date());
      setFechaFin(new Date());
      setEstado('Fecha Registrada');
    } catch (error) {
      console.error('Error al guardar las vacaciones:', error);
    }
  };

  // mostrar las vacaciones guardados 
  const [error, setError] = useState('');
  useEffect(() => {
    const vacionesGet = async () => {
      try {
        const response = await axios.get(
          'https://personal-backend-project.onrender.com/api/mostrarVacaciones',
          { withCredentials: true }
        );
        console.log('Datos de vacaciones:', response.data); // Verificar los datos recibidos
        setVacaciones(response.data);
      } catch (error) {
        setError('Error al cargar las vacaciones');
      }
    };

    vacionesGet();
  }, []);

  // eliminar vacaciones 
  const deleteVacation = async (vacacionesId) => {
    try {
      await axios.delete(`https://personal-backend-project.onrender.com/api/borrarVacaciones/${vacacionesId}`, { withCredentials: true });
      const updatedVacation = vacaciones.filter((vacaciones) => vacaciones._id !== vacacionesId);
      setVacaciones(updatedVacation);
      toast('The vacation was deleted successfully ', {
        icon: <IoMdTrash
          style={{
            color: 'red',
            fontSize: '20px'
          }}
        />
      });
    } catch (error) {
      console.error('Error al eliminar vacacion:', error);
    }
  };

  const formatDate = (date) => {
    if (!date) return 'Fecha no disponible';
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) return 'Fecha no disponible';
    return moment(parsedDate).format('YYYY-MM-DD');
  };
  return (

    <div className='conteP'>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <div className='conteDate'>

        <DatePicker className='fechas'
          selected={fechaInicio}
          onChange={(date) => setFechaInicio(date)}
          selectsStart
          fechaInicio={fechaInicio}
          fechaFin={fechaFin}

        />
        <span id='span'>a</span>

        <DatePicker className='fechas'
          selected={fechaFin}
          onChange={(date) => setFechaFin(date)}
          selectsEnd
          fechaInicio={fechaInicio}
          fechaFin={fechaFin}
          minDate={fechaInicio}
        />
        <button className='btnDate' onClick={saveVacaciones}>+</button>

      </div>

      <div className='conteList'>
        {vacaciones.map((vacacion) => (
          <div key={vacacion._id} className='conteInfoDateUsuario'>
            <header className='headerDate' style={{ transform: 'translateY(-25px)' }}>
              <h3>estado</h3>
              <h3>Fecha de Inicio</h3>
              <h3>Fecha de Fin</h3>
            </header>
            <div className="contedaP">
              <h4 style={{ color: '#4095e5' }}>Fecha registrada</h4>
              <p>{formatDate(vacacion.fechaInicio)}</p>
              <p>{formatDate(vacacion.fechaFin)}</p>
              <IoMdTrash className='trash' onClick={() => deleteVacation(vacacion._id)} style={{ transform: 'translateY(40px)', position: 'absolute' }} />
            </div>

          </div>
        ))}
      </div>

    </div>

  )
};


