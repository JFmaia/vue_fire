// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8rT2R3oR2tfInbEXRfLuK6OV6GSsgUqg",
  authDomain: "vue-fire-e49a1.firebaseapp.com",
  projectId: "vue-fire-e49a1",
  storageBucket: "vue-fire-e49a1.appspot.com",
  messagingSenderId: "2541074820",
  appId: "1:2541074820:web:adcc8e9ef5d5cbdc8305d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const storage = getStorage(app);

export {storage};