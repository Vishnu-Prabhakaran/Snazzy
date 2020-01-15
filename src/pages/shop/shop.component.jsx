import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionSnapShotToMap
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

// Get the store values from firebase
class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    // collections is what we stored on the firebase
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapShotToMap(snapshot);
      //console.log(collectionsMap);
      updateCollections(collectionsMap);
      //console.log(snapshot)
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});
export default connect(null, mapDispatchToProps)(ShopPage);
