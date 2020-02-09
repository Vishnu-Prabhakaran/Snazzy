import UserActionTypes from "./user.types";

// Reducer is a function that get 2 properties (state, action)
// 1) current state or previous state and 2) an action

// set a inital state value
const INITIAL_STATE = {
  currentUser: null,
  error: null
};

// ES6 you can assign a value to the function (state = INITIAL_STATE)

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // If either of these cases are successful retun
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        // Need to clear the error value once logged errors
        error: null
      };

    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };

    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
export default userReducer;
