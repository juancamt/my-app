import React from "react";
import styled from 'styled-components';
import { IoMdThumbsUp } from 'react-icons/io';
import { Link } from "react-router-dom";
export const Messages = ({ title2, messagesParrafo, estadoMessages, lin, cambiarEstadoMessages }) => {
    return (
        <>  {estadoMessages &&
            <ConteMessages>
                <ContenedorMessages>
                    <EncabezadoMessages>
                        <span><IoMdThumbsUp /></span>
                    </EncabezadoMessages>
                    <h3>Successfull {title2}</h3>
                    <p>{messagesParrafo}
                    </p>
                    <Link to={lin}>
                        <BotonCerrar onClick={() => cambiarEstadoMessages(!estadoMessages)}>Ok</BotonCerrar>
                    </Link>
                </ContenedorMessages>
            </ConteMessages>
        }
        </>
    );
};
export const MessagesRemove = ({messagesParrafoRemove, estadoMessagesRemove, linRemove, cambiarEstadoMessagesRemove }) => {
    return (
        <>  {estadoMessagesRemove &&
            <ConteMessages>
                <ContenedorMessages>
                    <EncabezadoMessages>
                        <span><IoMdThumbsUp /></span>
                    </EncabezadoMessages>
                    <p id="messP">{messagesParrafoRemove}
                    </p>
                    <Link to={linRemove}>
                        <BotonCerrar onClick={() => cambiarEstadoMessagesRemove(!estadoMessagesRemove)}>Ok</BotonCerrar>
                    </Link>
                </ContenedorMessages>
            </ConteMessages>
        }
        </>
    );
};

export default Messages;


const ConteMessages = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
background: rgba(0,0,0,.5);
z-index: 110;
display: flex;
align-items: center;
justify-content: center;
`;
const ContenedorMessages = styled.div`
width: 600px;
min-height:300px;
background: #D6E8EE;
position: relative;
border-radius: 30px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
padding: 12px;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;

#messP{
    position: relative;
    top:-20px;
    width:350px;
    font-size:30px;
    line-height:43px;
    letter-spacing:2px;
}


h3{
    position: absolute;
    text-align: center;
    height:50px;
    width: 500px;
    color:#4095e5;
    font-size: 40px;
    top:70px;


}
p{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;
    height:120px;
    width: 435px;
    color:#4095e5;
    font-size: 25px;
    top:40px;
    

}
a{
    text-decoration: none;
}
`;

const EncabezadoMessages = styled.div`
position:relative;
display: flex;
align-items: center;
justify-content: center;
top:-40px;
margin-bottom: 20px;
padding-bottom: 20px;



span{
    position: absolute;
    display:flex;
    justify-content:center;
    align-items: center;
    border-radius:50%;
    font-size: 40px;
    color: #4095e5;
    height:70px;
    width:70px;
    background: #D6E8EE;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

}

`;
const BotonCerrar = styled.div`
position: relative;
cursor: pointer;
height: 45px;
width: 120px;
border: none;
color:#fff;
background: #4095e5;
transition: .3s ease all;
border-radius: 50px;
display: flex;
align-items: center;
justify-content:center;
transform: translateY(40px);
box-shadow: rgba(100, 100, 111, 2) 0px 7px 9px 0px;
font-size:25px;
bottom:-30px;
font-weight: 600;


&:hover{
    background: #2f7dc6;
}


`;