// import { initializeApp } from "firebase/compact/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { firebaseConfig } from "./keys";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const getFirestore = () => firebase.firestore()


