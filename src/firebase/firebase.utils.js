import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//firebase
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

//storing user to the database firestore

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if null, then exist the function
  if (!userAuth) return;

  //console.log(firestore.doc('user/123knkldvndkv'))
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);

  //if snapshot exists
  if (!snapShot.exists) {
    //create displayname and emailfrom userAuth firebase to firestore
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

// Takes a collection key and the objects we want to add in which can be ina an array
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  // Create the collection using the collection key
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  // firestore batch - is a way of grouping all objects together and bathing it to the firestore.
  // incase it was not fully transferred then nothing will be on the database -so it will be error free from partial data
  const batch = firestore.batch();
  // Loop through the collection
  objectsToAdd.forEach(obj => {
    // create a new doc with a random id
    const newDocRef = collectionRef.doc();
    console.log(newDocRef);
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
