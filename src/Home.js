import React, { useState } from 'react'
import './modulosUsuario/home.css'
import { useNavigate } from 'react-router-dom'
import Servicios from './modulos/serviciosModuloPrincipal'
import Footer from './modulos/footerModuloPrincipal'
import { useInView } from 'react-intersection-observer';
import manual from './assets/manual de usuario.pdf';


export function Home() {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/inicio');  // Redirige a la ruta de login
    };

    // funcion para el slider de personal 
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const testimonies = [
        {
            id: 1,
            name: 'SANDRA XIMENA PEREZ JARAMILLO',
            role: 'Software architect',
            text: 'As a software architect, my responsibility is to define the structure and technical standards of the project. I work closely with the team to create scalable and sustainable solutions that respond to business needs.',
            img: `${process.env.PUBLIC_URL}/imagenes/user-1.jpeg`,
        },
        {
            id: 2,
            name: 'Juan Camilo Buriticá',
            role: 'Software developer',
            text: 'I am passionate about developing solutions that solve real problems. In this project, I apply my programming skills to create robust and scalable software, always with a focus on innovation."',
            img: `${process.env.PUBLIC_URL}/imagenes/user-1.jpeg`,
        },
        {
            id: 3,
            name: 'LUISA FERNANDA NARANJO FERNANDEZ',
            role: 'User Experience (UX) Designer',
            text: 'As a user experience designer, my goal is to create intuitive and attractive interfaces. In this project, I focus on understanding user needs to design solutions that are not only functional, but also enjoyable to use.',
            img: `${process.env.PUBLIC_URL}/imagenes/user-1.jpeg`,
        },
        {
            id: 4,
            name: 'DAVID GUILLERMO AVILA CARDENAS',
            role: 'Backend developer',
            text: 'As a backend developer, my passion is creating robust frameworks that support efficient applications. In this project, I use technologies such as Node.js and No SQL databases to develop APIs that optimize communication between the frontend and backend.',
            img: `${process.env.PUBLIC_URL}/imagenes/user-1.jpeg`,
        },
    ];

    const changePosition = (add) => {
        if (isAnimating) return; // Prevenir múltiples animaciones al mismo tiempo

        setIsAnimating(true); // Iniciar la animación

        setTimeout(() => {
            let newIndex = currentIndex + add;

            if (newIndex >= testimonies.length) {
                newIndex = 0;
            }
            if (newIndex < 0) {
                newIndex = testimonies.length - 1;
            }

            setCurrentIndex(newIndex);
            setIsAnimating(false); // Finalizar la animación
        }, 500); // El mismo tiempo que la transición CSS
    };
    // para hacer animacion de scroll 

    const [refAbout, inViewAbout] = useInView({ triggerOnce: false, threshold: 0.2 });
    const [refOurTeam, inViewOurTeam] = useInView({ triggerOnce: false, threshold: 0.4 });


    return (


        <>
            <header className='headerHome'>
                <a href="#home">
                    <h1 translate='no'>DeveloperHouse</h1>
                </a>
                <nav>
                    <ul className='menu_horizontal'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#OurTeam">Our Team</a></li>
                        <li><a href="#Services">Services</a></li>

                    </ul>
                </nav>
            </header>
            <section className='sectionHome' id='home'>
                <div className="text-box">
                    <h1>Start today</h1>
                    <h1>Manage your team</h1>
                    <p>Personnel management is key to the success of any organization. Our project is designed to optimize human talent management, improving productivity, engagement, and employee satisfaction.</p>
                    <span className="btn-box">
                        <button type="button" className="btnBOx" onClick={handleRedirect}>
                            Start Now
                        </button>
                        <button type="button" className="btnBOx">
                            <a href={manual} download="manual">
                                Download Guide
                            </a>
                        </button>
                    </span>
                </div>
                <img src={`${process.env.PUBLIC_URL}/imagenes/loguinPersona.png`} alt="persona" />
            </section>
            <main className='mainHomeSection' >
                {/* las informaciones */}
                <section className={`containerBox about ${inViewAbout ? 'show' : ''}`} ref={refAbout} id='About'>
                    <h2 className="subtitle">We Transform Human Resources Management</h2>
                    <p className="about__paragraph">At DeveloperHouseColombia, we are dedicated to helping companies optimize their human resources management efficiently and effectively. Our human resources management software is designed to simplify processes, increase productivity, and maximize the potential of the talent in your organization.</p>

                    <div className="about__main">
                        <article className="about__icons">
                            <img src={`${process.env.PUBLIC_URL}/imagenes/atencion_al_cliente.svg`} className="about__icon" />
                            <h3 className="about__title">Customer Support</h3>
                            <p className="about__paragrah">98/100 satisfaction in the responses from our support team</p>
                        </article>

                        <article className="about__icons">
                            <img src={`${process.env.PUBLIC_URL}/imagenes/estadisticas.png`} className="about__icon" />
                            <h3 className="about__title">Employee Experience</h3>
                            <p className="about__paragrah">Your employees will enjoy an agile and modern tool to manage and gain visibility into their requests and tasks</p>
                        </article>

                        <article className="about__icons">
                            <img src={`${process.env.PUBLIC_URL}/imagenes/seguridadDatos.svg`} className="about__icon" />
                            <h3 className="about__title">Data Security</h3>
                            <p className="about__paragrah">We audit our GDPR and cybersecurity processes to ensure your data is always protected</p>
                        </article>

                        <article className="about__icons">
                            <img src={`${process.env.PUBLIC_URL}/imagenes/el_producto_crece_contigo.svg`} className="about__icon" />
                            <h3 className="about__title">We Grow with You</h3>
                            <p className="about__paragrah">Every month you will receive loads of new features. We listen to our clients and act to provide them with the best HR tools</p>
                        </article>

                        <article className="about__icons">
                            <img src={`${process.env.PUBLIC_URL}/imagenes/express.png`} className="about__icon" />
                            <h3 className="about__title">Express Implementation</h3>
                            <p className="about__paragrah">So easy to learn and use that in no time you will have transformed your department with minimal effort</p>
                        </article>

                        <article className="about__icons">
                            <img src={`${process.env.PUBLIC_URL}/imagenes/best_practices.svg`} className="about__icon" />
                            <h3 className="about__title">HR Best Practices</h3>
                            <p className="about__paragrah">We provide you with materials and expertise from our consultants so you can get the most out of the software and implement best practices in your company</p>
                        </article>
                    </div>
                </section>


                {/* las informaciones */}

                <section className="testimonyBox" id="OurTeam">
                    <div className={`testimony__container testymonib  ${inViewOurTeam ? 'show' : ''}`} ref={refOurTeam}>
                        <img
                            src={`${process.env.PUBLIC_URL}/imagenes/leftarrow.svg`}
                            alt="previous"
                            className="testimony__arrow"
                            id="before"
                            onClick={() => changePosition(-1)}
                        />
                        {testimonies.map((testimony, index) => (
                            <section
                                key={testimony.id}
                                className={`testimony__body ${index === currentIndex ? 'testimony__body--show' : ''}`}
                                data={testimony.id}
                            >
                                <div className="testimony__texts">
                                    <h2 className="subtitle">
                                        My name is {testimony.name}{' '}
                                        <span className="testimony__course">{testimony.role}</span>
                                    </h2>
                                    <p>{testimony.text}</p>
                                </div>
                                <figure>
                                    <img src={testimony.img} alt="" className="testimony__img" />
                                </figure>
                            </section>
                        ))}
                        <img
                            src={`${process.env.PUBLIC_URL}/imagenes/rightarrow.svg`}
                            alt="next"
                            className="testimony__arrow"
                            id="next"
                            onClick={() => changePosition(1)}
                        />
                    </div>
                </section>
                {/* <section className="testimonyBox" id="OurTeam">
                    <div className={`testimony__container testymonib  ${inViewOurTeam ? 'show' : ''}`} ref={refOurTeam}>
                        <img
                            src={`${process.env.PUBLIC_URL}/imagenes/leftarrow.svg`}
                            alt="previous"
                            className="testimony__arrow"
                            id="before"
                            onClick={() => changePosition(-1)}
                        />
                        <section className="testimony__body testimony__body--show" data={testimonies[currentIndex].id}>
                            <div className="testimony__texts">
                                <h2 className="subtitle">
                                    My name is {testimonies[currentIndex].name}{'  '}
                                    <span className="testimony__course">{testimonies[currentIndex].role}</span>
                                </h2>
                                <p>{testimonies[currentIndex].text}</p>
                            </div>
                            <figure>
                                <img src={testimonies[currentIndex].img} alt="" className="testimony__img" />
                            </figure>
                        </section>
                        <img
                            src={`${process.env.PUBLIC_URL}/imagenes/rightarrow.svg`}
                            alt="next"
                            className="testimony__arrow"
                            id="next"
                            onClick={() => changePosition(1)}
                        />
                    </div>
                </section > */}
                {/* sservicios */}
                <Servicios />
            </main>
            <Footer />

        </>

    )
}