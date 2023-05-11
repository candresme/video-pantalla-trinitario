// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyCfP4VcbVb1GxoSmfjFTFVS0PzjNPSsQ3M",

  authDomain: "trinitario-v2.firebaseapp.com",

  projectId: "trinitario-v2",

  storageBucket: "trinitario-v2.appspot.com",

  messagingSenderId: "700875973219",

  appId: "1:700875973219:web:ae4552dede8362fba90e56"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

// Export your app, storage, db, and auth objects
export { app, storage, db, auth };