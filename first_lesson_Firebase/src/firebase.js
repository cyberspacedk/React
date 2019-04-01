import firebase from 'firebase';
import 'firebase/auth'

 
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDUt5Ns7qmAziDkK5qLqeI1d2dB3RE-Wb0",
    authDomain: "first-flight-2f130.firebaseapp.com",
    databaseURL: "https://first-flight-2f130.firebaseio.com",
    projectId: "first-flight-2f130",
    storageBucket: "first-flight-2f130.appspot.com",
    messagingSenderId: "712654646387"
  };

  firebase.initializeApp(config); 

export const database = firebase.database();
export const auth = firebase.auth(); 
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export default firebase;

