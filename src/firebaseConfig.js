// Import functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration (copy-pasted from Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyBzK3QndtieczUKv1tCcUl_cEzx3U0OjgE",
  authDomain: "anurag-6ce5a.firebaseapp.com",
  projectId: "anurag-6ce5a",
  storageBucket: "anurag-6ce5a.firebasestorage.app",
  messagingSenderId: "2894987952",
  appId: "1:2894987952:web:91def5053981f4f01e7175",
  measurementId: "G-7KH14NW1MP" // optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // important for authentication

export { auth };