import { Routes, Route } from "react-router-dom";
import App from "../App";
import Login from "./Login";
import './App.css';


import { Permissions, HeaderPermissions } from './Permissions';
import { DateVacation, HeaderDAte } from './DateVacation';
import { UserList, Headerlist } from './UserList';
import { Staff, HeaderStaff } from './Staff'
import { Registration, HeaderRegistration } from './Registration'
import { CreateUserList, HeaderUser } from './CreateUserList';
import SignUp from "./SignUp";
// import { Login } from './modulos/Login';


function Rutas() {
    return (
        <Routes>
            {/* <Route path="/App" element={<Navigate to="/App" replace />}/> */}
            <Route path="/" element={<Login />} >

            </Route>
            <Route path="/signUp" element={<SignUp/>} />

            <Route path="/App" element={<App />}>
  
           
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

}
export default Rutas;