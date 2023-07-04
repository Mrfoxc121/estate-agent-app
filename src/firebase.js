

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgv7iNRTHors-XVRJNXgJnICkZj4BFJAA",
  authDomain: "realtorclonepractice.firebaseapp.com",
  projectId: "realtorclonepractice",
  storageBucket: "realtorclonepractice.appspot.com",
  messagingSenderId: "604671854297",
  appId: "1:604671854297:web:9788711e208771279e60c8"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()