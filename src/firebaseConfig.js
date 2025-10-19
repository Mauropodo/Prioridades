// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";

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

// Autenticación y proveedor de Google
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// 🔹 ESTA FUNCIÓN DEBE EXISTIR Y ESTAR EXPORTADA
export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("✅ Usuario logueado:", user);
    return user;
  } catch (error) {
    console.error("❌ Error en el login:", error);
    throw error;
  }
}
