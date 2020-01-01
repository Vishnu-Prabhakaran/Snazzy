import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";

// Local Storage (2) step
import { persistReducer } from "redux-persist";
// Import the type of local storage or session storage
import storage from "redux-persist/lib/storage";

// Create a new persist config object, root is the base level that we want to use the storage
const persistConfig = {
  key: "root",
  storage,
  // white list is an array containinh the string names of the reducers
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  // User is handles by firebase and ont need to persist for local storage
  user: userReducer,
  // Cart on the other hand need to be stored into the local persist
  cart: cartReducer,
  // directory redux
  directory: directoryReducer
});

// Modified version of the rootReducer with persist on top
export default persistReducer(persistConfig, rootReducer);
