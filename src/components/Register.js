//import { onNavigate } from "../main.js";

export const Register =(onNavigate)=>{
    const HomeDiv =document.createElement("div");
   
    const ButtonHome =document.createElement("button");
   

    ButtonHome.textContent="Regresa al home";
    
    ButtonHome.addEventListener("click",()=> onNavigate('/'));

    HomeDiv.appendChild(ButtonHome);
 

    return HomeDiv;

}