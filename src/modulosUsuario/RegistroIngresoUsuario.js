import React,{ useState } from 'react'
import { IoMdNotifications, IoMdTrash, IoIosBookmarks } from 'react-icons/io';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';




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
  const [date, setDate] = useState(moment());
  const [time, setTime] = useState(moment());
  const [date2, setDate2] = useState(moment());
  const [time2, setTime2] = useState(moment());
  const [savedDates, setSavedDates] = useState([]);
  const [savedDatesSalida, setSavedDatesSalida] = useState([]);

  const saveDates = () => {
    setSavedDates([...savedDates, { date, time}]);

  };
  const saveDatesSalida = () => {
    setSavedDatesSalida([...savedDatesSalida, { date2, time2}]);

  };

  const formatDate = (date) => date.format('DD-MM-YYYY');
  const formatTime = (time) => time.format('HH:mm A');
  const formatDateSalida = (date2) => date2.format('DD-MM-YYYY');
  const formatTimeSalida = (time2) => time2.format('HH:mm A');

  return (
    <div className='conteP'>
      <div className='conteDate'>
        <Datetime 
          value={date}
          onChange={setDate}
          dateFormat="DD/MM/YYYY"
          timeFormat={false}
          className="date-picker"
          id="fechaIngreso"
        />
        <Datetime
          value={time}
          onChange={setTime}
          dateFormat={false}
          timeFormat="HH:mm A"
          className="time-picker"
        />
          <button className='btnRegistro' onClick={saveDates}  style={{ transform: "translate(300px,-140px)" }}>+</button>
        <Datetime 
          value={date2}
          onChange={setDate2}
          dateFormat="DD/MM/YYYY"
          timeFormat={false}
          className="date-picker"
        />
        <Datetime
          value={time2}
          onChange={setTime2}
          dateFormat={false}
          timeFormat="HH:mm A"
          className="time-picker"
        />
          <button className='btnRegistro' onClick={saveDatesSalida}  style={{ transform: "translate(300px,-40px)" }} >+</button>

      </div>
      <div className='conteList'>
        {savedDates.map((dates, index) => (
          <div key={index} className='conteInfoDateUsuario'>
            <header className='headerDate' style={{ transform: "translateY(-25px)" }}>
              <h3>Estado</h3>
              <h3 style={{ color: "#4095e5" }}>Fecha Ingreso</h3>
              <h3 style={{ color: "#4095e5" }}>Hora Ingreso</h3>
            </header>
            <div className="contedaP">
              <h4 style={{ color: "#4095e5" }}>Fecha registrada</h4>
              <p>{formatDate(dates.date)}</p>
              <p>{formatTime(dates.time)}</p>
              <IoMdTrash className='trash' style={{ transform: "translateY(40px)", position: "absolute" }} />
            </div>
          </div>
        ))}
        {savedDatesSalida.map((dates2, index) => (
          <div key={index} className='conteInfoDateUsuario'>
            <header className='headerDate' style={{ transform: "translateY(-25px)" }}>
              <h3>Estado</h3>
              <h3 style={{ color: "red" }}>Fecha Salida</h3>
              <h3 style={{ color: "red" }}>Hora Salida</h3>
            </header>
            <div className="contedaP">
              <h4 style={{ color: "#4095e5" }}>Fecha registrada</h4>
              <p>{formatDateSalida(dates2.date2)}</p>
              <p>{formatTimeSalida(dates2.time2)}</p>
              <IoMdTrash className='trash' style={{ transform: "translateY(40px)", position: "absolute" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


