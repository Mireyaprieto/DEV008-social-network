//import { onNavigate } from "../main.js";

export const Home =(onNavigate)=>{
    const HomeDiv =document.createElement("div");
    const ButtonRegister =document.createElement("button");
    const buttonlogin=document.createElement("button");

    ButtonRegister.textContent="Registrate";
    buttonlogin.textContent="Inicia sesión";

    ButtonRegister.addEventListener("click",()=> onNavigate('/register'));
    buttonlogin.addEventListener("click",()=> onNavigate('/login'));
    
    HomeDiv.appendChild(ButtonRegister);
    HomeDiv.appendChild(buttonlogin);

    return HomeDiv;

}