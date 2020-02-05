// If we need to fire multiple sagas
import { all, call } from "redux-saga/effects";
import { fetchCollectionStart } from "./shop/shop.sagas";

export default function* rootSaga() {
  // 'all' makes running the multiple saagas all at the same time else the generator function runs only one yield at a time
  yield all([call(fetchCollectionStart)]);
}
