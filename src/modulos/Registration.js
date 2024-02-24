
import './App.css';
import { IoMdPerson, IoIosSearch, IoMdNotifications } from 'react-icons/io';


export const HeaderRegistration = () => {
  return (
    

      <header id='header_list'>
        <div className="list_header">
          <IoMdPerson id='user_header' />
          <span id="list_text">Registration</span>

        </div>

        <div className="list_header">
          <IoIosSearch id='search_header' />
          <input type="text" placeholder="Search" id="search_input" />
          <IoMdNotifications id='notificacion' />
        </div>


      </header>

    
  );
};
export const Registration = () => {
  return (
    <main id='main_list'>


    <div>
      <h2>Registration</h2>
      <p>Content of Registration</p>
    </div>
    
    </main>
  );
};
