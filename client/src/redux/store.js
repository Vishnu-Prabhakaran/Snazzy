import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

// Redux Saga
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";

// Local Storage (1) step
import { persistStore } from "redux-persist";


// If the node enviorment is production then no logger
// Else if it is in development logger enabled

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Root Saga
sagaMiddleware.run(rootSaga);

// Call the persistStore and pass in the store
export const persistor = persistStore(store);

//export default {store, persistor};
