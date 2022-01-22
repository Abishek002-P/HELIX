// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

let { REACT_APP_API_KEY } = process.env;
let { REACT_APP_AUTH_DOMAIN } = process.env;
let { REACT_APP_PROJECT_ID } = process.env;
let { REACT_APP_STORAGE_BUCKET } = process.env;
let { REACT_APP_MESSAGING_SENDER_ID } = process.env;
let { REACT_APP_APP_ID } = process.env;
let { REACT_APP_MEASUREMENTID } = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUREMENTID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
