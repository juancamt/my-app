import './SignUp.css';
import { Link } from 'react-router-dom';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import React, { useState } from 'react';
import Messages from './Messages';

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
                            <label for="name">Name</label>
                            <input type="text" />

                        </div>
                        <div >
                            <label for="last name">Last name</label>
                            <input type="text" name="" />
                        </div>
                        <div>
                            <label for="cell Phone">Cell phone</label>
                            <input type="number" name="" />
                        </div>
                        <div>
                            <label for="email">Email</label>
                            <input type="email" name="" />
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <input type="password" name="" />
                        </div>
                        <div>
                            <label for="confirm password">Confirm password</label>
                            <input type="password" name="" />
                        </div>
                        <div>
                            <label for="age">Age</label>
                            <input type="number" name="" />
                        </div>
                        <div>
                            <label for="Gende">Gender</label>
                            <li>
                                <label for="man">
                                    <input
                                        type="radio"
                                        value="man"
                                        checked={radioValue === "man"}
                                        onChange={radioInput}
                                    />
                                    Man
                                </label>
                                <label for="women">
                                    <input
                                        type="radio"
                                        checked={radioValue === "women"}
                                        onChange={radioInput}
                                        value="women" />
                                    Women
                                </label>
                            </li>
                        </div>

                        <button type='button'onClick={()=>cambiarEstadoMes(!estadoMes)}>Register</button>
                    </form>
                </div>

            </div>
        </div>
    )
};
export default SignUp;