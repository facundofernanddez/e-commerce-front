import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navigator = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link className="m-2" to="/">
              Home
            </Link>
            <Link className="m-2" to="/login">
              Login
            </Link>
            <Link className="m-2" to="/registration">
              Registration
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
