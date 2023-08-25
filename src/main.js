// Este es el punto de entrada de tu aplicacion
import { Home }     from './components/Home.js';
import { Register } from './components/Register.js';
import {Login }     from './components/login.js';
import { Muro } from './components/Muro.js';




const rootDiv = document.getElementById("root");
const routes = {
    '/': Home, 
    '/register': Register,
    '/login': Login,
    '/muro': Muro,
    
};

export const onNavigate = (pathname)=>{
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname,
    );
    while (rootDiv.firstChild){
        rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(routes[pathname](onNavigate));

};
window.onpopstate =()=>{
    while (rootDiv.firstChild){
        rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(component(onNavigate));
};
const component = routes[window.location.pathname];
rootDiv.appendChild(component(onNavigate));

 

