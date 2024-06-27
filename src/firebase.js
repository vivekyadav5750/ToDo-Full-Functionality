// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAu57SglAnwsZzY4IuVS3-73tsIPr6DiA8",
    authDomain: "todo-df458.firebaseapp.com",
    projectId: "todo-df458",
    storageBucket: "todo-df458.appspot.com",
    messagingSenderId: "640332962877",
    appId: "1:640332962877:web:3caae02b4be3e555169e54"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app); 

export default app;
export { db, auth}