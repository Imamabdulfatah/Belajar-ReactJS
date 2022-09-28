 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {initializeApp} from "firebase/app";
// import {getAnalytics} from "firebase/analytics";
// import 'firebase/auth';
// import 'firebase/firestore';
// import initializeApp from 'firebase';

/// pake const jiak pake getAnalytics
var firebaseConfig = {
  apiKey: "AIzaSyDjQh0m5Ft2VHAzCa5zagPL4e2cs7_tKE8",
  authDomain: "simple-notes-firebase-27bd5.firebaseapp.com",
  projectId: "simple-notes-firebase-27bd5",
  storageBucket: "simple-notes-firebase-27bd5.appspot.com",
  messagingSenderId: "713696484761",
  appId: "1:713696484761:web:e779a2947d70ffb8514708",
  measurementId: "G-SD2Y1X1JTC"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;