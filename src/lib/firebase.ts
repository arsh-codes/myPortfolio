import { getFirestore } from "firebase/firestore";
// src/lib/firebase.ts
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgvVAVvuIR65iZntPa5w-XT2Spjdxm7e0",
  authDomain: "arsh-codes.firebaseapp.com",
  projectId: "arsh-codes",
  storageBucket: "arsh-codes.firebasestorage.app",
  messagingSenderId: "280993582156",
  appId: "1:280993582156:web:51efc530fa6adfaad578e9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
