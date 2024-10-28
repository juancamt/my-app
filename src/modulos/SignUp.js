
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Messages from './Messages';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [radioValue, setRadioValue] = useState("");

    const handleRadioChange = (e) => {
        setRadioValue(e.target.value);
    };
    // guardamos el usuario 
    const guardarUsuario = async (usuario) => {
        try {
            const response = await axios.post('https://personal-backend-project.onrender.com/api/guardarUsuario', usuario);
            if (response.data.message === "Usuario guardado") {
                console.log("Usuario guardado correctamente");
            } else {
                console.error("Error al guardar usuario:", response.data.message);
            }
        } catch (error) {
            console.error("Error al guardar usuario:", error);
        }
    };
    const [estadoMes, cambiarEstadoMes] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="container">
            <Messages
                estadoMessages={estadoMes}
                cambiarEstadoMessages={cambiarEstadoMes}
                title2='Registration'
                messagesParrafo={'Congratulations on your registration, you have completed the registration page'}
                lin="/"
            />
            <div className='conteCreateSignUp'>
                <header className='headerCreateSignUp'>
                    <h1 id='userRegisterSignUp'>Register User</h1>
                </header>
                <div className='conteFormularioSignUp'>
                    <div id='closeConte'>
                        <Link to="/" >
                            <IoIosArrowDropleftCircle id='closeSignUp' />
                        </Link>
                    </div>
                    <Formik
                        initialValues={{
                            rol:'',
                            name: '',
                            last_name: '',
                            cell_phone: '',
                            email: '',
                            password: '',
                            confirm_password: '',
                            age: '',
                            adress: ''
                        }}
                        validationSchema={Yup.object({
                            name: Yup.string()
                                .required('Required'),
                            last_name: Yup.string()
                                .required('Required'),
                            cell_phone: Yup.string()
                                .matches(/^\d+$/, 'Must be a number')
                                .required('Required'),
                            email: Yup.string()
                                .email('Invalid email address')
                                .required('Required'),
                            password: Yup.string()
                                .min(8, 'Password must be at least 8 characters')
                                .required('Required'),
                            confirm_password: Yup.string()
                                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                                .required('Required'),
                            age: Yup.number()
                                .required('Required')
                                .positive('Must be a positive number')
                                .integer('Must be an integer'),
                        })}
                        onSubmit={(values, { resetForm }) => {
                            const nuevoUsuario = {
                                rol:values.rol,
                                nombre: values.name,
                                apellido: values.last_name,
                                telefono: values.cell_phone,
                                correo: values.email,
                                contraseña: values.password,
                                años: values.age,
                                genero: radioValue,
                                direccion: values.adress
                            };
                            guardarUsuario(nuevoUsuario);
                            resetForm();
                            navigate('/'); // Redirige a la ruta de inicio
                        }}
                    >
                        <Form>
                            <div>
                                <label htmlFor="role">Rol</label>
                                <Field as="select" name="rol" className="seleccion" >
                                    <option value="" label="Select role" disabled hidden />
                                    <option value="administrador" label="administrador" />
                                  
                                </Field>
                                <ErrorMessage name="role" component="div" className="error" />
                            </div>

                            <div>
                                <label htmlFor="name">Name</label>
                                <Field type="text" name="name" />
                                <ErrorMessage name="name" component="div" className="error" />
                            </div>
                            <div>
                                <label htmlFor="last_name">Last name</label>
                                <Field type="text" name="last_name" />
                                <ErrorMessage name="last_name" component="div" className="error" />
                            </div>
                            <div>
                                <label htmlFor="cell_phone">Cell phone</label>
                                <Field type="number" name="cell_phone" />
                                <ErrorMessage name="cell_phone" component="div" className="error" />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <Field type="password" name="password" />
                                <ErrorMessage name="password" component="div" className="error" />
                            </div>
                            <div>
                                <label htmlFor="confirm_password">Confirm password</label>
                                <Field type="password" name="confirm_password" />
                                <ErrorMessage name="confirm_password" component="div" className="error" />
                            </div>
                            <div>
                                <label htmlFor="adress">Adress</label>
                                <Field type="text" name="adress" />
                                <ErrorMessage name="adress" component="div" className="error" />
                            </div>
                            <div>
                                <label htmlFor="age">Age</label>
                                <Field type="number" name="age" />
                                <ErrorMessage name="age" component="div" className="error" />
                            </div>
                            <div>
                                <label htmlFor="gender">Gender</label>
                                <li>
                                    <label htmlFor="man">
                                        <Field
                                            type="radio"
                                            name="gender"
                                            value="man"
                                            onChange={handleRadioChange}
                                            checked={radioValue === "man"}
                                        />
                                        Man
                                    </label>
                                    <label htmlFor="women">
                                        <Field
                                            type="radio"
                                            name="gender"
                                            value="women"
                                            onChange={handleRadioChange}
                                            checked={radioValue === "women"}
                                        />
                                        Women
                                    </label>
                                </li>
                            </div>
                            <div>
                                <button type='submit'>Register</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default SignUp;






