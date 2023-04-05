import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navigator = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/register">Register</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
