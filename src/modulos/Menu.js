import React, { useContext, useState } from 'react'
import { Link, Outlet, Routes, Route, useNavigate } from 'react-router-dom';
import { IoMdPerson, IoMdMenu, IoMdClipboard, IoMdCalendar, IoIosBookmarks, IoMdExit } from 'react-icons/io';
import { HeaderUsuario } from '../modulosUsuario/PerfilUsuario';
import { HeaderPermissionsUsuario } from '../modulosUsuario/PermissionsUsuario';
import { HeaderDateVacation } from '../modulosUsuario/DateVacationUsuario';
import { HeaderRegistro, HeaderRegistroUsuario } from '../modulosUsuario/RegistroIngresoUsuario';
import { Preloader } from '../modulos/Preloader';
import { UserContext } from './UserContext';

export function Menu() {

    const {user}=useContext(UserContext);


    
    const [claseActiva, setClaseActiva] = useState(false);
    const [selectedItems, setSelectedItem] = useState('item1');
    
    const [loading, setLoading] = useState(false);
    
    const showPreloader = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            }, 1500); 
            };
            
            
            
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

        const { logout } = useContext(UserContext);
        const navigate = useNavigate();

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
            {loading && <Preloader />}
            <div className={`App ${classPrincipal}`}>


                {/* --------------------- --------------------------header --------------------------- -------------------*/}
                <Routes>
                    <Route path="/perfilUsuario" element={<HeaderUsuario />} />
                    <Route path="/permisosUsuario" element={<HeaderPermissionsUsuario />} />
                    <Route path="/dateVacationUsuario" element={<HeaderDateVacation />} />
                    <Route path="/registroIngresoUsuario" element={<HeaderRegistroUsuario />} />

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
                                    <Link to='/Usuario/PerfilUsuario' className={link} onClick={() => { itemClick('item1'); showPreloader(); }}>

                                        <IoMdPerson className={icon} />
                                        <span className={item}>Profile</span>

                                    </Link>
                                </li>

                                <li className={`item_list ${selectedItems === 'item2' ? 'selected' : ''}`} >
                                    <Link to='/Usuario/permisosUsuario' className={link} onClick={() => { itemClick('item2'); showPreloader(); }}>

                                        <IoMdClipboard className={icon} />
                                        <span className={item}>Permissions</span>

                                    </Link>
                                </li>

                                <li className={`item_list ${selectedItems === 'item3' ? 'selected' : ''}`}>
                                    <Link to='/Usuario/dateVacationUsuario' className={link} onClick={() => { itemClick('item3'); showPreloader(); }}>

                                        <IoMdCalendar className={icon} />
                                        <span className={item}>Date vacation</span>

                                    </Link>
                                </li>


                                <li className={`item_list ${selectedItems === 'item5' ? 'selected' : ''}`}>
                                    <Link to='/Usuario/registroIngresoUsuario' className={link} onClick={() => {itemClick('item5');showPreloader();}}>

                                        <IoIosBookmarks className={icon} />
                                        <span className={item}>Registration</span>

                                    </Link>
                                </li>
                            </ul>

                        </div>

                        <div className='bottom_content'>

                            <li className='item_list'>
                                <Link  className={link} onClick={
                                    handleLogout
                                }>

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
        </>
    )
}

