import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

// AddItem is a function that gets the 'item' that we want to added to the array and returns the new action type object 
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

// Removes items from the cart
export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
