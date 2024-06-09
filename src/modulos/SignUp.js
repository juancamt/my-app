// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { IoIosArrowDropleftCircle } from 'react-icons/io';
// import axios from 'axios';
// import Messages from './Messages';
// import './SignUp.css';

// function SignUp() {
//     const [radioValue, setRadioValue] = useState("");
//     const radioInput = (e) => {
//         setRadioValue(e.target.value);
//     };

//     const guardarUsuario = async (usuario) => {
//         try {
//             const response = await axios.post('http://localhost:3001/api/guardarUsuario', usuario);
//             if (response.data.message === "Usuario guardado") {
//                 console.log("Usuario guardado correctamente");
//                 // Aquí puedes realizar acciones adicionales si el usuario se guarda correctamente
//             } else {
//                 console.error("Error al guardar usuario:", response.data.message);
//             }
//         } catch (error) {
//             console.error("Error al guardar usuario:", error);
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         const password = formData.get('password');
//         const confirm_password = formData.get('confirm_password');
    
//         if (password !== confirm_password) {
//             console.error("Las contraseñas no coinciden");
//             return; // Detener el envío del formulario si las contraseñas no coinciden
//         }
    
//         const nuevoUsuario = {
//             nombre: formData.get('name'),
//             apellido: formData.get('last_name'),
//             telefono: formData.get('cell_phone'),
//             correo: formData.get('email'),
//             contraseña: password, 
//             años: formData.get('age'),
//             genero: radioValue
//         };
    
//         guardarUsuario(nuevoUsuario);
//     };
//     const [estadoMes, cambiarEstadoMes] = useState(false);

//     return (
//         <div className="container">
//             <Messages
//                 estadoMessages={estadoMes}
//                 cambiarEstadoMessages={cambiarEstadoMes}
//                 title2='Registration'
//                 messagesParrafo={'Congratulations on your registration, you have completed the registration page'}
//                 lin="/"
//             />
//             <div className='conteCreateSignUp'>
//                 <header className='headerCreateSignUp'>
//                     <h1 id='userRegisterSignUp'>Register User</h1>
//                 </header>
//                 <div className='conteFormularioSignUp'>
//                     <div id='closeConte'>
//                         <Link to="/" >
//                             <IoIosArrowDropleftCircle id='closeSignUp' />
//                         </Link>
//                     </div>
//                     <form onSubmit={handleSubmit}>
//                         <div>
//                             <label htmlFor="name">Name</label>
//                             <input type="text" name="name" />
//                         </div>
//                         <div>
//                             <label htmlFor="last_name">Last name</label>
//                             <input type="text" name="last_name" />
//                         </div>
//                         <div>
//                             <label htmlFor="cell_phone">Cell phone</label>
//                             <input type="number" name="cell_phone" />
//                         </div>
//                         <div>
//                             <label htmlFor="email">Email</label>
//                             <input type="email" name="email" />
//                         </div>
//                         <div>
//                             <label htmlFor="password">Password</label>
//                             <input type="password" name="password" />
//                         </div>
//                         <div>
//                             <label htmlFor="confirm_password">Confirm password</label>
//                             <input type="password" name="confirm_password" />
//                         </div>
//                         <div>
//                             <label htmlFor="age">Age</label>
//                             <input type="number" name="age" />
//                         </div>
//                         <div>
//                             <label htmlFor="gender">Gender</label>
//                             <li>
//                                 <label htmlFor="man">
//                                     <input
//                                         type="radio"
//                                         value="man"
//                                         checked={radioValue === "man"}
//                                         onChange={radioInput}
//                                     />
//                                     Man
//                                 </label>
//                                 <label htmlFor="women">
//                                     <input
//                                         type="radio"
//                                         checked={radioValue === "women"}
//                                         onChange={radioInput}
//                                         value="women" />
//                                     Women
//                                 </label>
//                             </li>
//                         </div>
//                         <div>
//                             <button type='submit'>Register</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SignUp;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Messages from './Messages';
import './SignUp.css';

function SignUp() {
    const [radioValue, setRadioValue] = useState("");

    const handleRadioChange = (e) => {
        setRadioValue(e.target.value);
    };
// guardamos el usuario 
    const guardarUsuario = async (usuario) => {
        try {
            const response = await axios.post('http://localhost:3001/api/guardarUsuario', usuario);
            if (response.data.message === "Usuario guardado") {
                console.log("Usuario guardado correctamente");
                // Aquí puedes realizar acciones adicionales si el usuario se guarda correctamente
            } else {
                console.error("Error al guardar usuario:", response.data.message);
            }
        } catch (error) {
            console.error("Error al guardar usuario:", error);
        }
    };
    const [estadoMes, cambiarEstadoMes] = useState(false);

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
                            name: '',
                            last_name: '',
                            cell_phone: '',
                            email: '',
                            password: '',
                            confirm_password: '',
                            age: '',
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
                                nombre: values.name,
                                apellido: values.last_name,
                                telefono: values.cell_phone,
                                correo: values.email,
                                contraseña: values.password,
                                años: values.age,
                                genero: radioValue
                            };
                            guardarUsuario(nuevoUsuario);
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






