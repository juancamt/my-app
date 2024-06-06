import { Routes, Route } from "react-router-dom";
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
// import { Login } from './modulos/Login';


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
                {/* <Route path="/App" element={<Navigate to="/App" replace />}/> */}
                <Route path="/" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />


                <Route path="Usuario" element={<Menu />}>

                    <Route path="perfilUsuario" element={<PerfilUsuario />} />
                    <Route path="permisosUsuario" element={<PermissionsUsuario />} />
                    <Route path="DateVacationUsuario" element={<DateVacationUsuario />} />
                    <Route path="RegistroIngresoUsuario" element={<RegistroIngresoUsuario />} />


                </Route>

                <Route path="/Administrador" element={<App />}>

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