// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPj_-8FKD4XtB8_m1kYWmS8F8UOBg012E",
  authDomain: "fir-auth-ab0cd.firebaseapp.com",
  projectId: "fir-auth-ab0cd",
  storageBucket: "fir-auth-ab0cd.appspot.com",
  messagingSenderId: "660794517492",
  appId: "1:660794517492:web:5475202c34308d89cbbba1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
