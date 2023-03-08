import { Navbar, Container } from 'react-bootstrap';
import PageLinks from './PageLinks';

const MyNavbar = () => {
  return (
    <Navbar className='container-nabvar' expand="lg">
      <Container>
        <Navbar.Brand to="/">
          Limber Martinez
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <PageLinks />
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
