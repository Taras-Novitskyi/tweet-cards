import styled from "styled-components";

export const HeroImage = styled.div`
  position: relative;

  height: 400px;
  width: 100%;

  margin-bottom: 26px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 12px;

  font-size: 28px;
  font-weight: 600;
  color: #5736a3;
`;

export const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 24px;

  font-size: 22px;
  font-weight: 500;
  color: #5736a3;
`;
