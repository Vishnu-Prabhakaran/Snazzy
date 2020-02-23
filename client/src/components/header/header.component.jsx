import React from "react";
// Styled-Component
import {
  HeaderComponent,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  LogoText
} from "./header.styles";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CardDropdown from "../cart-dropdown/cart-dropdown.component";

// Connect is a higher order component of redux which lets us modify components, and pass in 2 functions
import { connect } from "react-redux";
// createStructuredSelector - to pass state ima structured way
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";

// Once you pull the value of current user and hidden from redux state to use below

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderComponent>
    <LogoContainer to="/">
      <Logo className="logo" />
      <LogoText> SNAZZY</LogoText>
    </LogoContainer>
      
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>

      {// Conditional to show the sign in and sign out
      currentUser ? (
        <OptionLink to="/" as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>

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

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
