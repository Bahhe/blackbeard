import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6DBspwaBT2uSXH-AK9qVxV72dbjjwYJ8",
  authDomain: "blackbeard-b03b7.firebaseapp.com",
  projectId: "blackbeard-b03b7",
  storageBucket: "blackbeard-b03b7.appspot.com",
  messagingSenderId: "1064735387069",
  appId: "1:1064735387069:web:032c8da1de1054cd9bf6d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
