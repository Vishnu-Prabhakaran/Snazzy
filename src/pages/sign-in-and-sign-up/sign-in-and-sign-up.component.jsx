import React from "react";
import { SignInAndSignUpComponent } from "./sign-in-and-sign-up.styles";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <SignInAndSignUpComponent>
    <SignIn />
    <SignUp />
  </SignInAndSignUpComponent>
);
export default SignInAndSignUpPage;
