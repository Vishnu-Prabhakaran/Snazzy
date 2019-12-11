// reducer is a function that get 2 properties (state, action)
// 1) current state or previous state and 2) an action

// set a inital state value
const INITIAL_STATE = {
  currentUser: null
};

//ES6 you can assign a value to the function (state = INITIAL_STATE)

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};
export default userReducer;
