//import { onNavigate } from "../main.js";
import {
    publicar,
    usuarioActual,
    listenPost,
    eliminar,
    
    
  } from "../lib/firebase";
  import { async } from "regenerator-runtime";
  export const Muro= (onNavigate) => {
    const HomeDiv = document.createElement("div");
    const buttonDiv = document.createElement("div");
    const Buttoncerrar = document.createElement("button");
    const bienvenida = document.createElement("p");
    const imagen = document.createElement("img");
    const contenido = document.createElement("textarea");
    const botonPublicar = document.createElement("button");
    const postdiv = document.createElement("div");
   
  
    Buttoncerrar.textContent = "Cerrar sesion";
    imagen.src = "./img/logo.jfif";
    bienvenida.textContent = " cuentanos acerca de tu mascota ";
    botonPublicar.textContent = "Publicar";
    
  
    botonPublicar.addEventListener("click", () => {
      const correo = usuarioActual();
      if (!correo) {
        alert("debes iniciar seccion");
        onNavigate("/login");
      } else {
        publicar(correo, contenido.value)
          .then(() => {
              contenido.value = ""
            alert("publicacion  guardada");
            
          })
          .catch(() => {
            alert("error de publicacion");
          });
      }
    });
  
    HomeDiv.appendChild(imagen);
    HomeDiv.appendChild(buttonDiv);
    buttonDiv.appendChild(Buttoncerrar);   
    HomeDiv.appendChild(bienvenida);
    HomeDiv.appendChild(contenido);
    HomeDiv.appendChild(botonPublicar);
    HomeDiv.appendChild(postdiv);
    
    Buttoncerrar.className = "botonC";
    imagen.className = "imagenhome1";
    bienvenida.className = "bienvenida1";
    botonPublicar.className = "botonPublicar1";
    contenido.className = "contenido1";
    contenido.id = "contenido";
    buttonDiv.className = "botones";
    
  
    const postData = (collection) => {
      postdiv.innerHTML = " ";
      collection.docs.forEach((element) => {
        const datapost = element.data();
        const postElement = document.createElement("p");
        postElement.className = "card";
        postElement.textContent = datapost.correo  + " : " + datapost.texto;
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "btnEliminar";
  
        botonEliminar.addEventListener("click", () => {
          eliminar(element.id);
        });
        const botoneditar = document.createElement("button");
        botoneditar.className = "edit";
        botoneditar.textContent = "Editar";
        botoneditar.addEventListener("click", () => {
          editarpost(element.id);
        });
        postdiv.appendChild(postElement);
        postElement.appendChild(botonEliminar);
        /*postElement.appendChild(botoneditar);*/
      });
    };
    listenPost(postData);



    
    Buttoncerrar.addEventListener("click",()=>{
      
          onNavigate('/')
         

       })
    return HomeDiv;
  };
  