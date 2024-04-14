import './SignUp.css';
import { Link } from 'react-router-dom';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import React, { useState } from 'react';
import Messages from './Messages';
// hacer la implementacion del formulario
function SignUp() {
    const [radioValue, setRadioValue] = useState("");
    const radioInput = (e) => {
        setRadioValue(e.target.value);
    };
    console.log(radioValue)

    const [estadoMes, cambiarEstadoMes] = useState(false);
    return (

        <div className="container">
               <Messages estadoMessages={estadoMes} 
               cambiarEstadoMessages={cambiarEstadoMes}
               title2='Registration' 
               messagesParrafo={'Congratulations on your registration,you have completed the registration page'}
               lin="/">
               </Messages>

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
                    <form>
                        <div >
                            <label htmlFor="name">Name</label>
                            <input type="text" />

                        </div>
                        <div >
                            <label htmlFor="last name">Last name</label>
                            <input type="text" name="" />
                        </div>
                        <div>
                            <label htmlFor="cell Phone">Cell phone</label>
                            <input type="number" name="" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="" />
                        </div>
                        <div>
                            <label htmlFor="confirm password">Confirm password</label>
                            <input type="password" name="" />
                        </div>
                        <div>
                            <label htmlFor="age">Age</label>
                            <input type="number" name="" />
                        </div>
                        <div>
                            <label htmlFor="Gende">Gender</label>
                            <li>
                                <label htmlFor="man">
                                    <input
                                        type="radio"
                                        value="man"
                                        checked={radioValue === "man"}
                                        onChange={radioInput}
                                    />
                                    Man
                                </label>
                                <label htmlFor="women">
                                    <input
                                        type="radio"
                                        checked={radioValue === "women"}
                                        onChange={radioInput}
                                        value="women" />
                                    Women
                                </label>
                            </li>
                        </div>
                        <div>
                        <button type='button'onClick={()=>cambiarEstadoMes(!estadoMes)}>Register</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
};
export default SignUp;
// validate={(values)=>{
//     let errores ={};
//     //---------------------------------------------- validacion de correo---------------------------------------------------------
//     if(!values.email) {
//         errores.email='Por favor ingresa un correo '
//     }else if(! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
//         errores.email ='El correo solo puede contener letras, numeros, puntos,guiones y guion bajo'
//     }

//     // ---------------------------------------------validacion de contraseña-----------------------------------------------------------

//     if (!values.password) {
//         errores.password = 'Por favor ingresa una contraseña';
//     }
    
//     else if (!/^(?=.*[a-z])/.test(values.password)) {
//         errores.password = 'Minimo 8 caracteres';
//     }
    
//     else if (!/^(?=.*[A-Z])/.test(values.password)) {
//         errores.password = 'Al menos una letra mayúscula';
//     }
    
//     else if (!/^(?=.*\d)/.test(values.password)) {
//         errores.password = 'Al menos un dígito';
//     }
    
//     else if (!/^(?=.*[$@$!%*?&])/.test(values.password)) {
//         errores.password = 'Al menos 1 caracter especial';
//     }
    
//     else if (values.password.length < 8 || values.password.length > 15) {
//         errores.password = 'La contraseña debe tener entre 8 y 15 caracteres';
//     }
    
//     else if (/\s/.test(values.password)) {
//         errores.password = 'No debe contener espacios en blanco';
//     }
//     return errores
// }}
// onSubmit={(values,{resetForm}) => {
//     resetForm();
//     console.log('Formulario enviado...',values);
//     console.log('usurario no ingresado');
  
//     console.log('ingresando usuario');

// }}
// >






