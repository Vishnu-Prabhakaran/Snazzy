import React from "react";
import { SignInPageComponent, SignInButtonsComponent } from "./sign-in.styles";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";


class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    //destructure the state
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      //if that suceeds then clear the state
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInPageComponent>
        <h2> I already have an account</h2>
        <span> Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <SignInButtonsComponent>
            <CustomButton type="submit">sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {" "}
              Sign in with Google{" "}
            </CustomButton>
          </SignInButtonsComponent>
        </form>
      </SignInPageComponent>
    );
  }
}

export default SignIn;
