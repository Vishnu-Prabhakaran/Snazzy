import React, { useState } from "react";
import { SignInPageComponent, SignInButtonsComponent } from "./sign-in.styles";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";
import { connect } from "react-redux";

// Changing class component to functional component becasue of Hooks
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  // Hooks
  // setCredentials function to set state
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  // Destructure the state
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    // Set state
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInPageComponent>
      <h2> I already have an account</h2>
      <span> Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />

        <SignInButtonsComponent>
          <CustomButton type="submit">sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </SignInButtonsComponent>
      </form>
    </SignInPageComponent>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
