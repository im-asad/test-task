import styled from 'styled-components';

export const ListPageContainer = styled.div`
  text-align: right;
  margin: 40px auto;
  width: 400px;
`;

export const ItemsContainer = styled.div`
  margin-top: 20px;
  background: #FFFFFF;
  text-align: left;
  padding: 20px;
  border-radius: 4px;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #CCE2FF;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:first-child {
    padding-top: 0;
  }
`;