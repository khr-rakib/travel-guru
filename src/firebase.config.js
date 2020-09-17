import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // update your credientials
});

const appAuth = firebase.auth();

export default appAuth;
