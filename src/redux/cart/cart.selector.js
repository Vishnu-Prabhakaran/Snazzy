import { createSelector } from "reselect";

// input selector - return a slice of the state
const selectCart = state => state.cart;

//output selector

export const selectCartItems = createSelector(
  //returns a collection of input selector
  [selectCart],
  // second value is a function that returns thee value of the inputselector
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
