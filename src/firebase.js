import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA8hdOXn8ySU5UKkXYJik8vU4NbkfQ2xsk",
  authDomain: "chat-app-78f6c.firebaseapp.com",
  projectId: "chat-app-78f6c",
  storageBucket: "chat-app-78f6c.appspot.com",
  messagingSenderId: "948704202135",
  appId: "1:948704202135:web:e619a832c0a1f8cf4c08d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();