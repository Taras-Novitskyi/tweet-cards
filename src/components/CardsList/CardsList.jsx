import { CardItem } from "../CardItem/CardItem";
import { List, Item } from './CardsList.styled';


export const CardsList = ({ usersCards, onClick }) => {

  return (
    <>
      {usersCards.length > 0 && (
        <List>
          {usersCards.map(({ id, ...dataCard }) => {
            return (
              <Item key={id}>
                <CardItem id={id} dataCard={dataCard} onClick={onClick} />
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
};
