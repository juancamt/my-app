import React, { createContext, useState,useEffect } from "react";
import axios from "axios";
import { json } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {

        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;

    });
    useEffect(() => {
        // Guardar la información del usuario en localStorage
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const logout = async () => {
        setUser(null);
        localStorage.removeItem('user');
        //  hacer una solicitud al servidor para cerrar la sesión
        await axios.post('http://localhost:3001/logout', {}, { withCredentials: true });
    };

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );


};