import { Link } from 'react-router-dom';
import './App.css';
import { Headerlist } from './UserList';
import { IoMdCloseCircle } from 'react-icons/io';
import React, { useState } from 'react';
import Messages from './Messages';


export const HeaderUser = () => {
    return (

        <Headerlist />

    );
};

export const CreateUserList = () => {

    const [radioValue, setRadioValue] = useState("");
    const radioInput = (e) => {
        setRadioValue(e.target.value);
    };
    console.log(radioValue)
    const [estadoMes, cambiarEstadoMes] = useState(false);

    return (
        <main id='main_list'>
            <Messages estadoMessages={estadoMes} cambiarEstadoMessages={cambiarEstadoMes} title2='Registration' messagesParrafo={'Congratulations on your registration,you have completed the registration page'} lin="/App/userList">
            </Messages>



            <div className='conteCreateUser'>
                <header className='headerCreate'>
                    <h1 id='userRegister'>Register User</h1>
                    <Link to="/App/UserList">
                        <IoMdCloseCircle id='close' />
                    </Link>
                </header>
                <div className='conteFormulario'>

                    <form>
                        <div className='one'>
                            <label for="name">Name</label>
                            <input type="text" />

                        </div>
                        <div className='two'>
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
                       
                        <button type='button' onClick={() => cambiarEstadoMes(!estadoMes)}>Register</button>
                    </form>
                </div>

            </div>

        </main>
    )

};