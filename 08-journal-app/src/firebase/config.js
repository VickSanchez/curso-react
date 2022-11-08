// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY2xSbItbMbFivM853WQkPaG0Byrk74uE",
  authDomain: "react-cursos-fb141.firebaseapp.com",
  projectId: "react-cursos-fb141",
  storageBucket: "react-cursos-fb141.appspot.com",
  messagingSenderId: "659449592904",
  appId: "1:659449592904:web:47611e3974dbfdadd2ac7d",
  measurementId: "G-V7TDFXZ1M4"
};

// Initialize Firebase

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )

