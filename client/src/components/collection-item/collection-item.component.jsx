import React from "react";

//import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import {
  CollectionItemComponent,
  CollectionItemImageComponent,
  CollectionItemButtonComponent,
  CollectionItemFooterComponent,
  CollectionItemNameComponent,
  CollectionItemPriceComponent
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  // destructuring from items
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemComponent>
      <CollectionItemImageComponent
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <CollectionItemFooterComponent>
        <CollectionItemNameComponent> {name}</CollectionItemNameComponent>
        <CollectionItemPriceComponent> ${price}</CollectionItemPriceComponent>
      </CollectionItemFooterComponent>
      <CollectionItemButtonComponent onClick={() => addItem(item)} inverted>
        {" "}
        Add to Cart{" "}
      </CollectionItemButtonComponent>
    </CollectionItemComponent>
  );
};

// creating the function that is a prop called addItem that goes into the Collection item
const mapDispatchToProps = dispatch => ({
  //whenever is add item, it will get an 'item' as the property of this function that represents
  //of the addItem props that got passed in
  //and then  it dispaqtch the addtem() action creator passing the 'item' in.
  addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);
