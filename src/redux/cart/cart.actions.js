import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

// addItem is a function that gets the 'item' that we want to added to the array and returns the new action type object 
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})
