import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
// import { App, HelloWorldApp, Msj_Bienvenida } from './HelloWorldApp';


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
            {/* <App />
            <HelloWorldApp />
            <Msj_Bienvenida /> */}
            <FirstApp /> 
    </React.StrictMode>


);

