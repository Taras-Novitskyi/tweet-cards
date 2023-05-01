import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 412px;
  padding-right: 16px;
  padding-left: 16px;
  padding-bottom: 36px;
  margin: 0 auto;

  @media screen and (min-width: 840px) {
    max-width: 808px;
  }

  @media screen and (min-width: 1340px) {
    max-width: 1220px;

    padding-right: 24px;
    padding-left: 24px;
    padding-bottom: 46px;
  }
`;
