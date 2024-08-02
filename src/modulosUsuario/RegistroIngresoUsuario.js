import React, { useState, useContext,useEffect } from 'react'
import { IoMdNotifications, IoMdTrash, IoIosBookmarks } from 'react-icons/io';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import axios from 'axios';
import { UserContext } from '../modulos/UserContext';
import DatePicker from 'react-datepicker';





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
  const [fechaFin, setFechaFin] = useState(new Date());
  const [savedRegistro, setSaveRegistro] = useState([]);
  const [estado, setEstado] = useState('Fecha Registrada');
  const [registro, setregistro] = useState([]);


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
      setSaveRegistro([...savedRegistro, response.data]);

      // Reiniciar los valores del formulario
      setregistro([...registro, response.data]);
      setFechaFin(new Date());
      setEstado('Fecha Registrada');
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

      <div className='conteDate'>

        <label for="">
          Fecha Ingreso:

          <DatePicker className='fechas'
            selected={fechaInicio}
            onChange={(date) => setFechaInicio(date)}
            showTimeSelect
            dateFormat="Pp"
          />

          <button className='btnDate' onClick={saveRegistro} style={{ transform: "translate(400px,-50px)" }}>+</button>

        </label>
        <label for="">
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
              <IoMdTrash className='trash' style={{ transform: "translateY(40px)", position: "absolute" }} />
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}












// import React,{ useState,useContext } from 'react'
// import { IoMdNotifications, IoMdTrash, IoIosBookmarks } from 'react-icons/io';
// import Datetime from 'react-datetime';
// import moment from 'moment';
// import 'react-datetime/css/react-datetime.css';
// import axios from 'axios';
// import { UserContext } from '../modulos/UserContext';
// import DatePicker from 'react-datepicker';





// export const HeaderRegistroUsuario = () => {
//   return (


//     <header id='header_list'>
//       <div className="list_header">
//         <IoIosBookmarks id='user_header' />
//         <span id="list_text">Registro</span>

//       </div>

//       <div className="list_header">

//         <IoMdNotifications id='notificacion' />
//       </div>


//     </header>


//   );
// };

// export function RegistroIngresoUsuario() {

//   const { user } = useContext(UserContext);  // Obtén el usuario del contexto
//   const [fechaIngreso, setFechaIngreso] = useState(new Date());
//   // const [endDate, setEndDate] = useState(new Date());
//   const [savedEntries, setSavedEntries] = useState([]);
//   const [registro, setVacaciones] = useState([]);
//   const [estado, setEstado] = useState('Fecha Registrada');
//   const [error, setError] = useState('');

//   const saveRegistro = async () => {
//     try {
//       const newRegistro = {
//         // fechaIngreso :moment(fechaIngreso).format('YYYY-MM-DD'),
//         // estado
//         userId: user._id
//          // Asumiendo que user._id contiene el ID del usuario
//       };
//       // Hacer la solicitud POST al backend para guardar el permiso
//       const response = await axios.post('http://localhost:3001/api/guardarVacaciones', newRegistro ,{withCredentials:true} );

//       // Agregar la entrada guardada al estado de entradas
//       setSavedEntries([...savedEntries, response.data]);

//       // Reiniciar los valores del formulario
//       setVacaciones([...vacaciones, response.data]);
//       // setFechaIngreso(new Date());
//       // setEstado('Fecha Registrada');
//       // setEndDate(new Date());
//       console.log('exito al guardar ', response.data);


//     } catch (error) {
//       console.error('Error al guardar vacacion:', error);
//     }
//   };




//   // -----------------------------------------------------------//
//   // const [fechaIngreso, setfechaIngreso] = useState(moment());
//   // const [time, setTime] = useState(moment());
//   // const [date2, setDate2] = useState(moment());
//   // const [time2, setTime2] = useState(moment());
//   // const [savedDates, setSavedDates] = useState([]);
//   // const [savedDatesSalida, setSavedDatesSalida] = useState([]);

//   // const saveDates = () => {
//   //   setSavedDates([...savedDates, { date, time}]);

//   // };
//   // const saveDatesSalida = () => {
//   //   setSavedDatesSalida([...savedDatesSalida, { date2, time2}]);

//   // };

//   // const formatDate = (date) => date.format('DD-MM-YYYY');
//   // const formatTime = (time) => time.format('HH:mm A');
//   // const formatDateSalida = (date2) => date2.format('DD-MM-YYYY');
//   // const formatTimeSalida = (time2) => time2.format('HH:mm A');

//   const formatDate = (date) => {
//     if (!date) return 'Fecha no disponible';
//     const parsedDate = new Date(date);
//     if (isNaN(parsedDate.getTime())) return 'Fecha no disponible';
//     // return moment(parsedDate).format('DD-MM-YYYY');
//     return moment(parsedDate).format('YYYY-MM-DD');
//   };
//   return (
//     <div className='conteP'>
//       <div className='conteDate'>
//       <DatePicker
//   // selected={fechaIngreso}
//   // onChange={(date) => setFechaIngreso(date)}
//   // showTimeSelect
//   // dateFormat="Pp"
// />
//         {/* <Datetime
//           value={time}
//           onChange={setTime}
//           dateFormat={false}
//           timeFormat="HH:mm A"
//           className="time-picker"
//         /> */}
//           <button className='btnRegistro' onClick={saveRegistro}  style={{ transform: "translate(300px,-140px)" }}>+</button>
//         {/* <Datetime
//           value={date2}
//           onChange={setDate2}
//           dateFormat="DD/MM/YYYY"
//           timeFormat={false}
//           className="date-picker"
//         />
//         <Datetime
//           value={time2}
//           onChange={setTime2}
//           dateFormat={false}
//           timeFormat="HH:mm A"
//           className="time-picker"
//         />
//           <button className='btnRegistro' onClick={saveDatesSalida}  style={{ transform: "translate(300px,-40px)" }} >+</button> */}

//       </div>
//       {/* <div className='conteList'>
//         {savedDates.map((dates, index) => (
//           <div key={index} className='conteInfoDateUsuario'>
//             <header className='headerDate' style={{ transform: "translateY(-25px)" }}>
//               <h3>Estado</h3>
//               <h3 style={{ color: "#4095e5" }}>Fecha Ingreso</h3>
//               <h3 style={{ color: "#4095e5" }}>Hora Ingreso</h3>
//             </header>
//             <div className="contedaP">
//               <h4 style={{ color: "#4095e5" }}>Fecha registrada</h4>
//               <p>{formatDate(dates.date)}</p>
//               <p>{formatTime(dates.time)}</p>
//               <IoMdTrash className='trash' style={{ transform: "translateY(40px)", position: "absolute" }} />
//             </div>
//           </div>
//         ))}
//         {savedDatesSalida.map((dates2, index) => (
//           <div key={index} className='conteInfoDateUsuario'>
//             <header className='headerDate' style={{ transform: "translateY(-25px)" }}>
//               <h3>Estado</h3>
//               <h3 style={{ color: "red" }}>Fecha Salida</h3>
//               <h3 style={{ color: "red" }}>Hora Salida</h3>
//             </header>
//             <div className="contedaP">
//               <h4 style={{ color: "#4095e5" }}>Fecha registrada</h4>
//               <p>{formatDateSalida(dates2.date2)}</p>
//               <p>{formatTimeSalida(dates2.time2)}</p>
//               <IoMdTrash className='trash' style={{ transform: "translateY(40px)", position: "absolute" }} />
//             </div>
//           </div>
//         ))}
//       </div> */}
//     </div>
//   );
// }