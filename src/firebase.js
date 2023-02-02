import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAPnaydMZ40RZwm3DiOuXaUopeqgq7EZF4",
  authDomain: "chat-development-33ad7.firebaseapp.com",
  projectId: "chat-development-33ad7",
  storageBucket: "chat-development-33ad7.appspot.com",
  messagingSenderId: "1018992132613",
  appId: "1:1018992132613:web:21f18034ad1da8fc2ed26c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore(app);