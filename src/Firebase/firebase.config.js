// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGVifHrPXjPjTiq0jdusSJEd4fSTjvnOM",
  authDomain: "auth-integration-private-4abb6.firebaseapp.com",
  projectId: "auth-integration-private-4abb6",
  storageBucket: "auth-integration-private-4abb6.firebasestorage.app",
  messagingSenderId: "21293722300",
  appId: "1:21293722300:web:14456b336eab99c85b3eb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;