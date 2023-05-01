import { ThreeDots as Spinner } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Spinner
      height="100"
      width="100"
      radius="9"
      color="#2f0e7b"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        backgroundColor: "transparent",
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};
