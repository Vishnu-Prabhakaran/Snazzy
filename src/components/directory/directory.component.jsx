import React from "react";
import { DirectoryMenuComponent } from "./directory.styles";

import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
  // this.state.sections.map( section => (<MenuItem title={section.title} id={section.id} image={section.imageUrl} />))
  // {this.state.sections.map(({ title, imageUrl, id , size, linkUrl}) => (<MenuItem title={title} id={id} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>))}

  <DirectoryMenuComponent>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuComponent>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
