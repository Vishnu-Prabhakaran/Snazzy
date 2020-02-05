// takeEvery - listens for every types of actions that we pass it
import { takeEvery, call, put } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionSnapShotToMap
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsSucess,
  fetchCollectionsFailure
} from "./shop.actions";

// Generator function
// All generator functions must have yield in them
// It will pause when ever the specific type of action comes in
export function* fetchCollectionsAsync() {
  //yield console.log("I am fired");

  try {
    // collections is what we stored on the firebase
    const collectionRef = firestore.collection("collections");
    // similar to async await, we need to use a generator funtion
    const snapshot = yield collectionRef.get();
    // call is the code inside the genratyor function that invokes the method
    const collectionsMap = yield call(convertCollectionSnapShotToMap, snapshot);
    // Sagas do not dispatch actions instead they use 'put'
    yield put(fetchCollectionsSucess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
  // Using Promises
  // collectionRef
  //   .get()
  //   .then(snapshot => {
  //     const collectionsMap = convertCollectionSnapShotToMap(snapshot);
  //     //console.log(collectionsMap);
  //     dispatch(fetchCollectionsSucess(collectionsMap));
  //   })
  //   .catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionStart() {
  // The second parameter is another generatior function which will run in response to takeEvery() listner
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
