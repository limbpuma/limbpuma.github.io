import { pageLinks } from '../data';
import { Navbar, Nav } from 'react-bootstrap';
import PageLink from './PageLink';

const PageLinks = ({ itemClass }) => {
  return (
    <Navbar.Collapse className="basic-navbar-nav d-flex justify-content-end">
    <Nav className="navbar-link p-2">
    {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemClass} />
      })}
    </Nav>
  </Navbar.Collapse>
  )
}
export default PageLinks;