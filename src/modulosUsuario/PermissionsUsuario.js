import React from 'react'
import { IoMdPerson, IoMdNotifications} from 'react-icons/io';

export const HeaderPermissionsUsuario = () => {
    return (
  
  
      <header id='header_list'>
        <div className="list_header">
          <IoMdPerson id='user_header' />
          <span id="list_text">Permissions</span>
  
        </div>
  
        <div className="list_header">
       
          <IoMdNotifications id='notificacion' />
        </div>
  
  
      </header>
  
  
    );
  };
export function PermissionsUsuario() {
  return (
    <>
    <div>
      <h3>Esto es el permiso main</h3>
      
    </div>
    </>
  )
}
