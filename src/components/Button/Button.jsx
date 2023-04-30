import { ButtonUp, Button} from "./Button.styled";

export const ButtonScrollUp = ({
  type = "button",
  onClick,
  children,
  isButtonUp,
}) => {
  return (
    <ButtonUp type={type} onClick={onClick} isButtonUp={isButtonUp}>
      {children}
    </ButtonUp>
  );
};

export const ButtonMain = ({
  type = "button",
  onClick,
  isFollowing,
  children,
  marginBottom = 0,
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      isFollowing={isFollowing}
      marginBottom={marginBottom}
    >
      {children}
    </Button>
  );
};
