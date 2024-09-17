import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0Gx0wAqSVcZXEDPZ2qTwpacF66UWJOd8",
  authDomain: "react-todo-e7866.firebaseapp.com",
  projectId: "react-todo-e7866",
  storageBucket: "react-todo-e7866.appspot.com",
  messagingSenderId: "153967204888",
  appId: "1:153967204888:web:53171ec5517e02e89ec16d",
  measurementId: "G-WG1JSYBGVG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
