import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUsers } from "../../redux/operation";
import { fetchCards } from "../../ApiService/fetchCards";
import { makeSmoothScroll } from "../../helpers/smoothScroll";
import { toggleFollowing, updateError } from "../../redux/usersSlice";
import {
  selectUsers,
  selectIsLoading,
  selectError,
  selectUsersFollowers,
} from "../../redux/selectors";

import { CardsList } from "../../components/CardsList/CardsList";
import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container";
import { ButtonMain } from "../../components/Button/Button";
import { Loader } from "../../components/Loader/Loader";
import { NoDataContainer } from "./TweetsPage.styled";

const TweetsPage = () => {
  const [usersCards, setUsersCards] = useState([]);
  const [page, setPage] = useState(1);
  const [isShownLoadMore, setIsShownLoadMore] = useState(false);
  const [filter, setFilter] = useState(null);
  const [noMoreCards, setNoMoreCards] = useState(false);
  const [isLoadMoreLoading, setIsLoadMoreLoading] = useState(false);

  const usersFollowers = useSelector(selectUsersFollowers);
  const cards = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const limit = 6;

  useEffect(() => {
    async function fetchAPI() {
      try {
        setIsLoadMoreLoading(true);
        const data = await fetchCards({ limit, page });

        if (!data) {
          dispatch(updateError(data));
          return;
        }

        if (data.length === 0) {
          setNoMoreCards(true);
          return;
        }

        if (page !== 1) {
          setUsersCards((state) => [...state, ...data]);

          if (data.length === limit) {
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
        dispatch(updateError(error));
      } finally {
        setIsLoadMoreLoading(false);
      }
    }
    fetchAPI();
  }, [dispatch, page]);

  useEffect(() => {
    setNoMoreCards(false);
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
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {error ? (
              <NoDataContainer>
                We are sorry, but something is wrong, please try again.
              </NoDataContainer>
            ) : (
              <>
                {(!usersCards || usersCards.length === 0) &&
                  !isLoadMoreLoading && (
                    <NoDataContainer>{`Sorry, your ${filter} list is empty.`}</NoDataContainer>
                  )}
                <CardsList
                  usersCards={usersCards}
                  onClick={handleButtonClick}
                />
                {noMoreCards && (
                  <NoDataContainer>
                    Sorry, no more cards were found
                  </NoDataContainer>
                )}
                {isShownLoadMore && !filter && !noMoreCards && (
                  <ButtonMain
                    marginBottom={0}
                    onClick={onLoadMore}
                    disabled={isLoadMoreLoading}
                  >
                    load more
                  </ButtonMain>
                )}
              </>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default TweetsPage;
