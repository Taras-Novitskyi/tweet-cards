import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { socialMedia } from "../../images";
import { ButtonMain } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import {
  Title,
  Subtitle,
  HeroImage,
  Image,
  InfoContainer,
} from "./HomePage.styled";

const HomePage = () => {
  return (
    <>
      <HeroImage>
        <Image src={socialMedia} alt="" />
      </HeroImage>
      <Container>
        <InfoContainer>
          <Title>Welcome</Title>
          <Subtitle>
            now you can try one of the best things you've ever done
          </Subtitle>
          <NavLink to={"/tweets"}>
            <ButtonMain>Got it</ButtonMain>
          </NavLink>
        </InfoContainer>
      </Container>
    </>
  );
};

export default HomePage;
