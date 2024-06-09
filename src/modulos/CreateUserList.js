// import { Link } from 'react-router-dom';
// import './App.css';
// import { Headerlist } from './UserList';
// import { IoMdCloseCircle } from 'react-icons/io';
// import React, { useState } from 'react';
// import Messages from './Messages';
// import { Formik, Form, Field, ErrorMessage } from "formik";



// export const HeaderUser = () => {
//     return (

//         <Headerlist />

//     );
// };

// export const CreateUserList = () => {

//     const [radioValue, setRadioValue] = useState("");
//     const radioInput = (e) => {
//         setRadioValue(e.target.value);
//     };

//     const [estadoMes, cambiarEstadoMes] = useState(false);

//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');


//     const validarPassword = (values) => {
//         const errores = {};

//         if (values.password.length > 0) {
//             if (values.password !== values.confirmPassword) {
//                 errores.confirmPassword = 'Las contraseñas no coinciden';
//             } else {
//                 errores.confirmPassword = 'Las contraseñas  coinciden';
//                 errores.passwordsMatch = true;
//             }
//         }

//         return errores;
//     };


//     return (
//         <main id='main_list'>
//             <Messages estadoMessages={estadoMes}
//                 cambiarEstadoMessages={cambiarEstadoMes}
//                 title2='Registration'
//                 messagesParrafo={'Congratulations on your registration,you have completed the registration page'}
//                 lin="/App/userList">
//             </Messages>



//             <div className='conteCreateUser'>
//                 <header className='headerCreate'>
//                     <h1 id='userRegister'>Register User</h1>
//                     <Link to="/App/UserList">
//                         <IoMdCloseCircle id='close' />
//                     </Link>
//                 </header>
//                 <div className='conteFormulario'>
//                     <Formik

//                         initialValues={{
//                             name: '',
//                             lastName: '',
//                             email: '',
//                             cellPhone: '',
//                             password: '',
//                             confirmPassword: ''
//                         }}
//                         validate={(values) => {
//                             let errores = {};
//                             //---------------------------------------------- validacion de nombre---------------------------------------------------------
//                             if (!values.name) {
//                                 errores.name = 'Por favor ingrese un nombre';
//                             } else if (!/^[a-zA-Z' ]{2,30}$/.test(values.name)) {
//                                 errores.name = 'Solo permite letras.Longitud mínima de 2 caracteres y máximo de 30 caracteres.';
//                             }
//                             //---------------------------------------------- validacion de apellido---------------------------------------------------------

//                             if (!values.lastName) {
//                                 errores.lastName = 'Por favor ingrese un apellido';
//                             } else if (!/^[a-zA-Z' ]{2,30}$/.test(values.lastName)) {
//                                 errores.lastName = 'Solo permite letras.Longitud mínima de 2 caracteres y máximo de 30 caracteres.';
//                             }
//                             //---------------------------------------------- validacion de correo---------------------------------------------------------
//                             if (!values.email) {
//                                 errores.email = 'Por favor ingrese un correo '
//                             } else if (! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
//                                 errores.email = 'El correo solo puede contener letras, numeros, puntos,guiones y guion bajo'
//                             }
//                             //---------------------------------------------- validacion de correo---------------------------------------------------------
//                             if (!values.cellPhone) {
//                                 errores.cellPhone = 'Por favor ingrese un numero telefonico '
//                             } else if (! /^(\+\d{1,2}\s?)?(\(\d{1,4}\)|\d{1,4})[-.\s]?\d{1,6}[-.\s]?\d{1,6}$/.test(values.cellPhone)) {
//                                 errores.cellPhone = 'El número telefónico debe cumplir con los siguientes requisitos:' +
//                                     '\n- Aceptar números y caracteres especiales como paréntesis, guiones y espacios.' +
//                                     '\n- Puede contener un código de país opcional al principio.' +
//                                     '\n- Se espera que tenga entre 10 y 15 caracteres.';
//                             }

//                             // ---------------------------------------------validacion de contraseña-----------------------------------------------------------


//                             if (!values.password) {
//                                 errores.password = 'Por favor ingrese una contraseña';
//                             }

//                             else if (!/^(?=.*[a-z])/.test(values.password)) {
//                                 errores.password = 'Minimo 8 caracteres';
//                             }

//                             else if (!/^(?=.*[A-Z])/.test(values.password)) {
//                                 errores.password = 'Al menos una letra mayúscula';
//                             }

//                             else if (!/^(?=.*\d)/.test(values.password)) {
//                                 errores.password = 'Al menos un dígito';
//                             }

//                             else if (!/^(?=.*[$@$!%*?&])/.test(values.password)) {
//                                 errores.password = 'Al menos 1 caracter especial';
//                             }

//                             else if (values.password.length < 8 || values.password.length > 15) {
//                                 errores.password = 'La contraseña debe tener entre 8 y 15 caracteres';
//                             }

//                             else if (/\s/.test(values.password)) {
//                                 errores.password = 'No debe contener espacios en blanco';
//                             }

//                             const passwordErrors = validarPassword(values);
//                             errores = { ...errores, ...passwordErrors };

//                             return errores;
//                         }}
//                         onSubmit={(values, { resetForm }) => {
//                             const { confirmPassword, ...formData } = values;
//                             resetForm();
//                             console.log('Formulario enviado...', formData, values);
//                         }}



//                     >
//                         {({ errors }) => (
//                             <Form>
//                                 <div className='one'>
//                                     <label htmlFor="name">Name</label>
//                                     <Field
//                                         type="text"
//                                         name="name"
//                                     />
//                                     <ErrorMessage name="name" component={() => (<div className="errorUser"><p className="pUser">{errors.name}</p></div>)} />


//                                 </div>
//                                 <div className='two'>
//                                     <label htmlFor="last name">Last name</label>
//                                     <Field
//                                         type="text"
//                                         name="lastName"
//                                     />
//                                     <ErrorMessage name="lastName" component={() => (<div className="errorUser"><p className="pUser">{errors.lastName}</p></div>)} />

//                                 </div>
//                                 <div>
//                                     <label htmlFor="cell Phone">Cell phone</label>
//                                     <Field
//                                         type="number"
//                                         name="cellPhone"
//                                     />
//                                     <ErrorMessage name="cellPhone" component={() => (<div className="errorUser"><p className="pUser">{errors.cellPhone}</p></div>)} />

//                                 </div>
//                                 <div>
//                                     <label htmlFor="email">Email</label>
//                                     <Field
//                                         type="email"
//                                         name="email"
//                                     />
//                                     <ErrorMessage name="email" component={() => (<div className="errorUser"><p className="pUser">{errors.email}</p></div>)} />

//                                 </div>
//                                 <div>
//                                     <label htmlFor="password">Password</label>
//                                     <Field
//                                         type="password"
//                                         name="password"

//                                     />
//                                     <ErrorMessage name="password" component={() => (<div className="errorUser"><p className="pUser">{errors.password}</p></div>)} />

//                                 </div>
//                                 <div>
//                                     <label htmlFor="confirm password">Confirm password</label>
//                                     <Field
//                                         type="password"
//                                         name="confirmPassword"

//                                     />
//                                     <ErrorMessage name="confirmPassword" component={() => (<div className={errors.passwordsMatch ? 'password-match' : 'errorUser'}><p className="pUser">{errors.confirmPassword}</p></div>)} />

//                                 </div>
//                                 <div>
//                                     <label htmlFor="Gende">Gender</label>
//                                     <li>
//                                         <label htmlFor="man">
//                                             <Field
//                                                 type="radio"
//                                                 value="man"
//                                                 name='man'
//                                                 id='man'
//                                                 checked={radioValue === "man"}
//                                                 onChange={radioInput}
//                                             />
//                                             Man
//                                         </label>
//                                         <label htmlFor="women">
//                                             <Field
//                                                 type="radio"
//                                                 value="women"
//                                                 name='women'
//                                                 id='women'
//                                                 checked={radioValue === "women"}
//                                                 onChange={radioInput}

//                                             />

//                                             Women
//                                         </label>
//                                     </li>
//                                 </div>

//                                 <button type='submit'
//                                 //  onClick={() => cambiarEstadoMes(!estadoMes)}
//                                 >Register</button>
//                             </Form>
//                         )}
//                     </Formik>
//                 </div>

//             </div>

//         </main>
//     )

// };
import { Link } from 'react-router-dom';
import './App.css';
import { Headerlist } from './UserList';
import { IoMdCloseCircle } from 'react-icons/io';
import React, { useState } from 'react';
import Messages from './Messages';
import { Formik, Form, Field, ErrorMessage } from "formik";

export const HeaderUser = () => {
    return (
        <Headerlist />
    );
};

export const CreateUserList = () => {


    const [estadoMes, cambiarEstadoMes] = useState(false);

    // const validarPassword = (values) => {
    //     let errores = {};


    //     if (values.password.length > 0) {
    //         if (values.password !== values.confirmPassword) {
    //             errores.confirmPassword = 'Las contraseñas no coinciden';
    //             errores.confirmPassword = false;
    //         }
    //         if (values.password === values.confirmPassword) {
    //             errores.confirmPassword = 'Las contraseñas  coinciden';
    //             errores.confirmPassword = true;

    //         }
    //     }
    //     return errores;
    // };

    return (
        <main id='main_list'>
            <Messages
                estadoMessages={estadoMes}
                cambiarEstadoMessages={cambiarEstadoMes}
                title2='Registration'
                messagesParrafo={'Congratulations on your registration, you have completed the registration page'}
                lin="/App/userList"
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
                            lastName: '',
                            email: '',
                            cellPhone: '',
                            password: '',
                            gender: '',
                            confirmPassword: ''
                        }}
                        validate={(values) => {
                            let errores = {};
                            if (!values.name) {
                                errores.name = 'Por favor ingrese un nombre';
                            } else if (!/^[a-zA-Z' ]{2,30}$/.test(values.name)) {
                                errores.name = 'Solo permite letras. Longitud mínima de 2 caracteres y máximo de 30 caracteres.';
                            }
                            if (!values.lastName) {
                                errores.lastName = 'Por favor ingrese un apellido';
                            } else if (!/^[a-zA-Z' ]{2,30}$/.test(values.lastName)) {
                                errores.lastName = 'Solo permite letras. Longitud mínima de 2 caracteres y máximo de 30 caracteres.';
                            }
                            if (!values.email) {
                                errores.email = 'Por favor ingrese un correo';
                            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                                errores.email = 'El correo solo puede contener letras, números, puntos, guiones y guion bajo';
                            }
                            if (!values.cellPhone) {
                                errores.cellPhone = 'Por favor ingrese un número telefónico';
                            } else if (!/^(\+\d{1,2}\s?)?(\(\d{1,4}\)|\d{1,4})[-.\s]?\d{1,6}[-.\s]?\d{1,6}$/.test(values.cellPhone)) {
                                errores.cellPhone = 'El número telefónico debe cumplir con los siguientes requisitos:' +
                                    '\n- Aceptar números y caracteres especiales como paréntesis, guiones y espacios.' +
                                    '\n- Puede contener un código de país opcional al principio.' +
                                    '\n- Se espera que tenga entre 10 y 15 caracteres.';
                            }
                            if (!values.password) {
                                errores.password = 'Por favor ingrese una contraseña';
                            }

                            else if (!/^(?=.*[a-z])/.test(values.password)) {
                                errores.password = 'Minimo 8 caracteres';
                            }

                            else if (!/^(?=.*[A-Z])/.test(values.password)) {
                                errores.password = 'Al menos una letra mayúscula';
                            }

                            else if (!/^(?=.*\d)/.test(values.password)) {
                                errores.password = 'Al menos un dígito';
                            }

                            else if (!/^(?=.*[$@$!%*?&])/.test(values.password)) {
                                errores.password = 'Al menos 1 caracter especial';
                            }

                            else if (values.password.length < 8 || values.password.length > 15) {
                                errores.password = 'La contraseña debe tener entre 8 y 15 caracteres';
                            }

                            else if (/\s/.test(values.password)) {
                                errores.password = 'No debe contener espacios en blanco';
                            }


                            // const passwordErrors = validarPassword(values);
                            // errores = { ...errores, ...passwordErrors };

                            return errores;
                        }}
                        onSubmit={(values, { resetForm }) => {
                            // const { confirmPassword, ...formData } = values;
                            resetForm();
                            console.log('Formulario enviado...', values);
                        }}
                    >
                        {({ errors }) => (
                            <Form>
                                <div className='one'>
                                    <label htmlFor="name">Name</label>
                                    <Field type="text" name="name" />
                                    <ErrorMessage name="name" component={() => (<div className="errorUser"><p className="pUser">{errors.name}</p></div>)} />
                                </div>
                                <div className='two'>
                                    <label htmlFor="last name">Last name</label>
                                    <Field type="text" name="lastName" />
                                    <ErrorMessage name="lastName" component={() => (<div className="errorUser"><p className="pUser">{errors.lastName}</p></div>)} />
                                </div>
                                <div>
                                    <label htmlFor="cell Phone">Cell phone</label>
                                    <Field type="number" name="cellPhone" />
                                    <ErrorMessage name="cellPhone" component={() => (<div className="errorUser"><p className="pUser">{errors.cellPhone}</p></div>)} />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <Field type="email" name="email" />
                                    <ErrorMessage name="email" component={() => (<div className="errorUser"><p className="pUser">{errors.email}</p></div>)} />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <Field type="password" name="password" />
                                    <ErrorMessage name="password" component={() => (<div className="errorUser"><p className="pUser">{errors.password}</p></div>)} />
                                </div>
                                <div>
                                    <label htmlFor="confirm password">Confirm password</label>
                                    <Field
                                        type="password"
                                        name="confirmPassword"

                                    />
                                    {errors.confirmPassword !== undefined && (
                                        <div className={errors.confirmPassword ? 'password-match' : 'errorUser'}>
                                            <p className="pUser">
                                                {errors.confirmPassword ? 'Las contraseñas coinciden' : 'Las contraseñas no coinciden'}
                                            </p>
                                        </div>
                                    )}
                                    {/* <ErrorMessage name="confirmPassword" component={() => (<div className={errors.passwordsMatch ? 'password-match' : 'errorUser'}><p className="pUser">{errors.confirmPassword}</p></div>)} /> */}

                                </div>
                                <div>
                                    <label htmlFor="Gender">Gender</label>
                                    <li>
                                        <label htmlFor="man">
                                            <Field type="radio" value="man" name='gender' id='man' />
                                            Man
                                        </label>
                                        <label htmlFor="women">
                                            <Field type="radio" value="women" name='gender' id='women' />
                                            Women
                                        </label>
                                    </li>
                                </div>
                                <div>
                                <button type='submit'>Register</button>
                                </div>
                               
                            </Form>
                            
                        )}
                    </Formik>
                </div>
            </div>
        </main>
    );
};
