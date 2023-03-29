import { Navbar, Nav } from 'react-bootstrap';

const NavLinks = ({ href, text }) => {
  return (
    <Navbar.Collapse className="basic-navbar-nav d-flex justify-content-end">
    <Nav className="navbar-link p-2">
    <Nav.Link to={href}>
      {text}
    </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  )
}
export default NavLinks;