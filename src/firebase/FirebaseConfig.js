// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgl-OJIPgSCBSWDHlD8ww0Q_LMn0bAbUk",
  authDomain: "ecom-63e4f.firebaseapp.com",
  projectId: "ecom-63e4f",
  storageBucket: "ecom-63e4f.firebasestorage.app",
  messagingSenderId: "350881612231",
  appId: "1:350881612231:web:05f6dbab8722406481d9e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB =  getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}