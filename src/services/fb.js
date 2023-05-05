// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyC5BGQ5jwcKPYcDi-W9KrZ5uCqartoVVeA",

  authDomain: "trinitario-cafe.firebaseapp.com",

  projectId: "trinitario-cafe",

  storageBucket: "trinitario-cafe.appspot.com",

  messagingSenderId: "371363205422",

  appId: "1:371363205422:web:b51a70ea93e16cb15e6abf"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

// Export your app, storage, db, and auth objects
export { app, storage, db, auth };