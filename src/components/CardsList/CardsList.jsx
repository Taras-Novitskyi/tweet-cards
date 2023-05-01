import { useSelector, useDispatch } from "react-redux";
import { selectUsersFollowers } from "../../redux/selectors";

import { CardItem } from "../CardItem/CardItem";
import { List, Item } from "./CardsList.styled";

export const CardsList = ({ usersCards, onClick }) => {
  const usersFollowers = useSelector(selectUsersFollowers);
  const dispatch = useDispatch();

  const isFollowing = (id) => usersFollowers.includes(id);

  return (
    <>
      {usersCards.length > 0 && (
        <List>
          {usersCards.map(({ id, ...dataCard }) => {
            return (
              <Item key={id}>
                <CardItem
                  id={id}
                  dataCard={dataCard}
                  onClick={onClick}
                  isFollowing={isFollowing(id)}
                />
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
};
