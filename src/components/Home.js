//import { onNavigate } from "../main.js";

export const Home =(onNavigate)=>{
    const HomeDiv =document.createElement("div");
    const ButtonRegister =document.createElement("button");
    const buttonlogin=document.createElement("button");
    const bienvenida =document.createElement("p")
    const imagen= document.createElement("img");
    const contenido= document.createElement("textarea");
    const botonPublicar=document.createElement("button")
    
    ButtonRegister.textContent="Registrate";
    buttonlogin.textContent="Iniciar sesión";
    imagen.src="./img/logo.jfif";
    bienvenida.textContent=" cuentanos acerca de tu mascota ";
    botonPublicar.textContent="Publicar"



    ButtonRegister.addEventListener("click",()=> onNavigate('/register'));
    buttonlogin.addEventListener("click",()=> onNavigate('/login'));
    HomeDiv.appendChild(imagen);
    HomeDiv.appendChild(ButtonRegister);
    HomeDiv.appendChild(buttonlogin);
    HomeDiv.appendChild(bienvenida);
    HomeDiv.appendChild(contenido);
    HomeDiv.appendChild(botonPublicar);

    ButtonRegister.className= "botonr";
    buttonlogin.className="botonl";
    imagen.className="imagenhome";
    bienvenida.className="bienvenida";
    botonPublicar.className="botonPublicar";
    contenido.className="contenido";

    return HomeDiv;

}