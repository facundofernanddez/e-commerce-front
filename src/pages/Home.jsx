import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Home = ({ logged, user }) => {
  return (
    <>
      {!logged && <Navigate to="/login" />}
      <h1>
        Hola {user.firstName} {user.lastName}
      </h1>
    </>
  );
};
