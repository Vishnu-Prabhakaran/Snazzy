import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderComponent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
// Used Link from another component
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// Including the common CSS styles
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
