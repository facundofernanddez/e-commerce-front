import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navigator = ({ logged }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="m-2 text-white" to="/">
            Home
          </Link>
          <Link className="m-2 text-white" to="/login">
            Login
          </Link>
          <Link className="m-2 text-white" to="/registration">
            Registration
          </Link>
          {logged && (
            <Link className="m-2 text-white" to="/logout">
              Logout
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};
