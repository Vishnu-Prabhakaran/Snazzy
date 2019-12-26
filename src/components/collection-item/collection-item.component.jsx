import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({item, addItem }) => {
  // destructuring from items
  const { name, price, imageUrl } = item;
  return(
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="collection-footer">
      <span className="name"> {name}</span>
      <span className="price"> {price}</span>
    </div>
    <CustomButton onClick={()=>addItem(item)} inverted> Add to Cart </CustomButton>
  </div>
)};

// creating the function that is a prop called addItem that goes into the Collection item
const mapDispatchToProps = dispatch => ({
//whenever is add item, it will get an 'item' as the property of this function that represents
//of the addItem props that got passed in
//and then  it dispaqtch the addtem() action creator passing the 'item' in.
  addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);
