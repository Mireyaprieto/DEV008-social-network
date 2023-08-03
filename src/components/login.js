//import { onNavigate } from "../main.js";
import { login } from '../lib/firebese.js';
export const Login =(onNavigate)=>{
    const HomeDiv =document.createElement("div"); 
    const imagen= document.createElement("img");
    /*const ButtonHome =document.createElement("button"); */
    const loginTitle = document.createElement("h3");
    const titlecorreo=document.createElement("h6");
    const titleContraseña =document.createElement("h6");
    const textCorreo = document.createElement("input");
    const textContraseña =document.createElement("input");
    const ButtonLogin =document.createElement("button");
    const buttonRegister=document.createElement("h5");
    /*ButtonHome.textContent="Regresa al home";*/
    buttonRegister.textContent="Registrate ";
    titlecorreo.textContent="Email";
    titleContraseña.textContent="Contraseña";  
    loginTitle.textContent = "Inicia Sesión";
    ButtonLogin.textContent="Iniciar sesion";
    imagen.src="./img/logo.jfif";
    

    /*ButtonHome.addEventListener("click",()=> onNavigate('/')); */
    buttonRegister.addEventListener("click",()=>onNavigate('/register'));
    HomeDiv.appendChild(imagen);
    /*HomeDiv.appendChild(ButtonHome);*/
    HomeDiv.appendChild(loginTitle);
    HomeDiv.appendChild(titlecorreo);
    HomeDiv.appendChild(textCorreo);
    HomeDiv.appendChild(titleContraseña);
    HomeDiv.appendChild(textContraseña);
    HomeDiv.appendChild(ButtonLogin);
    HomeDiv.appendChild(buttonRegister); 

    imagen.className="imagen";
    loginTitle.className=("title");
    titlecorreo.className=("titulocorreo");
    titleContraseña.className=("titulocontraseña");
    ButtonLogin.className=("login");
    /*ButtonHome.className=("Home");*/
    HomeDiv.className=("contenLogin");
    textContraseña.className=("contraseña");
    textCorreo.type="email";
    textContraseña.type="password";
    textCorreo.className=("correo");
    
    buttonRegister.className=("registro");

    ButtonLogin.addEventListener("click",()=>{
        const correo = textCorreo.value;
         const password= textContraseña.value;
        login(correo, password).then((user)=>{
            onNavigate('/')
        }).catch((error)=>{
            console.log(error)
            if (error.code === 'auth/user-not-found'){
                alert ("usuario no registrado ");
                  
            }else (error.message === 'auth/wrong-password'); {
               alert ("Contraseña incorrecta")
            }
           
           
            
        })
    })


 
    return HomeDiv;


}