// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGaASb6cSdsyuJTLPjAtMb8U0AGzQwMPw",
  authDomain: "ecommerce-c7537.firebaseapp.com",
  projectId: "ecommerce-c7537",
  storageBucket: "ecommerce-c7537.appspot.com",
  messagingSenderId: "780203626519",
  appId: "1:780203626519:web:d44e18e5f6e26b69eb8c52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}