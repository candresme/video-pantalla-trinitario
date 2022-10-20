// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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

const analytics = getAnalytics(app);