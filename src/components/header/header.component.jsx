import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CardDropdown from "../cart-dropdown/cart-dropdown.component";
// Firebase
import { auth } from "../../firebase/firebase.utils";
// Connect is a higher order component of redux which lets us modify components, and pass in 2 functions
import { connect } from "react-redux";
// createStructuredSelector - to pass state ima structured way
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

// Once you pull the value of current user and hidden from redux state to use below

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>

      {// Conditional to show the sign in and sign out
      currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>

    {hidden ? null : <CardDropdown />}
  </div>
);

// const mapStateToProps = state => ({
// currentUser: state.user.currentUser
//});

// A new way to destructure above  mapStateToProps
// From redux get the current user from user
// Also hidden true or false from cart

// Normal way without using createStructuredSelector - correct but its repetitive
// const mapStateToProps = (state) => ({
// currentUser: selectCartHidden(state),
// hidden: selectCurrentUser(state)
// });

// Using createStructuredSelector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
