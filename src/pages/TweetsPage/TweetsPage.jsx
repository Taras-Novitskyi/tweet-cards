import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

import { fetchUsers } from "../../redux/operation";
import { toggleFollowing, updateTotal } from "../../redux/usersSlice";
import {
  selectUsers,
  selectIsLoading,
  selectError,
  selectUsersFollowers,
  selectCountUsers,
} from "../../redux/selectors";
import { CardsList } from "../../components/CardsList/CardsList";
import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container";
import { ButtonMain } from "../../components/Button/Button";
import { NoDataContainer } from "./TweetsPage.styled";
import { fetchCards } from "../../ApiService/fetchCards";
import { makeSmoothScroll } from "../../helpers/smoothScroll";

const TweetsPage = () => {
  const [usersCards, setUsersCards] = useState([]);
  const [page, setPage] = useState(1);
  const [isShownLoadMore, setIsShownLoadMore] = useState(false);
  const [filter, setFilter] = useState(null);

  const usersFollowers = useSelector(selectUsersFollowers);
  const cards = useSelector(selectUsers);
  const totalUsers = useSelector(selectCountUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const limit = 6;
  //TODO перенести limit in env

  useEffect(() => {
    async function fetchAPI() {
      try {
        setIsShownLoadMore(false);
        const data = await fetchCards({ limit, page });

        if (data.length === 0) {
          toast.error("Sorry, no more cards..");
          dispatch(updateTotal(usersCards.length));
          return;
        }

        if (page !== 1) {
          setUsersCards((state) => [...state, ...data]);

          if (
            data.length === limit &&
            !(totalUsers && usersCards.length + data.length === totalUsers)
          ) {
            setIsShownLoadMore(true);
          }

          setTimeout(() => {
            makeSmoothScroll();
          }, 300);
          return;
        }
        setUsersCards(data);
        setIsShownLoadMore(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAPI();
  }, [dispatch, page]);

  useEffect(() => {
    if (filter) {
      switch (filter) {
        case "follow":
          const followCards = cards.filter(
            (card) => !usersFollowers.includes(card.id)
          );
          setUsersCards(followCards);
          break;
        case "followings":
          const followingsCards = cards.filter((card) =>
            usersFollowers.includes(card.id)
          );
          setUsersCards(followingsCards);
          break;

        default:
          setUsersCards(cards);
          break;
      }
    }
  }, [cards, dispatch, filter, usersFollowers]);

  const handleButtonClick = (id) => {
    dispatch(toggleFollowing(id));
  };

  const changeFilter = async (option) => {
    dispatch(fetchUsers());
    switch (option) {
      case "follow":
        setFilter("follow");
        break;
      case "followings":
        setFilter("followings");
        break;
      default:
        setFilter("showAll");
        break;
    }
  };

  const onLoadMore = async () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Header changeFilter={changeFilter}></Header>
      <Container>
        {usersCards && usersCards.length > 0 ? (
          <CardsList usersCards={usersCards} onClick={handleButtonClick} />
        ) : (
          <NoDataContainer>No more users card..</NoDataContainer>
        )}
        {isShownLoadMore && !filter && (
          <ButtonMain marginBottom={46} onClick={onLoadMore}>
            load more
          </ButtonMain>
        )}
      </Container>
    </>
  );
};

export default TweetsPage;
