import { IoMdPerson, IoLogoFacebook, IoLogoLinkedin, IoLogoGoogle, IoIosLock } from "react-icons/io";
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


    // const navigate = useNavigate();
    // const [isAuthenticated, setAuthenticated] = useState(false);

    // const usuariosRegistrados = [
    //     { rol:'administrador', email: 'example@hotmail.com', password: '123' },
    //     { rol:'usuario', email: 'usuario2@example.com', password: 'password2' },
    //     // Agrega más usuarios según sea necesario
    // ];

    // const authenticateUser = async (values) => {
    //     // Simula una llamada a un servidor o base de datos para verificar las credenciales del usuario
    //     const usuarioEncontrado = usuariosRegistrados.find(
    //       (usuario) =>
    //         usuario.rol === values.roles &&
    //         usuario.email === values.email &&
    //         usuario.password === values.passwordLogin
    //     );
      
    //     return usuarioEncontrado;
    //   };



    return (
        <div className="body">

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
                        // onSubmit={async (values, { resetForm, setSubmitting}) => {
                            // Reinicia el formulario después de enviar
                            // resetForm();
                            // loginIngreso(values);

                            // Realiza la autenticación del usuario
                            // const isAuthenticated = await authenticateUser(values);

                            // if (isAuthenticated) {
                            //     // El usuario está autenticado, redirige a la lista de usuarios
                            //     if(isAuthenticated.rol==="administrador"){

                            //         navigate('/Administrador/userList');
                            //     }else if(isAuthenticated.rol==="usuario"){
                            //         navigate('/Usuario/perfilUsuario');
                            //     }
                            //     setAuthenticated(true);
                            // } else {
                            //     // El usuario no está autenticado, muestra un mensaje de error
                            //     alert('User not found');
                            // }

                            // Indica que el envío ha finalizado
                            // setSubmitting(false);
                        // }}
                        onSubmit={loginIngreso}
                    >
                        {({ errors }) => (

                            <Form className="form">
                                <h2>LOGIN</h2>
                                <Field name="role" as="select" >
                                    <option value="" disabled hidden>select rol</option>
                                    <option value="administrador">administrador</option>
                                    <option value="usuario">usuario</option>
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
                                
                                <h3>or</h3>
                                <div className="conteInfo">
                                    <span style={{ color: '#EA4335' }}>
                                        <IoLogoGoogle id="icon" />
                                    </span>
                                    <span style={{ color: '#1877f2' }} >
                                        <IoLogoFacebook id="icon" />
                                    </span>
                                    <span style={{ color: '#0a66c2' }}>
                                        <IoLogoLinkedin id="icon" />
                                    </span >
                                </div>
                            
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
