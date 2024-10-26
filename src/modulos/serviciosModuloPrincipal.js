import React from 'react';
import { FaUsersCog, FaLaptop, FaCogs, FaSyncAlt, FaTasks, FaHeadset } from 'react-icons/fa';

import '../modulosUsuario/home.css'
import { useInView } from 'react-intersection-observer';


const servicios = [
    {
        titulo: "Comprehensive Human Resources Management",
        descripcion: "Automate and centralize all tasks related to human talent management.",
        icono: <FaUsersCog />,
    },
    {
        titulo: "Powerful and Easy-to-Use Interface",
        descripcion: "An intuitive tool designed to be user-friendly for anyone, without requiring advanced technical knowledge.",
        icono: <FaLaptop />,
    },
    {
        titulo: "Customizable and Scalable",
        descripcion: "Adjust the features according to your organization's specific needs and grow alongside your business.",
        icono: <FaCogs />,

    },
    {
        titulo: "Efficient Process Optimization",
        descripcion: "Save time and resources by automating repetitive tasks, improving overall productivity.",
        icono: <FaSyncAlt />,

    },
    {
        titulo: "Specific Functionalities",
        descripcion: "Includes features specifically designed for human resource management, such as permission control, vacation tracking, and much more.",
        icono: <FaTasks />,

    },
    {
        titulo: "Expert Support",
        descripcion: "A specialized team always available to assist you with any questions or customizations you may need.",
        icono: <FaHeadset />,

    }
];

const Servicios = () => {

    const [refServices, inViewServices] = useInView({ triggerOnce: false, threshold: 0.3 });

    return (
        <section className={`servicios  ${inViewServices ? 'show' : ''}`} ref={refServices} id="Services">
            <h2>Services</h2>
            <p>Our services are designed to help you efficiently manage key aspects of human talent within your organization.</p>
            <div className="servicios-grid">
                {servicios.map((servicio, index) => (
                    <div className="servicio-card" key={index}>
                        <div className="icono">
                            {servicio.icono}
                        </div>
                        <h3>{servicio.titulo}</h3>
                        <p>{servicio.descripcion}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Servicios;
