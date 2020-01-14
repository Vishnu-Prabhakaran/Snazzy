import React from "react";
import "./App.css";
import Header from "./components/header/header.component";

// Pages
import { Switch, Route, Redirect } from "react-router-dom";
// If you have subirectories use 'path', else use 'exact path' while using 'Route'
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

// Firebase
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments
} from "../src/firebase/firebase.utils";
// To fire one time -Firestore
import { selectCollectionsForPreview } from "./redux/shop/shop.selector";

// Using second function of connect 'Dispatch'
// Connect to update the reducer
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
// Get the user from Cache
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";

class App extends React.Component {
  // redux - sate managment -this is not required
  //constructor() {
  //super();
  //set state as null
  //this.state = {
  //currentUser: null
  //};
  //}
  // to unmount the subscription
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if userAuth is not null save it to state
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // this.props.setCurrentUser({
          // destructured props
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          //consile.log set state has to be caled as a second function to see the state
          // cannot see setstate outside
          //this.setState(
          //{currentUser: {
          //id: snapShot.id,
          //...snapShot.data()}}
          // to see the setsate, call as a second function
          //() => { console.log(this.state);}
          //);
          //console.log(this.state);
        });
        //this wont work here
        //console.log(this.state);
      }
      // else setsate to null
      setCurrentUser(userAuth);
      // collections
      addCollectionAndDocuments(
        "collections",
        collectionsArray.map(({ title, items }) => ({ title, items }))
      );
    });
  }

  // signout
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

// current user from the redux state
// const mapStateToProps = ({ user }) => ({
// currentUser: user.currentUser
// });

// Getting values form the Cache instead of the redux state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

// Null as the first argumenst as we do not need any state to props from the reducer
// Second argument with 'dspatch' property and will take a function and return an object
// The props 'mapDispatchToProps dispatches the new action to user action SET_CURRENT_USER
const mapDispatchToProps = dispatch => ({
  // Calls the function user and calls dispatch
  // What ever object passing to dispatch will be an action object tyhat it will pass it to all reducer
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
