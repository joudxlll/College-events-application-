// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import  firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmatbLsnWffZoWCJniu_Ue2Hsl3QQ28Ys",
  authDomain: "eventsdataapp.firebaseapp.com",
  databaseURL: "https://eventsdataapp-default-rtdb.firebaseio.com",
  projectId: "eventsdataapp",
  storageBucket: "eventsdataapp.appspot.com",
  messagingSenderId: "33605151305",
  appId: "1:33605151305:web:3d3243466a77eb2d54ad98",
  measurementId: "G-50T0TE4XVR"
};

// Initialize Firebase
if (firebase.apps.length ===0) {
firebase.initializeApp (firebaseConfig);
}

const db = getDatabase();

export { db }