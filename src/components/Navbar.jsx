import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="/">
          Limber Martinez
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/">
              About
            </Nav.Link>
            <Nav.Link to="/">
              Projects
            </Nav.Link>
            <Nav.Link to="/">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
