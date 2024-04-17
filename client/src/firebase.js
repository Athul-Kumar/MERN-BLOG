// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4c693.firebaseapp.com",
  projectId: "mern-blog-4c693",
  storageBucket: "mern-blog-4c693.appspot.com",
  messagingSenderId: "994409564949",
  appId: "1:994409564949:web:8768f4c1be69ec033e771c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

