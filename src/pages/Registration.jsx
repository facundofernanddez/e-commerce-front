import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/user/UserSlice";

export const Registration = ({ logged }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;

    axios
      .post("http://localhost:8080/registration", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(
            setUser({
              logged: true,
              firstName: res.data.user.firstName,
              lastName: res.data.user.lastName,
              email: res.data.user.email,
            })
          );
          navigate("/home");
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      {logged && <Navigate to="/" />}
      <form className="m-4" onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type="text" name="firstName" />

        <label>Last Name</label>
        <input type="text" name="lastName" />

        <label>Email</label>
        <input type="email" placeholder="Enter email" name="email" />

        <label>Password</label>
        <input type="password" placeholder="Password" name="password" />

        <button type="submit">Register</button>
      </form>
    </>
  );
};
