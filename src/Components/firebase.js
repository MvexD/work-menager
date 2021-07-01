import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyBIYKXDVuoWPBrxHWQIW2ApG8DK8jph7WU",
//   authDomain: "w-menager.firebaseapp.com",
//   projectId: "w-menager",
//   storageBucket: "w-menager.appspot.com",
//   messagingSenderId: "443504170866",
//   appId: "1:443504170866:web:574d65634783848b6eafeb",
//   measurementId: "G-WDPB3HG121",
// };

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBIYKXDVuoWPBrxHWQIW2ApG8DK8jph7WU",
  authDomain: "w-menager.firebaseapp.com",
  projectId: "w-menager",
  storageBucket: "w-menager.appspot.com",
  messagingSenderId: "443504170866",
  appId: "1:443504170866:web:574d65634783848b6eafeb",
  measurementId: "G-WDPB3HG121",
});

const db = firebaseApp.firestore();

export default db;
