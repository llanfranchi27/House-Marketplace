import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCap1qUbaNqiJtJ6RK4PFxZDBaCJAGdPnM",
  authDomain: "house-marketplace-app-ba755.firebaseapp.com",
  projectId: "house-marketplace-app-ba755",
  storageBucket: "house-marketplace-app-ba755.appspot.com",
  messagingSenderId: "460211415933",
  appId: "1:460211415933:web:85f1674735b6b4c69aba14",
  measurementId: "G-YVXBF3SXDC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const analytics = getAnalytics(app);
