import { IoMdPerson, IoLogoFacebook, IoLogoLinkedin, IoLogoGoogle, IoIosLock } from "react-icons/io";
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Login.css'
const Login = () => {


    return (
        <div className="body">

            <div className="conteLogin">

                <div className="containerImg">
                    <img src="\imagenes\loguinPersona.png" alt />
                </div>

                <div className="containerFomulario">
                    <form action>
                        <h2>LOGIN</h2>
                        <select name="rol" id>
                            <option value="rol">Rol</option>
                            <option value="adminstrador">administrador</option>
                            <option value="usuario">usuario</option>
                        </select>
                        <label for>
                            <IoMdPerson id="iconLogin" />
                            <input type="email" />
                        </label>
                        <label for>
                            <IoIosLock id="iconLogin" />
                            <input type="password" />
                        </label>
                        <h3>or</h3>
                        <div className="conteInfo">
                            <span style={{color:'#EA4335'}}>
                                <IoLogoGoogle id="icon" />
                            </span>
                            <span style={{color:'#1877f2'}} >
                                <IoLogoFacebook id="icon" />
                            </span>
                            <span style={{color:'#0a66c2'}}>
                                <IoLogoLinkedin id="icon" />
                            </span >
                        </div>
                        <Link to='/App/userList'>
                            <button>Sign in</button>

                        </Link>

                        <p>Dont have an account?<Link to="/signUp">Sign up</Link></p>

                    </form>
                </div>

            </div>
        </div>

    );
};


export default Login;
