import React, { useState } from 'react'
import { Link, Outlet, Routes, Route} from 'react-router-dom';
import { IoMdPerson,IoMdMenu, IoMdClipboard, IoMdCalendar,IoIosBookmarks,IoMdExit} from 'react-icons/io';
import { HeaderUsuario } from '../modulosUsuario/PerfilUsuario';
import { HeaderPermissionsUsuario } from '../modulosUsuario/PermissionsUsuario';


export function Menu() {

    const [claseActiva, setClaseActiva] = useState(false);
    const [selectedItems, setSelectedItem] = useState(null);

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

    return (
        <>
            <div className={`App ${classPrincipal}`}>


                {/* --------------------- --------------------------header --------------------------- -------------------*/}
                <Routes>
                    <Route path="/perfil" element={<HeaderUsuario/>} />
                    <Route path="/permisosUsuario" element={<HeaderPermissionsUsuario />} />
                    {/* <Route path="/permissions" element={<HeaderPermissions />} /> */}
                    {/* <Route path="/dateVacation" element={<HeaderDAte />} /> */}
                    {/* <Route path="/staff" element={<HeaderStaff />} /> */}
                    {/* <Route path="/registration" element={<HeaderRegistration />} /> */}

                </Routes>
                {/* --------------------- --------------------------header --------------------------- -------------------*/}



                {/* --------------------- --------------------------nav --------------------------- -------------------*/}

                <nav id='nav_list' className={`nav_list ${classPrincipal}`}>

                    <header id='nav_header'>

                        <IoMdMenu id='icon_nav' onClick={addClasse} className={`iconNav ${classPrincipal}`} />

                        <img src="\imagenes\user-2.jpeg" alt="" className={`img_user ${classPrincipal}`} />
                        <span className={`text_user ${classPrincipal}`}>Raul</span>

                    </header>

                    <div className='menu_bar'>
                        <div className='menu_items'>

                            <ul id='ul_list'>

                                <li className={`item_list ${selectedItems === 'item1' ? 'selected' : ''}`} >
                                    <Link to='/usuario/perfil' className={link} onClick={() => itemClick('item1')}>

                                        <IoMdPerson className={icon} />
                                        <span className={item}>Profile</span>

                                    </Link>
                                </li>

                                <li className={`item_list ${selectedItems === 'item2' ? 'selected' : ''}`} >
                                    <Link to='/usuario/permisosUsuario' className={link} onClick={() => itemClick('item2')}>

                                        <IoMdClipboard className={icon} />
                                        <span className={item}>Permissions</span>

                                    </Link>
                                </li>

                                <li className={`item_list ${selectedItems === 'item3' ? 'selected' : ''}`}>
                                    <Link to='/' className={link} onClick={() => itemClick('item3')}>

                                        <IoMdCalendar className={icon} />
                                        <span className={item}>Date vacation</span>

                                    </Link>
                                </li>


                                <li className={`item_list ${selectedItems === 'item5' ? 'selected' : ''}`}>
                                    <Link to='/' className={link} onClick={() => itemClick('item5')}>

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
        </>
    )
}

