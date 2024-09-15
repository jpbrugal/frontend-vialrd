// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-o1CjqJIA26ZrSX0jP9NZEhsJTHzTzm8",
  authDomain: "vialrd.firebaseapp.com",
  projectId: "vialrd",
  storageBucket: "vialrd.appspot.com",
  messagingSenderId: "156340805930",
  appId: "1:156340805930:web:f3b79409255101b9d8fe53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };