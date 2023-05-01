import styled from "styled-components";

export const ButtonUp = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 50px;

  font-family: "Montserrat";
  font-size: 30px;
  color: #ebd8ff;
  background-color: transparent;
  border: 4px solid #ebd8ff;
  border-radius: 50%;

  opacity: ${(p) => (p.isButtonUp ? 1 : 0)};
  pointer-events: ${(p) => (p.isButtonUp ? "auto" : "none")};

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #373737;
    scale: 1.05;
    border: 4px solid transparent;
    background-color: #ebd8ff;
  }

  &:active,
  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media (min-width: 768px) {
    bottom: 100px;
    right: 50px;
    height: 70px;
    width: 70px;
    font-size: 50px;
    bottom: 100px;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  margin-bottom: ${(p) => p.marginBottom}px;

  width: 196px;
  height: 50px;

  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

  color: #373737;
  background-color: ${(p) => (p.isFollowing ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 10.3108px;
  border: none;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.05;
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.5);
  }
`;
