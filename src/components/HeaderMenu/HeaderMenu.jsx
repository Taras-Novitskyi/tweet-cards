import { useEffect, useState, useRef } from "react";
import { Container, Button, FilterList, FilterItem } from "./HeaderMenu.styled";

export const HeaderMenu = ({ changeFilter }) => {
  const [isHidden, setIsHidden] = useState(true);

  const headerMenuRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (headerMenuRef.current === headerMenuRef.target) {
        setIsHidden(true);
      }
    };

    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        setIsHidden(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleClick, true);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleClick, true);
    };
  }, []);

  const handleClickFilter = () => {
    setIsHidden((prev) => !prev);
  };

  const filterBy = (option) => {
    changeFilter(option);
    setIsHidden(true);
  };

  return (
    <Container>
      <Button onClick={handleClickFilter}>filter</Button>
      <FilterList isHidden={isHidden}>
        <FilterItem>
          <Button onClick={() => filterBy("showAll")}>show all</Button>
        </FilterItem>
        <FilterItem>
          <Button onClick={() => filterBy("follow")}>follow</Button>
        </FilterItem>
        <FilterItem>
          <Button onClick={() => filterBy("followings")}>followings</Button>
        </FilterItem>
      </FilterList>
    </Container>
  );
};
