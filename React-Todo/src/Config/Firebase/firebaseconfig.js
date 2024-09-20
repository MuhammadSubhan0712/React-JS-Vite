import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDS5XiWpCBj1-gWprFqGa8GAsSXGev2DME",
  authDomain: "react-todo-app-4742a.firebaseapp.com",
  projectId: "react-todo-app-4742a",
  storageBucket: "react-todo-app-4742a.appspot.com",
  messagingSenderId: "885424433053",
  appId: "1:885424433053:web:8a7b47f21854c34d707174",
  measurementId: "G-GBQF5B0J8Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
