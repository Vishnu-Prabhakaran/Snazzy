import styled from 'styled-components';

export const CollectionPageComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitleComponent = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItemsComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & .collection-item {
    margin-bottom: 30px;
  }
  
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;
