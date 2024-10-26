import { IoMdPerson, IoLogoFacebook, IoLogoLinkedin, IoLogoGoogle, IoIosLock} from "react-icons/io";
import { HiArrowCircleLeft } from "react-icons/hi";
import React, { useState,useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Login.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios'
import { UserContext } from "./UserContext";
const Login = () => {

 
    const [message, setMessage] = useState('');
    const [userData, setUserData] = useState(null);
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/');  // Redirige a la ruta de login
    };


    const loginIngreso = async (values, { setSubmitting, setErrors }) => {
        try {
            const response = await axios.post('http://localhost:3001/login', values, { withCredentials: true });
            console.log(response.data);
            const user = response.data.user;
            setUser(user)
            setUserData(user)

            setMessage('Login exitoso');
            console.log(user);

            // Redirigir según el rol del usuario
            if (user.rol === 'administrador') {
                navigate('/Administrador/userList');
            } else if (user.rol === 'usuario') {
                navigate('/Usuario/perfilUsuario');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setMessage("Error al iniciar sesion");
            setErrors({ correo: 'Usuario no encontrado' }); // Ejemplo de manejo de error de inicio de sesión
        } finally {
            setSubmitting(false);
        }
    };
    const accessProtected = async () => {
        try {
            const response = await axios.get('http://localhost:3001/protected', { withCredentials: true });
            setUserData(response.data);
            setMessage('Contenido protegido');
        } catch (error) {
            setMessage('No autenticado');
        }
    };
 

    return (
        <div className="body">

            <HiArrowCircleLeft  style={{position:'absolute',top:'10px',left:'10px',cursor:'pointer',width:'60px',height:'40px',color:'white'}} onClick={handleRedirect}/>
            <div className="conteLogin">

                <div className="containerImg">
                    <img src="\imagenes\loguinPersona.png" />
                </div>

                <div className="containerFomulario">
                    <Formik
                        initialValues={{
                            role: '',
                            email: '',
                            contra: ''
                        }}
                        validate={(values) => {
                            let errores = {};
                           
                            //---------------------------------------------- validacion de rol---------------------------------------------------------
                           
                            if (!values.role) {
                                errores.role = 'Please select a role '
                            }
                            
                            //---------------------------------------------- validacion de correo---------------------------------------------------------
                            if (!values.email) {
                                errores.email = 'Please enter an email '
                            }

                            // ---------------------------------------------validacion de contraseña-----------------------------------------------------------

                            if (!values.contra) {
                                errores.contra = 'Please enter a password';
                            }


                            return errores  
                        }}
                      
                        onSubmit={loginIngreso}
                    >
                        {({ errors }) => (

                            <Form className="form">
                                <h2>LOGIN</h2>
                                <Field name="role" as="select" >
                                    <option value="" disabled hidden>select rol</option>
                                    <option value="administrador">Administrator</option>
                                    <option value="usuario">User</option>
                                </Field>
                                <ErrorMessage name="rol" component={() => (<div className="error"><p className="parrafo">{errors.rol}</p></div>)} />
                                <label >
                                    <IoMdPerson id="iconLogin" />
                                    <Field
                                        type="email"
                                        id="correo"
                                        name="email"
                                        placeholder="Usuario@hotmail.com"
                                    />
                                    <ErrorMessage name="email" component={() => (<div className="error"><p className="parrafo">{errors.email}</p></div>)} />
                                  

                                </label>
                                <label >
                                    <IoIosLock id="iconLogin" />
                                    <Field
                                        type="password"
                                        id="contrasena"
                                        name="contra"
                                        placeholder="Password"
                                    />
                                    <ErrorMessage name="contra" component={() => (<div className="error"><p className="parrafo">{errors.contra}</p></div>)} />

                                </label>
                                
                                {/* <h3>or</h3> */}
                                {/* cambio  autenticacion por url de empresa*/}
                                {/* <div className="conteInfo">
                                    <span style={{ color: '#EA4335' }}onClick={handleRedirect}>
                                        <IoLogoGoogle id="icon" />
                                    </span>
                                    <span style={{ color: '#1877f2' }} >
                                        <IoLogoFacebook id="icon" />
                                    </span>
                                    <span style={{ color: '#0a66c2' }}>
                                        <IoLogoLinkedin id="icon" />
                                    </span >
                                </div> */}
                            
                                <button type="submit">Sign in</button>

                                <p>Dont have an account?<Link to="/signUp">Sign up</Link></p>

                            </Form>
                        )}


                    </Formik>
                </div>

            </div>
        </div>

    );
};


export default Login;
