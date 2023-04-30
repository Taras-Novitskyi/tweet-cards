import styled from "styled-components";

export const StyleHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 80px;
  margin-bottom: 26px;
  background-color: #2f0e7b;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  //   width: 380px;
  //   height: 460px;

  //   list-style: none;

  //   background: linear-gradient(
  //     114.99deg,
  //     #471ca9 -0.99%,
  //     #5736a3 54.28%,
  //     #4b2a99 78.99%
  //   );
    // box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  //   border-radius: 20px;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translateY(-50%);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  font-family: "Montserrat";
  font-weight: 600;
  font-size: 40px;

  color: #ebd8ff;
  background-color: transparent;
  border: none;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    scale: 1.05;
  }
`;
