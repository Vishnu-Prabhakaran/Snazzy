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

// Get the user from Cache
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";

// check user session
import { checkUserSession } from "./redux/user/user.actions";

class App extends React.Component {
  // To unmount the subscription
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
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

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
