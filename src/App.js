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

// Using second function of connect 'Dispatch'
// Connect to update the reducer
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
// Get the user from Cache
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";

class App extends React.Component {
  // To unmount the subscription
  unsubscribeFromAuth = null;

  // Signout
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
  currentUser: selectCurrentUser
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
