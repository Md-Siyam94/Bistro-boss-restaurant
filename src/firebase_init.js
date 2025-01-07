// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:import.meta.env.VITE_apiKey,
  // authDomain:import.meta.env.VITE_authDomain,
  // projectId:import.meta.env.VITE_projectId,
  // storageBucket:import.meta.env.VITE_storageBucket,
  // messagingSenderId:import.meta.env.VITE_messagingSenderId,
  // appId:import.meta.env.VITE_appId,
  apiKey: "AIzaSyCX_KqEXzOm_tqguCakxuL08Qz8r73G1rM",
  authDomain: "final-project-183a8.firebaseapp.com",
  projectId: "final-project-183a8",
  storageBucket: "final-project-183a8.firebasestorage.app",
  messagingSenderId: "655733108807",
  appId: "1:655733108807:web:63595a5f4b7705f419c162"
  
  // VITE_apiKey= "AIzaSyCX_KqEXzOm_tqguCakxuL08Qz8r73G1rM"
  // VITE_authDomain= "final-project-183a8.firebaseapp.com"
  // VITE_projectId= "final-project-183a8"
  // VITE_storageBucket= "final-project-183a8.firebasestorage.app"
  // VITE_messagingSenderId= "655733108807"
  // VITE_appId= "1:655733108807:web:63595a5f4b7705f419c162"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
 
export default auth