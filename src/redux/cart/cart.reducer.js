import CartActionTypes from "./cart.types";
import { addItemToCart , removeItemFromCart} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        // Change to the opposite
        hidden: !state.hidden
      };
    // cartitems
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        // Load the old state and modify it to add the payload
        // CartItems:[...state.cartItems, action.payload]
        // Newcode to incude the utils to remove duplicates
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

      // Removes Item from the cart 
      case CartActionTypes.REMOVE_ITEM: 
      return {
        ...state,
        // using Cart Utils
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
      // Delete items from the cart
      case CartActionTypes.CLEAR_ITEM_FROM_CART:
        return{
          ...state,
          // Call the existing cartitems in our array and use filter functiom
          cartItems: state.cartItems.filter(
            // If the cartitem id does not match the itemn we are trying to filter then return true
            // Which means keep eevrytjhing which we are tryinhg to remove
            cartItem => cartItem.id !== action.payload.id
          )
        }
    default:
      return state;
  }
};

export default cartReducer;
