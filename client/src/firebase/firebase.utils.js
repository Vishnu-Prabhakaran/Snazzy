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
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  // Create the collection using the collection key
  const collectionRef = firestore.collection(collectionKey);
  //console.log(collectionRef);

  // firestore batch - is a way of grouping all objects together and bathing it to the firestore.
  // incase it was not fully transferred then nothing will be on the database -so it will be error free from partial data
  const batch = firestore.batch();
  // Loop through the collection
  objectsToAdd.forEach(obj => {
    // create a new doc with a random id
    const newDocRef = collectionRef.doc();
    //console.log(newDocRef);
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

// getting shop values from the firebase

export const convertCollectionSnapShotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    //console.log(collections);
    return {
      // With encodeUri, you can pass in any string and it will return a string with characters which a url cannot process.
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  // console.log(`Transformed Collection ${transformedCollection}`)
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

// Session to get the user signed in or signed out
// Promise will resolve the correct user if there is one, else it will return null
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
