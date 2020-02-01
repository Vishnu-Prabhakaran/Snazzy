import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionSnapShotToMap
} from "../../firebase/firebase.utils";

// Function that returns a function
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSucess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    // collections is what we stored on the firebase
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    // Using Promises
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionSnapShotToMap(snapshot);
        //console.log(collectionsMap);
        dispatch(fetchCollectionsSucess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
