import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  hidden: true
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        // change to the opposite
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default CartReducer;
