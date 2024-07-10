import { Link } from 'react-router-dom';
import './App.css';
import { Headerlist } from './UserList';
import { IoMdCloseCircle } from 'react-icons/io';
import React, { useState,useEffect } from 'react';
import Messages from './Messages';
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';
import * as Yup from 'yup';


export const HeaderUser = () => {
    return (
        <Headerlist />
    );
};

export const CreateUserList = () => {

    const [radioValue, setRadioValue] = useState("");

    const handleRadioChange = (e) => {
        setRadioValue(e.target.value);
    };
    // guardamos el usuario 
    const guardarEmpleado = async (empleado) => {
        try {
            const response = await axios.post('http://localhost:3001/api/guardarEmpleado', empleado);
            if (response.data.message === "Empleado guardado") {
                console.log("Empleado guardado correctamente");
            } else {
                console.error("Error al guardar empleado:", response.data.message);
            }
        } catch (error) {
            console.error("Error al guardar empleado:", error);
        }
    };
    const [estadoMes, cambiarEstadoMes] = useState(false);


    return (
        <main id='main_list'>
            <Messages
                estadoMessages={estadoMes}
                cambiarEstadoMessages={cambiarEstadoMes}
                title2='Registration'
                messagesParrafo={'Congratulations on your registration, you have completed the registration page'}
                lin="/administrador/userList"
            />
            <div className='conteCreateUser'>
                <header className='headerCreate'>
                    <h1 id='userRegister'>Register User</h1>
                    <Link to="/administrador/UserList">
                        <IoMdCloseCircle id='close' />
                    </Link>
                </header>
                <div className='conteFormulario'>
                <Formik
                        initialValues={{
                            name: '',
                            last_name: '',
                            cell_phone: '',
                            email: '',
                            password: '',
                            confirm_password: '',
                            age: '',
                            genero:'',
                            direccion:''
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
                            const nuevoEmpleado = {
                                nombre: values.name,
                                apellido: values.last_name,
                                telefono: values.cell_phone,
                                correo: values.email,
                                contraseña: values.password,
                                años: values.age,
                                genero: radioValue,
                                direccion:values.direccion
                            };
                            guardarEmpleado(nuevoEmpleado);
                            resetForm();
                        }}
                    >
                        <Form>
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
                                <label htmlFor="age">Age</label>
                                <Field type="number" name="age" />
                                <ErrorMessage name="age" component="div" className="error" />
                            </div>
                            <div>
                                <label htmlFor="direccion">Address</label>
                                <Field type="text" name="direccion" />
                                <ErrorMessage name="direccion" component="div" className="error" />
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
        </main>
    );
};
