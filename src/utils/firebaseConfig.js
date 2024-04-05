// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOKhnB7OOXCFcyKFXXgE2wPLscAFdpIAw",
  authDomain: "netflixgpt-c328d.firebaseapp.com",
  projectId: "netflixgpt-c328d",
  storageBucket: "netflixgpt-c328d.appspot.com",
  messagingSenderId: "644138138000",
  appId: "1:644138138000:web:881238d71d0dd0378f9b15",
  measurementId: "G-E1HXLXQPF0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);
export const auth = getAuth();
