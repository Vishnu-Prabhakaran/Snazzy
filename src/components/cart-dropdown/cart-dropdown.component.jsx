import React from "react";
import {
  CartDropDownItemComponent,
  CartDopDownComponent
} from "./cart-dropdown.styles";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";

// To access the history by wrapping everything into a higher order component
import { withRouter } from "react-router-dom";

// Get Cart items from Catch
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDopDownComponent>
    <CartDropDownItemComponent>
      {// If the cart is empty display message
      cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </CartDropDownItemComponent>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      {" "}
      GO TO CHECKOUT{" "}
    </CustomButton>
  </CartDopDownComponent>
);

// Bringing the cartItems from the cache
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

// export default connect(mapStateToProps)(CartDropdown);

// By using withrouter now the components have access to the props, in this case 'history'
export default withRouter(connect(mapStateToProps)(CartDropdown));
