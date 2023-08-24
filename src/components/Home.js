//import { onNavigate } from "../main.js";

import {
  publicar,
  usuarioActual,
  listenPost,
  eliminar,
  editarpost,
} from "../lib/firebese";
import { async } from "regenerator-runtime";
export const Home = (onNavigate) => {
  const HomeDiv = document.createElement("div");
  const buttonDiv = document.createElement("div");
  const ButtonRegister = document.createElement("button");
  const buttonlogin = document.createElement("button");
  const bienvenida = document.createElement("p");
  const imagen = document.createElement("img");
  const contenido = document.createElement("textarea");
  const botonPublicar = document.createElement("button");
  const postdiv = document.createElement("div");
  const imagendiv = document.createElement("div");
  const imagendec = document.createElement("img");

  ButtonRegister.textContent = "Registrate";
  buttonlogin.textContent = "Iniciar sesión";
  imagen.src = "./img/logo.jfif";
  bienvenida.textContent = " cuentanos acerca de tu mascota ";
  botonPublicar.textContent = "Publicar";
  imagendec.src =
    "./img/retrato-nina-feliz-tomando-selfie-perro-parque-abrazando-mascota-sosteniendo-camara_662046-2181.avif";

  ButtonRegister.addEventListener("click", () => onNavigate("/register"));
  buttonlogin.addEventListener("click", () => onNavigate("/login"));

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
  buttonDiv.appendChild(ButtonRegister);
  buttonDiv.appendChild(buttonlogin);
  HomeDiv.appendChild(bienvenida);
  HomeDiv.appendChild(contenido);
  HomeDiv.appendChild(botonPublicar);
  HomeDiv.appendChild(postdiv);
  HomeDiv.appendChild(imagendiv);
  imagendiv.appendChild(imagendec);

  ButtonRegister.className = "botonr";
  buttonlogin.className = "botonl";
  imagen.className = "imagenhome";
  bienvenida.className = "bienvenida";
  botonPublicar.className = "botonPublicar";
  contenido.className = "contenido";
  contenido.id = "contenido";
  buttonDiv.className = "botones";
  imagendiv.className = "imagendiv";
  imagendec.className = "imagendec";

  const postData = (collection) => {
    postdiv.innerHTML = " ";
    collection.docs.forEach((element) => {
      const datapost = element.data();
      const postElement = document.createElement("p");
      postElement.className = "card";
      postElement.textContent = datapost.correo + " : " + datapost.texto;
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
  return HomeDiv;
};
