//import { onNavigate } from "../main.js";
import { registro} from '../lib/firebase.js';
export const Register =(onNavigate)=>{
    const HomeDiv =document.createElement("div"); 
    const imagen= document.createElement("img");
    const loginTitle = document.createElement("h3");
    const titlecorreo=document.createElement("h6");
    const titleContraseña =document.createElement("h6");
    const textCorreo = document.createElement("input");
    const textContraseña =document.createElement("input");
    const ButtonRegister =document.createElement("button");
    
   
    
    titlecorreo.textContent="Email";
    titleContraseña.textContent="Contraseña";
    loginTitle.textContent = "Registrar";
    ButtonRegister.textContent="Registrar";
    imagen.src="./img/logo.jfif";
    

    
    
    HomeDiv.appendChild(imagen);
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
    HomeDiv.className=("contenLogin");
    textContraseña.className=("contraseña");
    textCorreo.type="email";
    textContraseña.type="password";
    textCorreo.className=("correo");
    
    
    ButtonRegister.addEventListener("click",()=>{
    const correo = textCorreo.value;
     const password= textContraseña.value;
    registro(correo, password).then((user)=>{
       onNavigate('/login')
       
    }).catch((error)=>{
        
        if (error.code === 'auth/invalid-email' ){
            alert("Correo invalido");
        
        } else (error.message === 'auth/weak-password'); {
            alert("Contraseña debil ");
        }

        
        
    })
   })
 

    return HomeDiv;

}