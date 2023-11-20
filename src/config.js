// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2h1-jzMT3KSuEb7JWpm68W01NMtlglOg",
  authDomain: "pehchan-67a77.firebaseapp.com",
  projectId: "pehchan-67a77",
  storageBucket: "pehchan-67a77.appspot.com",
  messagingSenderId: "843145309048",
  appId: "1:843145309048:web:f1030bf121abb80809f68d",
  measurementId: "G-BC0QKY9T87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const fbprovider = new FacebookAuthProvider();
export default app;
