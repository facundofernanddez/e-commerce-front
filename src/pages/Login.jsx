import axios from "axios";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { setUser } from "../reducers/user/UserSlice";

export const Login = ({ logged }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    axios
      .post("http://localhost:8080/login", {
        email,
        password,
      })
      .then((res) => {
        dispatch(
          setUser({
            logged: true,
            firstName: res.data.user.firstName,
            lastName: res.data.user.lastName,
            email: res.data.user.email,
          })
        );

        navigate("/home");
      });
  };

  return (
    <>
      {logged && <Navigate to="/" />}
      <form className="m-4" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" placeholder="Enter email" name="email" />

        <label>Password</label>
        <input type="password" placeholder="Password" name="password" />

        <button className="mt-2" variant="success" type="submit">
          Login
        </button>

        <button className="mt-2 mx-2" variant="primary">
          Register
        </button>
      </form>
    </>
  );
};
