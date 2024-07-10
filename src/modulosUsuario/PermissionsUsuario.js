import React, { useState } from 'react'
import { IoMdPerson, IoMdNotifications,IoMdTrash,IoMdClipboard} from 'react-icons/io';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css'


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

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());



  const [textareaContent, setTextareaContent] = useState('');
  const [savedEntries, setSavedEntries] = useState([]);

  const saveEntry = () => {
    setSavedEntries([
      ...savedEntries,
      { startDate, endDate, content: textareaContent }
    ]);
    // resetear  los valores del textarea

    setTextareaContent('');
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
        {savedEntries.map((dates, index) => (
          <div key={index} className='conteInfoDateUsuario'>
            <header className='headerDate' >

              <h3>Motivo de Permiso</h3>
              <h3>Fecha de Inicio</h3>
              <h3>Fecha de Fin</h3>
            </header>
            <div className="contedaP">
              <p> {dates.content}</p>
              <p> {formatDate(dates.startDate)}</p>
              <p> {formatDate(dates.endDate)}</p>
              <IoMdTrash className='trash' />
            </div>
          </div>
        ))}
      </div>

    </div>

  )
};


