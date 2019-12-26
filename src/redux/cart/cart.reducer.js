import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        // change to the opposite
        hidden: !state.hidden
      };
      //cartitems
      case CartActionTypes.ADD_ITEM:
        return{
          ...state,
          //load the old state and modify it to add the payload
          cartItems:[...state.cartItems, action.payload]
        }
    default:
      return state;
  }
};

export default CartReducer;
