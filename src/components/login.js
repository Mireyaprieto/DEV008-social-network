//import { onNavigate } from "../main.js";

export const Login =(onNavigate)=>{
    const HomeDiv =document.createElement("div");    
    const ButtonHome =document.createElement("button"); 
    const loginTitle = document.createElement("h3");
    const textCorreo = document.createElement("input");
    const textContraseña =document.createElement("input");
    const ButtonLogin =document.createElement("button");
    const buttonRegister=document.createElement("h5");
    ButtonHome.textContent="Regresa al home";
    buttonRegister.textContent="Registrate ";
    ButtonHome.addEventListener("click",()=> onNavigate('/')); 
    buttonRegister.addEventListener("click",()=>onNavigate('/register'))  
    HomeDiv.appendChild(ButtonHome);
    HomeDiv.appendChild(loginTitle);
    HomeDiv.appendChild(textCorreo);
    HomeDiv.appendChild(textContraseña);
    HomeDiv.appendChild(ButtonLogin);
    HomeDiv.appendChild(buttonRegister)
    loginTitle.textContent = "Iniciar Sesión";
    ButtonLogin.textContent="Sing in";
    loginTitle.className=("title");
    ButtonLogin.className=("login");
    ButtonHome.className=("Home");
    HomeDiv.className=("contecLogin");
    textContraseña.className=("contraseña");
    textCorreo.className=("correo");
    buttonRegister.id=("register")
    buttonRegister.className=("registro");


 
    return HomeDiv;


}