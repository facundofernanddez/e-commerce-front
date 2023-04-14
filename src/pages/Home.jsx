import { useSelector } from "react-redux";

export const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <h1>
        Hola {user.firstName} {user.lastName}
      </h1>
    </>
  );
};
