import { useEffect, useState, useRef } from "react";
import { Container, Button, FilterList, FilterItem } from "./HeaderMenu.styled";

export const HeaderMenu = ({ changeFilter }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const headerMenuRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        setIsShowMenu(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (headerMenuRef.current !== e.target) {
        setIsShowMenu(false);
      }
    };
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  const handleClickFilter = () => {
    setIsShowMenu((prev) => !prev);
  };

  const filterBy = (option) => {
    changeFilter(option);
    setIsShowMenu(false);
  };

  return (
    <Container>
      <Button onClick={handleClickFilter}>filter</Button>
      <FilterList isHidden={!isShowMenu} ref={headerMenuRef}>
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
