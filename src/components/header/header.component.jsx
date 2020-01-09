import React from "react";
// Styled-Component
import { HeaderComponent, LogoContainer, OptionLink, OptionDiv } from "./header.styles";

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
  <HeaderComponent>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionDiv>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/shop">
        CONTACT
      </OptionLink>

      {// Conditional to show the sign in and sign out
      currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionDiv>

    {hidden ? null : <CardDropdown />}
  </HeaderComponent>
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
