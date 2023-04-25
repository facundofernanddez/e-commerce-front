import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
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
        <label className="form-label text-white">Email</label>
        <input type="email" placeholder="hola@hola.com" name="email" className="form-control mb-3"/>

        <label className="form-label text-white">Password</label>
        <input type="password" name="password" className="form-control mb-3"/>

        <button className="btn btn-success mt-2" type="submit">
          Login
        </button>

        <button className="btn btn-primary mt-2 mx-2" variant="primary">
          <Link to="/registration" className="text-white">Register</Link>
        </button>
      </form>
    </>
  );
};
