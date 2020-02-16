import styled from "styled-components";

export const SignInAndSignUpComponent = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
`;
