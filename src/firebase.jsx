
import { initializeApp } from "firebase/app";
import{ getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA9ConltDNGpHjXLEC6OvNyPUVTR7sCSO4",
    authDomain: "marvel-store-b6104.firebaseapp.com",
    projectId: "marvel-store-b6104",
    storageBucket: "marvel-store-b6104.appspot.com",
    messagingSenderId: "777403282631",
    appId: "1:777403282631:web:d7f7c04629d45e08703ae2",
    measurementId: "G-21RSR8T03Q"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const db = getFirestore(app);