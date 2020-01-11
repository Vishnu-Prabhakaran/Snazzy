import styled, { css } from "styled-components";

const CheckoutComponentsDetails = css`
  width: 23%;
`;

export const CheckoutItemComponent = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const CheckoutImageContainerComponent = styled.div`
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
  ${CheckoutComponentsDetails}
`;

export const CheckoutQuantityComponent = styled.div`
  display: flex;
  ${CheckoutComponentsDetails}
`;

export const CheckoutRemoveComponent = styled.div`
  padding-left: 20px;
  cursor: pointer;
  color: red;
`;

export const CheckoutArrowComponent = styled.div`
  cursor: pointer;
  ${CheckoutComponentsDetails}
`;
export const CheckoutValueComponent = styled.span`
  margin: 0 10px;
  ${CheckoutComponentsDetails}
`;

export const CheckoutNameComponent = styled.span`
  ${CheckoutComponentsDetails}
`;
