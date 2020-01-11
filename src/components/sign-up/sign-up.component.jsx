import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { SignUpComponent, SignUpTitleComponent } from "./sign-up.styles";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  //handlers
  handleSubmit = async event => {
    //prevent default action
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    //if password dont match return
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    try {
      //on sucessful creation, user will also be signed into the application
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      //when await finishes, this set sate initial state where everything is empty to rest the form
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  //handle Change
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignUpComponent>
        <SignUpTitleComponent> I do not have an account</SignUpTitleComponent>
        <span> Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit"> SIGN UP</CustomButton>
        </form>
      </SignUpComponent>
    );
  }
}

export default SignUp;
