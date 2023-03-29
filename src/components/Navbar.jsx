import { Navbar, Container, Nav } from 'react-bootstrap';
import NavLinks from './NavLinks';
import {pageLinks} from '../data';
import { useTranslation } from "react-i18next";

const MyNavbar = () => {
  const { t } = useTranslation();
  return (
    <Navbar className='container-nabvar' expand="lg">
      <Container>
        <Navbar.Brand className='logo-nav' to="/">
          Limber Martinez
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        {pageLinks.map((link) => {
        return <NavLinks  {...link} text={t(`pageLinks.${link.id}.text`)}/>
      })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
