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
// React memo to memorise components not using redux 
// By using React memo it wont re-render the whole components
export default React.memo(CartItem);
