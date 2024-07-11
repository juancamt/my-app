import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoAutorizado = () => {
    const navigate = useNavigate();

    const handleInicioClick = () => {
        navigate('/');
    };
    return (
        <div className='NoAutorizado'>
            <h1>No Autorizado</h1>
            <p>No tienes permiso para acceder a esta página.</p>
            <button onClick={handleInicioClick} >Inicio</button>
        </div>
    );
};

export default NoAutorizado;
