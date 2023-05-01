import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: colunm;
  flex-wrap: wrap;
  gap: 16px;

  margin-bottom: 36px;

  media screen and (min-width: 1440px) {
    gap: 22px;
    margin-bottom: 46px;
  }
`;

export const Item = styled.li`
  list-style: none;
`;