import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const ProteccionRuta = ({ children, roles }) => {
    const { user } = useContext(UserContext);

    if (!user) {
        // Si el usuario no está autenticado, redirigir al login
        return <Navigate to="/" replace />;
    }

    if (roles && !roles.includes(user.rol)) {
        // Si el usuario no tiene el rol adecuado, redirigir a una página no autorizada
        return <Navigate to="/NoAutorizado" replace />;
    }

    return children;
};

export default ProteccionRuta;
