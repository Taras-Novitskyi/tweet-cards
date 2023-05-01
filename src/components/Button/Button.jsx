import { ButtonUp, Button} from "./Button.styled";

export const ButtonScrollUp = ({
  type = "button",
  onClick,
  children,
  isButtonUp,
  disabled=false
}) => {
  return (
    <ButtonUp
      type={type}
      onClick={onClick}
      isButtonUp={isButtonUp}
      disabled={disabled}
    >
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
