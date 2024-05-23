import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFyCf1Qi3SUJABea9MvUirQ2Ob6hj8eNo",
  authDomain: "boston-sports-firebase.firebaseapp.com",
  projectId: "boston-sports-firebase",
  storageBucket: "boston-sports-firebase.appspot.com",
  messagingSenderId: "181793460715",
  appId: "1:181793460715:web:69cc5ee05b4621021d89ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
