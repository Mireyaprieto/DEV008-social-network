//import { onNavigate } from "../main.js";
import { registro} from '../lib/firebese.js';
export const Register =(onNavigate)=>{
    const HomeDiv =document.createElement("div"); 
    const imagen= document.createElement("img");
    const ButtonHome =document.createElement("button"); 
    const loginTitle = document.createElement("h3");
    const titlecorreo=document.createElement("h6");
    const titleContraseña =document.createElement("h6");
    const textCorreo = document.createElement("input");
    const textContraseña =document.createElement("input");
    const ButtonRegister =document.createElement("button");
    
    ButtonHome.textContent="Regresa al home";
    
    titlecorreo.textContent="Email";
    titleContraseña.textContent="Contraseña";
    loginTitle.textContent = "Registrar";
    ButtonRegister.textContent="Registrar";
    imagen.src="./img/logo.jfif";
    

    ButtonHome.addEventListener("click",()=> onNavigate('/')); 
    
    HomeDiv.appendChild(imagen);
    HomeDiv.appendChild(ButtonHome);
    HomeDiv.appendChild(loginTitle);
    HomeDiv.appendChild(titlecorreo);
    HomeDiv.appendChild(textCorreo);
    HomeDiv.appendChild(titleContraseña);
    HomeDiv.appendChild(textContraseña);
    HomeDiv.appendChild(ButtonRegister);
    

    imagen.className="imagen";
    loginTitle.className=("title");
    titlecorreo.className=("titulocorreo");
    titleContraseña.className=("titulocontraseña");
    ButtonRegister.className=("login");
    ButtonHome.className=("Home");
    HomeDiv.className=("contenLogin");
    textContraseña.className=("contraseña");
    textCorreo.type="email";
    textContraseña.type="password";
    textCorreo.className=("correo");
    
    
    ButtonRegister.addEventListener("click",()=>{
    const correo = textCorreo.value;
     const password= textContraseña.value;
    registro(correo, password).then(()=>{
        onNavigate('/login')
    }).catch((error)=>{
        console.log(error)
    })
   })
 

    return HomeDiv;

}