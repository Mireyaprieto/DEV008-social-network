// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);