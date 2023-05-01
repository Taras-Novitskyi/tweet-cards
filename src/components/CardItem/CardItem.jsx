// import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { logo, bgPicture, boy } from "../../images";
import { ButtonMain } from "../Button/Button";
import { toggleFollowing } from "../../redux/usersSlice";
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
  dataCard: { user, avatar, followers, tweets },
  isFollowing,
}) => {
  const dispatch = useDispatch();

  const addCommas = (num) =>
    isFollowing
      ? (num + 1).toLocaleString("en-US")
      : num.toLocaleString("en-US");

  const handleClickFollow = (id) => {
    dispatch(toggleFollowing(id));
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

        <Tweets>{tweets.toLocaleString("en-US")} tweets</Tweets>
        <Followers>{addCommas(followers)} followers</Followers>
        <ButtonMain
          onClick={() => handleClickFollow(id)}
          isFollowing={isFollowing}
        >
          follow
        </ButtonMain>
      </ContainerData>
    </CardContainer>
  );
};
