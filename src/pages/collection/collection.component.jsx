import React from "react";
import {
  CollectionPageComponent,
  CollectionTitleComponent,
  CollectionItemsComponent
} from "./collection.styles";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";

const CollectionPage = ({ collection }) => {
  //console.log(`collection - ${collection}`)
  const { title, items } = collection;
  return (
    <CollectionPageComponent>
      <CollectionTitleComponent>{title}</CollectionTitleComponent>
      <CollectionItemsComponent>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsComponent>
    </CollectionPageComponent>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
