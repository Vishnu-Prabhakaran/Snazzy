import  styled , {css } from "styled-components";
import { Link } from "react-router-dom";

// CSS from styled-componengs allows to write a block of CSS inside the JS
const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;
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

// Including the common CSS styles
export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;
export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
