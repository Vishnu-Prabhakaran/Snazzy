import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

// Local Storage (1) step
import { persistStore } from "redux-persist";

// If the node enviormengt is production then no logger
// Else if it is in development logger enabled
const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Call the persistStore and pass in the store
export const persistor = persistStore(store);

//export default {store, persistor};
