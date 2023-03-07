import { Navbar, Container } from 'react-bootstrap';
import PageLinks from './PageLinks';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="/">
          Limber Martinez
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <PageLinks />
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
