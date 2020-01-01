import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

// Local Storage (1) step
import {persistStore} from 'redux-persist';

const middlewares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Call the persistStore and pass in the store
export const persistor = persistStore(store);

//export default {store, persistor};
