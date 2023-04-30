import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: end;
  justify-content: center;

  width: 380px;
  height: 460px;

  list-style: none;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const ContainerLogo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const ContainerImgBg = styled.div`
  position: absolute;
  top: 28px;
  right: 50%;
  transform: translateX(50%);

  width: 308px;
  height: 168px;
`;

export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 36px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const ContainerPhoto = styled.div`
  position: absolute;
  top: 218px;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80px;
  height: 80px;

  object-fit: caver;
  object-position: center;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  overflow: hidden;
`;

export const UserPhoto = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const Line = styled.div`
  position: absolute;
  top: 218px;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Tweets = styled.div`
  margin-bottom: 16px;
`;

export const Followers = styled.div`
  margin-bottom: 26px;
`;
