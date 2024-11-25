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
        // Si no hay usuario, no hacer la solicitud
        if (!user) {
            console.log("No hay sesión activa.");
            return;
        }

        // Limpia el estado y el localStorage
        setUser(null);
        localStorage.removeItem('user');

        try {
            // Hacer una solicitud al servidor para cerrar la sesión
            const response = await axios.post('https://personal-backend-project.onrender.com/logout', {}, { withCredentials: true });
            console.log("Logout exitoso", response.data); // Verifica la respuesta del servidor
        } catch (error) {
            console.error("Error al cerrar sesión:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );


};