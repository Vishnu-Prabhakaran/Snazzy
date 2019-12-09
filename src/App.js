import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {
  auth,
  createUserProfileDocument
} from "../src/firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    //set state as null
    this.state = {
      currentUser: null
    };
  }
  // to unmount the subscription
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if userAuth is not null save it to state
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          //consile.log set state has to be caled as a second function to see the state
          // cannot see setstate outside
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            }
            // to see the setsate, call as a second function
            //() => { console.log(this.state);}
          );
          console.log(this.state);
        });
        //this wont work here
        //console.log(this.state);
      }
      // else setsate to null
      this.setState({ currentUser: userAuth });
    });
  }

  // signout
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndSignUpPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
