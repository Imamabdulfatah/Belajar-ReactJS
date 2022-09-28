 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";
// import {getAnalytics} from "firebase/analytics";
// import 'firebase/auth';
// import 'firebase/firestore';
// import initializeApp from 'firebase';

/// docs firebase authentification
// - https://firebase.google.com/docs/auth/?authuser=0&hl=en

/// pake const jika pake getAnalytics
var firebaseConfig = {
  apiKey: "AIzaSyDjQh0m5Ft2VHAzCa5zagPL4e2cs7_tKE8",
  authDomain: "simple-notes-firebase-27bd5.firebaseapp.com",
  databaseURL: "https://simple-notes-firebase-27bd5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "simple-notes-firebase-27bd5",
  storageBucket: "simple-notes-firebase-27bd5.appspot.com",
  messagingSenderId: "713696484761",
  appId: "1:713696484761:web:e779a2947d70ffb8514708",
  measurementId: "G-SD2Y1X1JTC"
};

/// firebase 2
// var firebaseConfig = {
//   apiKey: "AIzaSyBLa9QrH0ScpfgivmrFYHlsAVDQwCUtcbo",
//   authDomain: "simple-notes-firebase-71395.firebaseapp.com",
//   databaseURL: "https://simple-notes-firebase-71395-default-rtdb.firebaseio.com",
//   projectId: "simple-notes-firebase-71395",
//   storageBucket: "simple-notes-firebase-71395.appspot.com",
//   messagingSenderId: "669491888467",
//   appId: "1:669491888467:web:4303025be086ad8ba321a6",
//   measurementId: "G-MP3D8YQPKR"
// };

// KM0WWj1u7PuxjlxEiJJzRMRaIsyKXFeClWChTVBO

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// untuk database
export const database = getDatabase(app);

export default app;