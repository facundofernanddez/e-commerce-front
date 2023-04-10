export const Login = () => {
  const handleSubmit = () => {
    const handleSubmit = (e) => {
      e.preventDefault();

      const email = e.target.email.value;
      const password = e.target.password.value;
    };
  };

  return (
    <>
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
