// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmDP-8rv6uOdlCpT4fpwtpJQF3A3RPY90",
  authDomain: "ideaflow-251ee.firebaseapp.com",
  projectId: "ideaflow-251ee",
  storageBucket: "ideaflow-251ee.firebasestorage.app",
  messagingSenderId: "901337232425",
  appId: "1:901337232425:web:fdefdf7e6b730e9a4f1838",
  measurementId: "G-5167J747MX"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Servicios que vas a usar
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
