
// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// 
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD90-tlWRAl48p1f6iOIpEe8dKUwz4zX3E",
  authDomain: "careerconnect-job-listing.firebaseapp.com",
  projectId: "careerconnect-job-listing",
  storageBucket: "careerconnect-job-listing.appspot.com",
  messagingSenderId: "641650635982",
  appId: "1:641650635982:web:47163b4bc6dc14af49cc9f",
  measurementId: "G-82166MPBSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {app, db};