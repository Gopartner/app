// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ9spxAek0lMAAiLxZoF18AVUvpH9lxrw",
  authDomain: "private-chat-e8cd5.firebaseapp.com",
  databaseURL: "https://private-chat-e8cd5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "private-chat-e8cd5",
  storageBucket: "private-chat-e8cd5.appspot.com",
  messagingSenderId: "216623299101",
  appId: "1:216623299101:web:e06281c313354e2ed964f4",
  measurementId: "G-1GKBZ4WTYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
