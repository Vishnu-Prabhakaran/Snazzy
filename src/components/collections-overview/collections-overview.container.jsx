import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component.jsx";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

// This is correct without using the compose library
// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))

// Using compose
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
