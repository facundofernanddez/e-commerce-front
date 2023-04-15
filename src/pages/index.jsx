import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Index = ({ logged }) => {
  return (
    <>
      {logged && <Navigate to="/home" />}
      <h1>Soy el index</h1>
    </>
  );
};
