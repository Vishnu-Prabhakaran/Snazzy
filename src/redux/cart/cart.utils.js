//addItemsToCart takes 2 arguments
//1 the existing cartItems that are in the array right now
//2nd will be the cartItem that we want to add
export const addItemToCart = (cartItems, cartItemToAdd) => {
  //cartItems.find() - will return the first item found in the array based on the condition we pass in
  // condition is - we get each indidvidual cartItem and we check cartItems ID  and if it matches to cartItemToAdd
  // if nothing found it will be undefined
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    //if exists //cartItem.map will returns new array
    return cartItems.map(cartItem =>
      // if its the same id then add the qty +1
      //else retrun the original state
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // if non of them returns anythinhg form 'existingCartItem' then retrun the orignal items array
  // And add in a new object with default base value 1

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
