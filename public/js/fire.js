import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyCUvFpHE9LQU0s4QpN4so-l3ChIYmZ63K0",
  authDomain: "your-domain-name.firebaseapp.com",
  databaseURL: "https://class-grader-inventive.firebaseio.com",
  storageBucket: "class-grader-inventive.appspot.com",
  messagingSenderId: "914871799740"
};
var fire = firebase.initializeApp(config);
export default fire;
