// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/compact/app";
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwY07UA1iWKRji8OaoHweVsQPlm2pilxM",
    authDomain: "odysseyfilm-ca6e0.firebaseapp.com",
    projectId: "odysseyfilm-ca6e0",
    storageBucket: "odysseyfilm-ca6e0.appspot.com",
    messagingSenderId: "421187598544",
    appId: "1:421187598544:web:bec0b78d60adfa2b5a86d5",
    measurementId: "G-9Y5GE4C03D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const getFirestore = () => firebase.firestore()
