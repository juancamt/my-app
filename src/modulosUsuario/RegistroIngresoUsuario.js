import React, { useState, useContext, useEffect } from 'react'
import { IoMdNotifications, IoMdTrash, IoIosBookmarks } from 'react-icons/io';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import axios from 'axios';
import { UserContext } from '../modulos/UserContext';
import DatePicker from 'react-datepicker';
import toast, { Toaster } from 'react-hot-toast';




export const HeaderRegistroUsuario = () => {
  return (

    <header id='header_list'>
      <div className="list_header">
        <IoIosBookmarks id='user_header' />
        <span id="list_text">Registro</span>

      </div>

      <div className="list_header">

        <IoMdNotifications id='notificacion' />
      </div>


    </header>


  );
};

export function RegistroIngresoUsuario() {

  const { user } = useContext(UserContext);  // Obtén el usuario del contexto
  const [fechaInicio, setFechaInicio] = useState(new Date());
  const [savedRegistro, setSaveRegistro] = useState([]);
  const [estado, setEstado] = useState('Fecha Registrada');
  const [registro, setregistro] = useState([]);
  // fecha salida
  const [fechaFin, setFechaFin] = useState(new Date());
  const [savedRegistroSalida, setSaveRegistroSalida] = useState([]);
  const [registroSalida, setregistroSalida] = useState([]);

  const saveRegistro = async () => {
    try {
      const newEntry = {
        fechaInicio,
        estado,
        userId: user._id  // Asumiendo que user._id contiene el ID del usuario
      };
      // Hacer la solicitud POST al backend para guardar el permiso
      const response = await axios.post('http://localhost:3001/api/guardarRegistro', newEntry, { withCredentials: true });

      // Agregar la entrada guardada al estado de entradas
      setSaveRegistro([...savedRegistro, response.data]);

      toast.success('The record was saved successfully');
      

      // Reiniciar los valores del formulario
      setregistro([...registro, response.data]);
      setFechaInicio(new Date());
      setEstado('Fecha Registrada');
      console.log('Fecha Registrada exitosa')
    } catch (error) {
      console.error('Error al guardar las registro:', error);
    }
  };
  
  const saveRegistroSalida = async () => {
    try {
      const newEntry = {
        fechaFin,
        estado,
        userId: user._id  // Asumiendo que user._id contiene el ID del usuario
      };
      // Hacer la solicitud POST al backend para guardar el permiso
      const response = await axios.post('http://localhost:3001/api/guardarRegistroSalida', newEntry, { withCredentials: true });

      // Agregar la entrada guardada al estado de entradas
      setSaveRegistroSalida([...savedRegistroSalida, response.data]);

      // Reiniciar los valores del formulario
      setregistroSalida([...registroSalida, response.data]);
      setFechaFin(new Date());
      setEstado('Fecha Registrada');

      toast.success('The record was saved successfully!')
      
      console.log('Fecha Registrada exitosa')
    } catch (error) {
      console.error('Error al guardar las registro:', error);
      
    }
  };

  // mostrar los registros guardados 
  const [error, setError] = useState('');
  useEffect(() => {
    const registrosGet = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3001/api/mostrarRegistro',
          { withCredentials: true }
        );
        console.log('Datos de registro:', response.data); // Verificar los datos recibidos
        setregistro(response.data);
      } catch (error) {
        setError('Error al cargar los registros');
      }
    };

    registrosGet();
  }, []);
  // mostrar registrossalida
  useEffect(() => {
    const registrosGetSalida = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3001/api/mostrarRegistroSalida',
          { withCredentials: true }
        );
        console.log('Datos de registro:', response.data); // Verificar los datos recibidos
        setregistroSalida(response.data);
      } catch (error) {
        setError('Error al cargar los registros');
      }
    };

    registrosGetSalida();
  }, []);
// eliminar registro
  const deleteRegistration = async (registroId) => {
    try {
      await axios.delete(`http://localhost:3001/api/eliminarRegistro/${registroId}`, { withCredentials: true });
      const updatedRegistro = registro.filter((registro) => registro._id !== registroId);
      setregistro(updatedRegistro);
      toast('The record was deleted successfully ', {
        icon: <IoMdTrash 
          style={{ 
            color: 'red', 
            fontSize: '20px' 
          }}
        />
      });
    } catch (error) {
      console.error('Error al eliminar registro:', error);
    }
  };
// eliminar registro salida

  const deleteRegistrationExit = async (registroSalidaId) => {
    try {
      await axios.delete(`http://localhost:3001/api/eliminarRegistroSalida/${registroSalidaId}`, { withCredentials: true });
      const updatedRegistroSalida = registroSalida.filter((registroSalida) => registroSalida._id !== registroSalidaId);
      setregistroSalida(updatedRegistroSalida);
      toast('The record was deleted successfully ', {
        icon: <IoMdTrash 
          style={{ 
            color: 'red', 
            fontSize: '20px' 
          }}
        />
      });
      console.log('registro salida eliminado con exito');
    } catch (error) {
      console.error('Error al eliminar registro:', error);
    }
  };
  const formatDate = (date) => {
    if (!date) return 'Fecha no disponible';
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) return 'Fecha no disponible';
    return moment(parsedDate).format('YYYY-MM-DD');
  };
  const formatTime = (date) => {
    if (!date) return 'Hora no disponible';
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) return 'Hora no disponible';
    return moment(parsedDate).format('HH:mm:ss'); // Formato de hora
  };
  return (

    <div className='conteP'>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <div className='conteDate'>


        <label >
          Fecha Ingreso:

          <DatePicker className='fechas'
            selected={fechaInicio}
            onChange={(date) => setFechaInicio(date)}
            showTimeSelect
            dateFormat="Pp"
          />

          <button className='btnDate' onClick={saveRegistro} style={{ transform: "translate(400px,-50px)" }}>+</button>

        </label>
        <label>
          Fecha Salida:

          <DatePicker className='fechas'
            selected={fechaFin}
            onChange={(date) => setFechaFin(date)}
            showTimeSelect
            dateFormat="Pp"
          />

          <button className='btnDate' onClick={saveRegistroSalida} style={{ transform: "translate(400px,-50px)" }}>+</button>

        </label>

      </div>

      <div className='conteList'>
        {registro.map((registros) => (
          <div key={registros._id} className='conteInfoDateUsuario'>
            <header className='headerDate' style={{ transform: "translateY(-25px)" }}>
              <h3>Estado</h3>
              <h3 style={{ color: "#4095e5" }}>Fecha Ingreso</h3>
              <h3 style={{ color: "#4095e5" }}>Hora Ingreso</h3>
            </header>
            <div className="contedaP">
              <h4 style={{ color: "#4095e5" }}>Fecha registrada</h4>
              <p>{formatDate(registros.fechaInicio)}</p>
              <p>{formatTime(registros.fechaInicio)}</p>
              <IoMdTrash className='trash' onClick={() => deleteRegistration(registros._id)}  style={{ transform: "translateY(40px)", position: "absolute" }} />
            </div>
          </div>
        ))}

        {registroSalida.map((registroS) => (
          <div key={registroS._id} className='conteInfoDateUsuario'>
            <header className='headerDate' style={{ transform: "translateY(-25px)" }}>
              <h3>Estado</h3>
              <h3 style={{ color: "red" }}>Fecha Salida</h3>
              <h3 style={{ color: "red" }}>Hora Salida</h3>
            </header>
            <div className="contedaP">
              <h4 style={{ color: "#4095e5" }}>Fecha registrada</h4>
              <p>{formatDate(registroS.fechaFin)}</p>
              <p>{formatTime(registroS.fechaFin)}</p>
              <IoMdTrash className='trash' onClick={() => deleteRegistrationExit(registroS._id)}  style={{ transform: "translateY(40px)", position: "absolute" }} />
            </div>
          </div>
        ))}
      </div>

    </div>

  );
}
