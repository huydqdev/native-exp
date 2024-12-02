import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'native-exp-b181b.firebaseapp.com',
    databaseURL: 'https://native-exp-b181b.firebaseio.com',
    projectId: 'native-exp-b181b',
    storageBucket: 'native-exp-b181b.appspot.com',
    messagingSenderId: '468907297705',
    appId: 'app-id',
    measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
