import React from "react";
import styled from 'styled-components';
import {IoMdCloseCircle } from 'react-icons/io';

const Modal = ({children,estado,cambiarEstado,titulo}) => {
    return (
        <>  {estado &&
            <Overlay>
                <ContenedorModal>
                    <EncabezadoModal>
                    <h3>{titulo}</h3>
                    </EncabezadoModal>
                    <BotonCerrar onClick={()=>cambiarEstado(!estado)}><IoMdCloseCircle id="iconModal"/></BotonCerrar>
                    {children}
                </ContenedorModal>
            </Overlay>
            }
        </>
    );
};
export default Modal;

const Overlay = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
background: rgba(0,0,0,.5);
z-index: 100;
display: flex;
align-items: center;
justify-content: center;
`;
const ContenedorModal = styled.div`
width: 500px;
min-height:600px;
background: #fff;
position: relative;
border-radius: 30px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
padding: 12px;
`;

const EncabezadoModal = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
padding-bottom: 20px;
// border-bottom: 1px solid #E8E8E8;

h3{
    font-weight: 600;
    font-size: 30px;
    color: #000;
    letter-spacing: 2px;

}
&::after{
    position: absolute;
    content: '';
    top: 60px;
    height: 4px;
    width: 60px;
    background: #4095e5;
    border-radius: 30px;

}
`;
const BotonCerrar = styled.div`
position: absolute;
top: 10px;
right: 10px;
cursor: pointer;
height: 40px;
width: 40px;
border: none;
background: none;
transition: .3s ease all;
border-radius: 50px;
color: #f00707;
display: flex;
align-items: center;
justify-content:center;

&:hover{
    background: #f2f2f2;
}
#iconModal{
    height: 30px;
    width: 30px;
}

`;