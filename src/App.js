import './modulos/App.css';
import { Link, Outlet, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import React, {  useContext, useState } from 'react';
import { IoMdPerson, IoMdMenu, IoMdClipboard, IoMdCalendar, IoIosPerson, IoIosBookmarks, IoMdExit } from 'react-icons/io';

import { HeaderPermissions } from './modulos/Permissions';
import { HeaderDAte } from './modulos/DateVacation';
import { Headerlist } from './modulos/UserList';
import { HeaderStaff } from './modulos/Staff'
import { HeaderRegistration } from './modulos/Registration'
import { HeaderUser } from './modulos/CreateUserList';
import { Preloader } from './modulos/Preloader';
import { UserContext } from './modulos/UserContext';


// import { UserContext } from "./UserContext";






function App() {
  const [loading, setLoading] = useState(false);
  const {user}=useContext(UserContext);
 
  
  
  
  const showPreloader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const [claseActiva, setClaseActiva] = useState(false);
  const [selectedItems, setSelectedItem] = useState('item1');
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const addClasse = () => {
    setClaseActiva(!claseActiva);
  };
  const itemClick = (items) => {
    setSelectedItem(items);
  };


  let classPrincipal = `${claseActiva ? 'active' : ''}`;
  let link = `item_link ${claseActiva ? 'active' : ''}`;
  let item = `item_text ${claseActiva ? 'active' : ''}`;
  let icon = `item_icon ${claseActiva ? 'active' : ''}`;

  const handleLogout = async (e) => {
    e.preventDefault(); // Prevenir la acción por defecto del enlace
    await logout(); // Llamar a la función de logout del contexto
    navigate('/'); // Redirigir al usuario a la página de login
  };



  if (!user){
    return <div>No user logged</div>
  };

  return (
    <>
      {/* {loading && <Preloader />} */}
      
     
      <div className={`App ${classPrincipal}`}>


        {/* --------------------- --------------------------header --------------------------- -------------------*/}
        <Routes>
          <Route path="/userList" element={<Headerlist />} />
          <Route path="/createUserList" element={<HeaderUser />} />
          <Route path="/permissions" element={<HeaderPermissions />} />
          <Route path="/dateVacation" element={<HeaderDAte />} />
          <Route path="/staff" element={<HeaderStaff />} />
          <Route path="/registration" element={<HeaderRegistration />} />

        </Routes>
        {/* --------------------- --------------------------header --------------------------- -------------------*/}



        {/* --------------------- --------------------------nav --------------------------- -------------------*/}
        
        <nav id='nav_list' className={`nav_list ${classPrincipal}`}>

          <header id='nav_header'>

            <IoMdMenu id='icon_nav' onClick={addClasse} className={`iconNav ${classPrincipal}`} />

            <img src="\imagenes\user-1.jpeg" alt="" className={`img_user ${classPrincipal}`} />
            <span className={`text_user ${classPrincipal}`}>{user.nombre}</span>

          </header>

          <div className='menu_bar'>
            <div className='menu_items'>

              <ul id='ul_list'>

                <li className={`item_list ${selectedItems === 'item1' ? 'selected' : ''}`} >
                  <Link to='/Administrador/userList' className={link} onClick={() => { itemClick('item1'); showPreloader() }}>

                    <IoMdPerson className={icon} />
                    <span className={item}>User List</span>

                  </Link>
                </li>

                <li className={`item_list ${selectedItems === 'item2' ? 'selected' : ''}`} >
                  <Link to='/Administrador/Permissions' className={link} onClick={() => {itemClick('item2');showPreloader()}}>

                    <IoMdClipboard className={icon} />
                    <span className={item}>Permissions</span>

                  </Link>
                </li>

                <li className={`item_list ${selectedItems === 'item3' ? 'selected' : ''}`}>
                  <Link to='/Administrador/dateVacation' className={link} onClick={() => {itemClick('item3');showPreloader()}}>

                    <IoMdCalendar className={icon} />
                    <span className={item}>Date vacation</span>

                  </Link>
                </li>

                <li className={`item_list ${selectedItems === 'item4' ? 'selected' : ''}`}>
                  <Link to='/Administrador/staff' className={link} onClick={() => {itemClick('item4');showPreloader()}}>

                    <IoIosPerson className={icon} />
                    <span className={item}>Staff</span>

                  </Link>
                </li>

                <li className={`item_list ${selectedItems === 'item5' ? 'selected' : ''}`}>
                  <Link to='/Administrador/registration' className={link} onClick={() => {itemClick('item5');showPreloader()}}>

                    <IoIosBookmarks className={icon} />
                    <span className={item}>Registration</span>

                  </Link>
                </li>
              </ul>

            </div>

            <div className='bottom_content'>

              <li className='item_list'>
                <Link  onClick={handleLogout} className={link}>

                  <IoMdExit className={icon} />
                  <span className={item}>Exit</span>

                </Link>
              </li>

            </div>

          </div>

        </nav>
        {/* --------------------- --------------------------nav --------------------------- -------------------*/}


        <Outlet />
        <footer id="footer_list">
                <span>&copy; 2024 DeveloperHouse. All Rights Reserved.</span>
        </footer>
      </div>
    </>

  );
};

export default App;