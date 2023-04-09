import { useEffect } from "react";
import axios from "axios";

export const Registration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;

    console.log(firstName, lastName, email, password);

    axios
      .post("http://localhost:8080/registration", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
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
