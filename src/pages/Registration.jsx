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
      .post(
        "https://e-commerce-back-production-82af.up.railway.app/registration",
        {
          firstName,
          lastName,
          email,
          password,
        }
      )
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
        <label className="form-label text-white">First Name</label>
        <input
          type="text"
          name="firstName"
          className="form-control mb-3"
          placeholder="Pedro"
        />

        <label className="form-label text-white">Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Rodriguez"
          className="form-control mb-3"
        />

        <label className="form-label text-white">Email</label>
        <input
          type="email"
          placeholder="hola@hola.com"
          name="email"
          className="form-control mb-3"
        />

        <label className="form-label text-white">Password</label>
        <input type="password" name="password" className="form-control mb-3" />

        <button className="btn btn-success" type="submit">
          Register
        </button>
      </form>
    </>
  );
};
