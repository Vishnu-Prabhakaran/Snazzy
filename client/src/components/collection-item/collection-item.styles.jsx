import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemComponent = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const CollectionItemImageComponent = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

export const CollectionItemButtonComponent = styled(CustomButton)`
  width: 80%;
  opacity: 0;
  position: absolute;
  top: 255px;

  &:hover {
    display: flex;
    opacity: 0.85;
  }
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const CollectionItemFooterComponent = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
export const CollectionItemNameComponent = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
export const CollectionItemPriceComponent = styled.span`
  width: 10%;
`;
