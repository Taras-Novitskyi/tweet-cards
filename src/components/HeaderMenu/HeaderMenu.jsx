import { useState } from "react";
import { Container, Button, FilterList, FilterItem } from "./HeaderMenu.styled";

export const HeaderMenu = ({ changeFilter }) => {
  const [isHidden, setIsHidden] = useState(true);
  // const [chosenFilter, setChosenFilter] = useState('');
  //TODO виділити іншим кольором активний фільтр в меню

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
