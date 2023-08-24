// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, deleteDoc , onSnapshot,doc, getDoc,query, orderBy} from "firebase/firestore";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQD0I1EV9HkmDhnNbdFFPABkXp6zT2_Ag",
  authDomain: "red-social-mascotas.firebaseapp.com",
  projectId: "red-social-mascotas",
  storageBucket: "red-social-mascotas.appspot.com",
  messagingSenderId: "989201632287",
  appId: "1:989201632287:web:cf5a49066894997101d92a",
  measurementId: "G-EGS0HPJDZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const registro = (email, password)=>{
 return createUserWithEmailAndPassword(auth, email, password)
  
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    return user
  })
  /*.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return errorCode
  });*/
  
}
 export const login =(email, password)=>{
  return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    return user
  })
  /*.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

  });*/

 }
 export const publicar=(correo,texto)=> {
  return  addDoc(collection(db, "post"), {
    correo: correo,
    texto: texto,
    fecha: new Date(),
  });
 }
  export const usuarioActual= ()=>{ 
    if (!auth.currentUser){
    return undefined
    }
    return auth.currentUser.email
  }
  
/*const q = query(citiesRef, orderBy("name"), limit(3));
const q = query(collection(db, "cities"), where("state", "==", "CA"));*/
export const listenPost = (callback)=>{
  const filter = query(collection(db,"post" ),orderBy("fecha","desc"))
  onSnapshot(filter, (docs) => {
    callback(docs);
    
  });
}

export const eliminar= id=>{
  deleteDoc(doc(db, "post", id));
}
export const editarpost= id=>{
  getDoc(doc(db, "post",id));
}




  