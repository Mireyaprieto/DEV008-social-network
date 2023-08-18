//import { onNavigate } from "../main.js";

import { publicar, usuarioActual,listenPost,eliminar} from "../lib/firebese";
import { async } from "regenerator-runtime";
export const Home =(onNavigate)=>{
    const HomeDiv =document.createElement("div");
    const  buttonDiv= document.createElement("div");
    const ButtonRegister =document.createElement("button");
    const buttonlogin=document.createElement("button");
    const bienvenida =document.createElement("p")
    const imagen= document.createElement("img");
    const contenido= document.createElement("textarea");    
    const botonPublicar=document.createElement("button")
    const postdiv =document.createElement("div")
    
    ButtonRegister.textContent="Registrate";
    buttonlogin.textContent="Iniciar sesión";
    imagen.src="./img/logo.jfif";
    bienvenida.textContent=" cuentanos acerca de tu mascota ";
    botonPublicar.textContent="Publicar"



    ButtonRegister.addEventListener("click",()=> onNavigate('/register'));
    buttonlogin.addEventListener("click",()=> onNavigate('/login'));
   
    botonPublicar.addEventListener("click",()=> {
        const correo= usuarioActual();
        if(!correo){
            alert("debes iniciar seccion")
            onNavigate("/login")
            
        } else{
        publicar( correo, contenido.value).then(()=>{
            alert("publicacion  guardada")
           
           
        })
        .catch(()=>{
            alert("error de publicacion")
        })
    }
        
    })
   
    HomeDiv.appendChild(imagen);
    HomeDiv.appendChild(buttonDiv);
   buttonDiv.appendChild(ButtonRegister);
   buttonDiv.appendChild(buttonlogin);
    HomeDiv.appendChild(bienvenida);
    HomeDiv.appendChild(contenido);
    HomeDiv.appendChild(botonPublicar);
    HomeDiv.appendChild(postdiv)
   
   
    ButtonRegister.className= "botonr";
    buttonlogin.className="botonl";
    imagen.className="imagenhome";
    bienvenida.className="bienvenida";
    botonPublicar.className="botonPublicar";
    contenido.className="contenido";
    contenido.id="contenido"
    buttonDiv.className="botones";
 
    const postData=(collection)=>{
    postdiv.innerHTML=" ";
    collection.docs.forEach(element => {
     const datapost =element.data() 
     const postElement = document.createElement("p");
     postElement.className="card";
     postElement.textContent= datapost.correo + " : " + datapost.texto;
     const botonEliminar=document.createElement("button")
     botonEliminar.textContent= "Eliminar"
     botonEliminar.addEventListener("click",()=>{
        
        console.log(element.id)
        eliminar(element.id)
        })
     postdiv.appendChild(postElement)
     postElement.appendChild(botonEliminar)
    });
 }
 listenPost(postData)
 return HomeDiv;

}