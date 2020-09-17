import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD3zRLOabp0qJnL0mLuczmqnDTU-JXGtic",
  authDomain: "travel-guru-9d4de.firebaseapp.com",
  databaseURL: "https://travel-guru-9d4de.firebaseio.com",
  projectId: "travel-guru-9d4de",
  storageBucket: "travel-guru-9d4de.appspot.com",
  messagingSenderId: "809665145226",
  appId: "1:809665145226:web:c38c5f2129c063b4054073",
});

const appAuth = firebase.auth();

export default appAuth;
