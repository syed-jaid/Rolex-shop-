// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjjzc0OvbPk6_APsajyh8rSsbYxV3XUCw",
    authDomain: "rolex-watch-shop.firebaseapp.com",
    projectId: "rolex-watch-shop",
    storageBucket: "rolex-watch-shop.appspot.com",
    messagingSenderId: "540655227335",
    appId: "1:540655227335:web:fb806f26719fdcf77209e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;