import styled, { css } from "styled-components";

const LargeStyle = css`
  height: 380px;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

// Function to check the condition bsed on the Props
const getPropStyles = props => {
  if (props === "Large") {
    return LargeStyle;
    
  }
};

export const MenuItemComponent = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 07.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
  ${getPropStyles}
`;

export const MenuItemBgImageComponent = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const MenuItemContentComponent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const MenuItemTitleComponent = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const MenuItemSubTitleComponent = styled.span`
  font-weight: lighter;
  margin-bottom: 6px;
  font-size: 16px;
  color: #4a4a4a;
`;
