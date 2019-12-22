import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
// connect is a higher order component of redux which lets us modify components, and pass in 2 functions
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CardDropdown from "../cart-dropdown/cart-dropdown.component";

// once you pull the value of current user and hidden from redux state to use below

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

      {//conditional to show the sign in and sign out
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

//const mapStateToProps = state => ({
//currentUser: state.user.currentUser
//});

// new way to destructure above  mapStateToProps
// from redux get the current user from user
// also hidden true or false from cart

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
