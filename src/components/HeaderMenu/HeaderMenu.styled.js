import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 160px;

  color: #ebd8ff;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 10.3108px;

  @media (min-width: 460px) {
    width: 220px;
  }
`;

export const Button = styled.button`
  height: 100%;
  width: 100%;

  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 1.4px;
  text-transform: uppercase;

  color: inherit;
  border-radius: 10.3108px;
  background-color: transparent;
  border: none;
`;

export const FilterList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding-top: 15px;
  padding-bottom: 15px;

  background-color: #ebd8ff;
  border-radius: 10.3108px;

  opacity: ${(p) => (p.isHidden ? 0 : 1)};
  pointer-events: ${(p) => (p.isHidden ? "none" : "auto")};
  z-index: 99;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const FilterItem = styled.li`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #2f0e7b;

  scale: 1;

  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.05;
  }
`;
