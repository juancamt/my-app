import './modulos/App.css';
import { Link, Outlet, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import { IoMdPerson,IoMdMenu, IoMdClipboard, IoMdCalendar, IoIosPerson, IoIosBookmarks,IoMdExit} from 'react-icons/io';

import {HeaderPermissions} from './modulos/Permissions';
import {HeaderDAte} from './modulos/DateVacation';
import {Headerlist} from './modulos/UserList';
import {HeaderStaff} from './modulos/Staff'
import {HeaderRegistration} from './modulos/Registration'
import {HeaderUser} from './modulos/CreateUserList';






function App() {



  const [claseActiva, setClaseActiva] = useState(false);
  const [selectedItems, setSelectedItem] = useState(null);

  const addClasse = () => {
    setClaseActiva(!claseActiva);
  };
  const itemClick=(items)=>{
    setSelectedItem(items);
  };


  let classPrincipal = `${claseActiva ? 'active' : ''}`;
  let link =`item_link ${claseActiva ? 'active' : ''}`;
  let item =`item_text ${claseActiva ? 'active' : ''}`;
  let icon =`item_icon ${claseActiva ? 'active' : ''}`;
  


  return (

    <div className={`App ${classPrincipal}`}>


      {/* --------------------- --------------------------header --------------------------- -------------------*/}
       <Routes>
       <Route path="/userList" element={<Headerlist/>}/>
       <Route path="/createUserList" element={<HeaderUser/>}/>
       <Route path="/permissions" element={<HeaderPermissions/>}/>
       <Route path="/dateVacation" element={<HeaderDAte/>}/>
       <Route path="/staff" element={<HeaderStaff/>}/>
       <Route path="/registration" element={<HeaderRegistration/>}/>

       </Routes>
      {/* --------------------- --------------------------header --------------------------- -------------------*/}



      {/* --------------------- --------------------------nav --------------------------- -------------------*/}

      <nav id='nav_list' className={`nav_list ${classPrincipal}`}>

        <header id='nav_header'>

          <IoMdMenu id='icon_nav' onClick={addClasse} className={`iconNav ${classPrincipal}`} />

          <img src="\imagenes\user-1.jpeg" alt=""  className={`img_user ${classPrincipal}`} />
          <span className={`text_user ${classPrincipal}`}>Santiago</span>

        </header>

        <div className='menu_bar'>
          <div className='menu_items'>

            <ul id='ul_list'>

              <li className={`item_list ${selectedItems === 'item1' ? 'selected' : ''}`} >
                <Link to='/App/userList' className={link}onClick={() => itemClick('item1')}>

                  <IoMdPerson className={icon} />
                  <span className={item}>User List</span>

                </Link>
              </li>

              <li className={`item_list ${selectedItems === 'item2' ? 'selected' : ''}`} >
                <Link to='/App/Permissions' className={link }onClick={() => itemClick('item2')}>

                  <IoMdClipboard className={icon} />
                  <span className={item}>Permissions</span>

                </Link>
              </li>

              <li className={`item_list ${selectedItems === 'item3' ? 'selected' : ''}`}>
                <Link to='/App/dateVacation' className={link}onClick={() => itemClick('item3')}>

                  <IoMdCalendar className={icon} />
                  <span className={item}>Date vacation</span>

                </Link>
              </li>

              <li className={`item_list ${selectedItems === 'item4' ? 'selected' : ''}`}>
                <Link to='/App/staff' className={link}onClick={() => itemClick('item4')}>

                  <IoIosPerson className={icon} />
                  <span className={item}>Staff</span>

                </Link>
              </li>

              <li className={`item_list ${selectedItems === 'item5' ? 'selected' : ''}`}>
                <Link to='/App/registration' className={link} onClick={() => itemClick('item5')}>

                  <IoIosBookmarks className={icon} />
                  <span className={item}>Registration</span>

                </Link>
              </li>
            </ul>

          </div>

          <div className='bottom_content'>

            <li className='item_list'>
              <Link to='/' className={link}>

                <IoMdExit className={icon} />
                <span className={item}>Exit</span>

              </Link>
            </li>

          </div>

        </div>

      </nav>
      {/* --------------------- --------------------------nav --------------------------- -------------------*/}


      <Outlet />
    </div>
  );
};

export default App;