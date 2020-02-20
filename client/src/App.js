import React, { useEffect, lazy, Suspense } from 'react';
// Global styles
import { GlobalStyle } from './global.styles';
import Header from './components/header/header.component';

// Pages
// If you have subirectories use 'path', else use 'exact path' while using 'Route'
import { Switch, Route, Redirect } from 'react-router-dom';

// Using second function of connect 'Dispatch'
// Connect to update the reducer
import { connect } from 'react-redux';

// Get the user from Cache
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';

// Check user session
import { checkUserSession } from './redux/user/user.actions';

// Spinner
import Spinner from './components/spinner/spinner.component';

// Lazy loading - It works with suspense to load the default value till the actual page loads
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const ContactPage = lazy(() => import('./pages/contact/contact.container'));

const App = ({ checkUserSession, currentUser }) => {
  // useEffect is similar to componentDidMount
  useEffect(() => {
    checkUserSession();
    // [] dennotes to with call the use effect should run, else it will run endlessly
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner/>}>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
            }
          />
        </Suspense>
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
