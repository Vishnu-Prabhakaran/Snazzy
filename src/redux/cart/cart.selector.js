import { createSelector } from "reselect";

// Input selector - return a slice of the state
const selectCart = state => state.cart;

// Output selector
export const selectCartItems = createSelector(
  // Returns a collection of input selector
  [selectCart],
  // Second value is a function that returns thee value of the inputselector
  cart => cart.cartItems
);

// To move cart.hidden value into Cache
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

// To get the total QTY in the cart by using reducer()
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
