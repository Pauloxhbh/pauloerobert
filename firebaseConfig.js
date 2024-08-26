import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6ac_EvbR9bnCl0QjHLVRIDmKE1ACS2s0",
  authDomain: "paulo-e-robert-prog-mov.firebaseapp.com",
  projectId: "paulo-e-robert-prog-mov",
  storageBucket: "paulo-e-robert-prog-mov.appspot.com",
  messagingSenderId: "964904233670",
  appId: "1:964904233670:web:d981743e2ecef9c01905c7",
  measurementId: "G-9G50GFZJ21"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Firebase Authentication and get a reference to the service
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
 

export { auth };