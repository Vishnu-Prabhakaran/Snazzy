import React, { useEffect } from "react";
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

// Check user session
import { checkUserSession } from "./redux/user/user.actions";

const App = ({ checkUserSession, currentUser }) => {
  // useEffect is similar to componentDidMount
  useEffect(() => {
    checkUserSession();
    // [] dennotes to with call the use effect should run, else it will run endlessly
  }, [checkUserSession]);

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
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

// Getting values form the Cache instead of the redux state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
