import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { ButtonScrollUp } from "../Button/Button";

export const SharedLayout = () => {
  const [isButtonUp, setIsButtonUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setIsButtonUp(true);
        return;
      }
      setIsButtonUp(false);
    });
  }, []);

  const handleOnScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Suspense>
        <Outlet />
      </Suspense>
      <ButtonScrollUp isButtonUp={isButtonUp} onClick={handleOnScrollUp}>
        ^
      </ButtonScrollUp>
    </>
  );
};
