import App from "../App";
import Login from "./Login";
import './App.css';
import React, { useState } from "react";


import { Permissions, HeaderPermissions } from './Permissions';
import { DateVacation, HeaderDAte } from './DateVacation';
import { UserList, Headerlist } from './UserList';
import { Staff, HeaderStaff } from './Staff'
import { Registration, HeaderRegistration } from './Registration'
import { CreateUserList, HeaderUser } from './CreateUserList';
import SignUp from "./SignUp";
import { PerfilUsuario } from '../modulosUsuario/PerfilUsuario';
import { Menu } from "./Menu";
import { PermissionsUsuario } from "../modulosUsuario/PermissionsUsuario";
import { DateVacationUsuario } from "../modulosUsuario/DateVacationUsuario";
import { RegistroIngresoUsuario } from "../modulosUsuario/RegistroIngresoUsuario";
import { UserProvider } from "./UserContext";
import ProteccionRuta from "./PrivateRoute";
// // import { Login } from './modulos/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoAutorizado from "./NoAutorizado";


function Rutas() {
    const [loading, setLoading] = useState(true);
    const spinner = document.getElementById("spinner")
    if (spinner) {
        setTimeout(() => {
            spinner.style.display = "none";
            spinner.style.transition = "2s";
            setLoading(false);
        }, 1500)
    }
    return (

        !loading && (


            
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signUp" element={<SignUp />} />
                        <Route path="/NoAutorizado" element={<NoAutorizado />} />

                        <Route
                            path="/Usuario"
                            element={
                                <ProteccionRuta roles={['usuario']}>
                                    <Menu />
                                </ProteccionRuta>
                            }
                        >
                            <Route path="perfilUsuario" element={<PerfilUsuario />} />
                            <Route path="permisosUsuario" element={<PermissionsUsuario />} />
                            <Route path="DateVacationUsuario" element={<DateVacationUsuario />} />
                            <Route path="RegistroIngresoUsuario" element={<RegistroIngresoUsuario />} />
                        </Route>

                        <Route
                            path="/Administrador"
                            element={
                                <ProteccionRuta roles={['administrador']}>
                                    <App />
                                </ProteccionRuta>
                            }
                        >
                            <Route index element={<UserList />} />
                            <Route path="userList" element={<UserList />} />
                            <Route path="permissions" element={<Permissions />} />
                            <Route path="dateVacation" element={<DateVacation />} />
                            <Route path="staff" element={<Staff />} />
                            <Route path="registration" element={<Registration />} />
                            <Route path="CreateUserList" element={<CreateUserList />} />
                        </Route>
                    </Routes>
           

        )
    )

}
export default Rutas;