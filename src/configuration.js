// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your Firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyBiLAfg96lZnFPBa3Ysh_wcXKl-GdG5lJA",
  authDomain: "atunportfolio-31743.firebaseapp.com",
  projectId: "atunportfolio-31743",
  storageBucket: "atunportfolio-31743.firebasestorage.app",
  messagingSenderId: "805859253065",
  appId: "1:805859253065:web:3807f283131bfa2eb19898",
};

// Initialize Firebase
const cong = initializeApp(firebaseConfig);

export const db = getFirestore(cong);
