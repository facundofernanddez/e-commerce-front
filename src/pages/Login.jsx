import axios from "axios";
import { useEffect, useRef } from "react";

export const Login = () => {
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailToLogin = email.current.value;
    const passwordToLogin = password.current.value;

    axios
      .post("http://localhost:8080/login", {
        email: emailToLogin,
        password: passwordToLogin,
      })
      .then((res) => {
        console.log(res.data.user);
      });
  };

  return (
    <>
      <form className="m-4" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" placeholder="Enter email" ref={email} />

        <label>Password</label>
        <input type="password" placeholder="Password" ref={password} />

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
