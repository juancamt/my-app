import React, { useState } from 'react'
import { IoMdPerson, IoMdNotifications,IoMdTrash,IoMdCalendar} from 'react-icons/io';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css'


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

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [savedDates, setSavedDates] = useState([]);

  const saveDates = () => {
    setSavedDates([...savedDates, { startDate, endDate }]);
  };

  const formatDate = (date) => {
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
        <button className='btnDate' onClick={saveDates}>+</button>

      </div>

      <div className='conteList'>
        {savedDates.map((dates, index) => (
          <div key={index} className='conteInfoDateUsuario'>
            <header className='headerDate' style={{transform:"translateY(-25px)"}}>
              <h3>estado</h3>
              <h3>Fecha de Inicio</h3>
              <h3>Fecha de Fin</h3>
            </header>
            <div className="contedaP">
              <h4 style={{color:"#4095e5"}}>Fecha regitrada</h4>
              <p> {formatDate(dates.startDate)}</p>
              <p> {formatDate(dates.endDate)}</p>
              <IoMdTrash className='trash' style={{transform:"translateY(40px)",position:"absolute"}} />
            </div>
          </div>
        ))}
      </div>

    </div>

  )
};


