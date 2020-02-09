import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewComponent,
  CollectionTitleComponent,
  CollectionPreviewItemComponent
} from "./collection.preview.styles";
import { withRouter } from "react-router-dom";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewComponent>
    <CollectionTitleComponent
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      {" "}
      {title.toUpperCase()}
    </CollectionTitleComponent>

    <CollectionPreviewItemComponent>
      {items
        .filter((item, idx) => idx < 4)
        //.map(({ id, ...otherItemProps }) => (<CollectionItem key={id} {...otherItemProps} />))
        // instead of separating, we take the whole 'item' and destructure it later
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </CollectionPreviewItemComponent>
  </CollectionPreviewComponent>
);
//without filter to display only 4 items
//idx  = index
//{items.map(item => (<div key={item.id}> {item.name}</div>))}

export default withRouter(CollectionPreview);
