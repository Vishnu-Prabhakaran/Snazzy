import React from "react";
import { CartIconComponent, ItemCountComponent } from "./cart-icon.styles";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// Get Cart item Counts from Catch
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

// Step 2 {toggleCartHidden}
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconComponent onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <ItemCountComponent> {itemCount}</ItemCountComponent>
  </CartIconComponent>
);

// Redux
// Step 1
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

// Displaying the total qty from Cache
// const mapStateToProps = state => ({
// itemCount: selectCartItemsCount(state)
// });

// Displaying the total qty from Cache with createStructuredSelector
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
