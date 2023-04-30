import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUsers } from "../../redux/operation";
import { toggleFollowing, updateUsers } from "../../redux/usersSlice";
import {
  selectUsers,
  selectIsLoading,
  selectError,
} from "../../redux/selectors";
import { CardsList } from "../../components/CardsList/CardsList";
import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container";
import { ButtonMain } from "../../components/Button/Button";
import { NoDataContainer } from "./TweetsPage.styled";

const TweetsPage = () => {
  const [filterCards, setFilterCards] = useState([]);
  const [filter, setFilter] = useState("");

  const usersCards = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    // if (!usersCards || usersCards.length === 0) {
      dispatch(fetchUsers({ page: 1 }));
      // setFilterCards(usersCards);
    // }
  }, [dispatch, usersCards]);

  useEffect(() => {
    ((option) => {
      switch (option) {
        case "follow":
          const followCards = usersCards.filter((card) => !card.isFollowing);
          setFilterCards(followCards);
          break;
        case "followings":
          const followingsCards = usersCards.filter((card) => card.isFollowing);
          setFilterCards(followingsCards);
          break;

        default:
          setFilterCards(usersCards);
          break;
      }
    })(filter);
  }, [filter, usersCards]);

  const handleButtonClick = (id) => {
    dispatch(toggleFollowing(id));
  };

  const changeFilter = (option) => {
    setFilter(option);
  };

  return (
    <>
      <Header changeFilter={changeFilter}></Header>
      <Container>
        {filterCards && filterCards.length > 0 ? (
          <CardsList usersCards={filterCards} onClick={handleButtonClick} />
        ) : (
          <NoDataContainer>No users card..</NoDataContainer>
        )}
        <ButtonMain marginBottom={46}>load more</ButtonMain>
      </Container>
    </>
  );
};

export default TweetsPage;
