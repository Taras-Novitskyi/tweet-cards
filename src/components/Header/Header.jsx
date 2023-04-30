import { useNavigate } from "react-router-dom";

import {HeaderMenu } from "../HeaderMenu/HeaderMenu";
import { StyleHeader, BackButton } from "./Header.styled";

export const Header = ({ changeFilter }) => {
  const navigate = useNavigate();

  return (
    <StyleHeader>
      <BackButton onClick={() => navigate("/")}>&lt;</BackButton>
      <HeaderMenu changeFilter={changeFilter} />
    </StyleHeader>
  );
};
