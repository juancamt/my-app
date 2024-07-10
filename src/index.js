import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom'
import Rutas from './modulos/Rutas';
import { UserProvider } from './modulos/UserContext';
// const log = ReactDOM.createRoot(document.getElementById('log'));
// log.render(
//   <React.StrictMode>
//     <Login />

//   </React.StrictMode>

// )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
    <UserProvider>

      <Rutas/>
    </UserProvider>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
