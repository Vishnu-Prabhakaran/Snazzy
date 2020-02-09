import React from "react";
import {
  CheckoutPageComponent,
  CheckoutHeaderComponent,
  CheckoutHeaderBlockComponent,
  CheckoutTotalComponent,
  CheckoutTestWarningComponent,
  CheckoutStripeButtonComponent
} from "./checkout.styles";
import { connect } from "react-redux";

// from Cache stored state
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageComponent>
    <CheckoutHeaderComponent>
      <CheckoutHeaderBlockComponent>
        <span>Product</span>
      </CheckoutHeaderBlockComponent>
      <CheckoutHeaderBlockComponent>
        <span>Description</span>
      </CheckoutHeaderBlockComponent>
      <CheckoutHeaderBlockComponent>
        <span>Quantity</span>
      </CheckoutHeaderBlockComponent>
      <CheckoutHeaderBlockComponent>
        <span>Price</span>
      </CheckoutHeaderBlockComponent>
      <CheckoutHeaderBlockComponent>
        <span>Remove</span>
      </CheckoutHeaderBlockComponent>
    </CheckoutHeaderComponent>

    {// Display the cartItems here
    cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <CheckoutTotalComponent>TOTAL: ${total}</CheckoutTotalComponent>
    <CheckoutTestWarningComponent>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </CheckoutTestWarningComponent>
    <CheckoutStripeButtonComponent price={total} />
  </CheckoutPageComponent>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
