// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBMwbuYHMx-17Lt5Igettc7EM4E47kCyUQ",

  authDomain: "trinitario-coffee.firebaseapp.com",

  projectId: "trinitario-coffee",

  storageBucket: "trinitario-coffee.appspot.com",

  messagingSenderId: "925860662535",

  appId: "1:925860662535:web:1f665279e70bfc5abdc9a2",

  measurementId: "G-JHYWS1057S"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

// Export your app, storage, db, and auth objects
export { app, storage, db, auth };