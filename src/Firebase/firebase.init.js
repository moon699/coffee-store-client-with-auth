// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkF2FCqV8IL5X4fGXOz7Tg6d3orGTVWSQ",
  authDomain: "coffee-store-30dd4.firebaseapp.com",
  projectId: "coffee-store-30dd4",
  storageBucket: "coffee-store-30dd4.firebasestorage.app",
  messagingSenderId: "934824930873",
  appId: "1:934824930873:web:380cd9e827abd01b0a27e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
