import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/database";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "native-exp-b181b.firebaseapp.com",
    projectId: "native-exp-b181b",
    storageBucket: "native-exp-b181b.firebasestorage.app",
    messagingSenderId: "468907297705",
    appId: "1:468907297705:web:7086d6cfdb8647c9e852b8",
    measurementId: "G-D9Y8JSNP2N"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const ANALYTICS = getAnalytics(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);



// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
