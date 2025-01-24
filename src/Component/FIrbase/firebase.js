// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApc9vPsDFx-DS0fp0ek7b80jcnGEDazzo",
  authDomain: "smirok-94ef0.firebaseapp.com",
  projectId: "smirok-94ef0",
  storageBucket: "smirok-94ef0.firebasestorage.app",
  messagingSenderId: "515331243113",
  appId: "1:515331243113:web:44a931ea2bb0b7caf1b6f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
