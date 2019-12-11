import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {
  auth,
  createUserProfileDocument
} from "../src/firebase/firebase.utils";
// Using second function of connect 'Dispatch'
// Connect to update the reducer
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

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
    const { setCurrentUser } = this.props;

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
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage/>
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

// current user from the redux state
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

// null as the first argumenst as we do not need any state to props from the reducer
// second argument with 'dspatch' property and will take a function and return an object
// the props 'mapDispatchToProps dispatches the new action to user action SET_CURRENT_USER
const mapDispatchToProps = dispatch => ({
  // calls the function user and calls dispatch
  // what ever object passing to dispatch will be an action object tyhat it will pass it to all reducer
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
