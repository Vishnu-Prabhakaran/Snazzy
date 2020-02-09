import React from "react";
import {
  CartItemComponent,
  ItemDetailsComponent,
  ItemInCartComponent
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemComponent>
    <img src={imageUrl} alt="item" />
    <ItemDetailsComponent>
      <ItemInCartComponent>{name}</ItemInCartComponent>
      <ItemInCartComponent>
        {quantity} X ${price}
      </ItemInCartComponent>
    </ItemDetailsComponent>
  </CartItemComponent>
);

export default CartItem;
