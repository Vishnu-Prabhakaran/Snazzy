import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB38tS7icvcyZX1vbMm4YeH6gPnbz0fg7Y",
    authDomain: "snazzy-db-4799f.firebaseapp.com",
    databaseURL: "https://snazzy-db-4799f.firebaseio.com",
    projectId: "snazzy-db-4799f",
    storageBucket: "snazzy-db-4799f.appspot.com",
    messagingSenderId: "662700141333",
    appId: "1:662700141333:web:da144bc5a31a30a7f7171c",
    measurementId: "G-LV3WTEKZ71"
  };


  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;