import React from "react";
import {
  MenuItemComponent,
  MenuItemContentComponent,
  MenuItemBgImageComponent,
  MenuItemTitleComponent,
  MenuItemSubTitleComponent
} from "./menu-item.styles";

//higher order component
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <MenuItemComponent
    size={size}
    onClick={() =>
      history.push(
        `${match.url}${linkUrl}`
        // console.log(`${match.url}${linkUrl}`)
      )
    }
  >
    <MenuItemBgImageComponent
      className="background-image"
      imageUrl={imageUrl}
    />
    <MenuItemContentComponent>
      <MenuItemTitleComponent> {title.toUpperCase()}</MenuItemTitleComponent>
      <MenuItemSubTitleComponent> SHOP NOW</MenuItemSubTitleComponent>
    </MenuItemContentComponent>
  </MenuItemComponent>
);

export default withRouter(MenuItem);
