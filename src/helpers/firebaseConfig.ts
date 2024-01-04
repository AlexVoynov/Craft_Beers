import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdFQxSTyTHQIJvj827b8jtKRov0qyiwHQ",
  authDomain: "react-projekt-7f348.firebaseapp.com",
  projectId: "react-projekt-7f348",
  storageBucket: "react-projekt-7f348.appspot.com",
  messagingSenderId: "278789951012",
  appId: "1:278789951012:web:ab0e10fefdf016d88d52b1"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
