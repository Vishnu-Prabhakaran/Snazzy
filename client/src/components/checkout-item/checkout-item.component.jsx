import React from "react";

// Binding the redux
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";
import {
  CheckoutItemComponent,
  CheckoutImageContainerComponent,
  CheckoutQuantityComponent,
  CheckoutRemoveComponent,
  CheckoutArrowComponent,
  CheckoutValueComponent,
  CheckoutNameComponent
} from "./checkout-item.styles";

// Import the whole CartItem and destructure, as we need to change the QTY
export const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemComponent>
      <CheckoutImageContainerComponent>
        <img alt="item" src={imageUrl} />
      </CheckoutImageContainerComponent>
      <CheckoutNameComponent>{name}</CheckoutNameComponent>
      <CheckoutQuantityComponent>
        <CheckoutArrowComponent onClick={() => removeItem(cartItem)}>
          {" "}
          &#10094;
        </CheckoutArrowComponent>
        <CheckoutValueComponent>{quantity}</CheckoutValueComponent>
        <CheckoutArrowComponent onClick={() => addItem(cartItem)}>
          {" "}
          &#10095;{" "}
        </CheckoutArrowComponent>
      </CheckoutQuantityComponent>
      <CheckoutValueComponent>${price}</CheckoutValueComponent>
      <CheckoutRemoveComponent onClick={() => clearItem(cartItem)}>
        {" "}
        &#10005;{" "}
      </CheckoutRemoveComponent>
    </CheckoutItemComponent>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
