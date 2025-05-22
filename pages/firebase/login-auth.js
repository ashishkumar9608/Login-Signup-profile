// src/firebase.js or firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB1mIyeOLArko5hJbke6DtsF2YQ5w0atRg",
  authDomain: "login-auth-654d8.firebaseapp.com",
  projectId: "login-auth-654d8",
  storageBucket: "login-auth-654d8.appspot.com",
  messagingSenderId: "346143372035",
  appId: "1:346143372035:web:e3aebd51fbac9274512f36"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
