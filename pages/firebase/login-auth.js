// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1mIyeOLArko5hJbke6DtsF2YQ5w0atRg",
  authDomain: "login-auth-654d8.firebaseapp.com",
  projectId: "login-auth-654d8",
  storageBucket: "login-auth-654d8.firebasestorage.app",
  messagingSenderId: "346143372035",
  appId: "1:346143372035:web:e3aebd51fbac9274512f36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;