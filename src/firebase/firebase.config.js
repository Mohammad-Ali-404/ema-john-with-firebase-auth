// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBStW_0Kn_KKEZ0Q5GmEJC3lNJBjeM6fyQ",
  authDomain: "ema-john-with-firebase-a-7c2e1.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-7c2e1",
  storageBucket: "ema-john-with-firebase-a-7c2e1.appspot.com",
  messagingSenderId: "238213037916",
  appId: "1:238213037916:web:fd505c186397d41393cb99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;