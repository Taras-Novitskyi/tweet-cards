// import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { logo, bgPicture, boy } from "../../images";
import { ButtonMain } from "../Button/Button";
import {
  CardContainer,
  ContainerLogo,
  ContainerImgBg,
  ContainerData,
  ContainerPhoto,
  Line,
  UserPhoto,
  Tweets,
  Followers,
} from "./CardItem.styled";

export const CardItem = ({
  id,
  dataCard: { user, avatar, followers, tweets, isFollowing },
  onClick,
}) => {
  const addCommas = (num) => {
    return num.toLocaleString("en-US");
  };

  return (
    <CardContainer>
      <ContainerLogo>
        <img src={logo} alt="logo" />
      </ContainerLogo>
      <ContainerImgBg>
        <img src={bgPicture} alt="bgPicture" />
      </ContainerImgBg>

      <ContainerData>
        <Line />
        <ContainerPhoto>
          <UserPhoto src={avatar} alt={user} />
        </ContainerPhoto>

        <Tweets>{addCommas(tweets)} tweets</Tweets>
        <Followers>{addCommas(followers)} followers</Followers>
        <ButtonMain onClick={() => onClick(id)} isFollowing={isFollowing}>
          follow
        </ButtonMain>
      </ContainerData>
    </CardContainer>
  );
};

// CardItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
// };
