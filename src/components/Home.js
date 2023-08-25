//import { onNavigate } from "../main.js";

import {
  
  listenPost
 
 
} from "../lib/firebase";
import { async } from "regenerator-runtime";
export const Home = (onNavigate) => {
  const HomeDiv = document.createElement("div");
  const buttonDiv = document.createElement("div");
  const ButtonRegister = document.createElement("button");
  const buttonlogin = document.createElement("button");
  const bienvenida = document.createElement("p");
  const imagen = document.createElement("img"); 
  const postdiv = document.createElement("div");
  ButtonRegister.textContent = "Registrate";
  buttonlogin.textContent = "Iniciar sesión";
  imagen.src = "./img/logo.jfif";
  bienvenida.textContent = " BIENVENIDO  A TIKPET  ";    

  ButtonRegister.addEventListener("click", () => onNavigate("/register"));
  buttonlogin.addEventListener("click", () => onNavigate("/login"));

 
  HomeDiv.appendChild(imagen);
  HomeDiv.appendChild(buttonDiv);
  buttonDiv.appendChild(ButtonRegister);
  buttonDiv.appendChild(buttonlogin);
  HomeDiv.appendChild(bienvenida);
  HomeDiv.appendChild(postdiv);
  

  ButtonRegister.className = "botonr";
  buttonlogin.className = "botonl";
  imagen.className = "imagenhome";
  bienvenida.className = "bienvenida";
  
  

  const postData = (collection) => {
    
    collection.docs.forEach((element) => {
      const datapost = element.data();
      const postElement = document.createElement("p");
      postElement.className = "card";
      postElement.textContent = datapost.correo + " : " + datapost.texto;     
      postdiv.appendChild(postElement);
      
    });
  };
  listenPost(postData);
  return HomeDiv;
};
