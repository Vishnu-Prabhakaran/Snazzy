// To fire multiple Sagas
import { all, call } from "redux-saga/effects";
// Shop Saga
import { shopSagas } from "./shop/shop.sagas";
// User Saga
import { userSagas } from "./user/user-saga";
// Cart Saga
import { cartSagas } from "./cart/cart-sagas";

export default function* rootSaga() {
  // 'all' makes running the multiple saagas all at the same time else the generator function runs only one yield at a time
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
