
import './App.css';
import { IoMdPerson, IoIosSearch, IoMdNotifications } from 'react-icons/io';


export const HeaderDAte = () => {
  return (


    <header id='header_list'>
      <div className="list_header">
        <IoMdPerson id='user_header' />
        <span id="list_text">Date Vacation</span>

      </div>

      <div className="list_header">
        <IoIosSearch id='search_header' />
        <input type="text" placeholder="Search" id="search_input" />
        <IoMdNotifications id='notificacion' />
      </div>


    </header>


  );
};
export const DateVacation = () => {
  return (
    <main id='main_list'>

      <div>
        <h2>dateVacation</h2>
        <p>Content of dateVacation</p>
      </div>

    </main>
  );
};

