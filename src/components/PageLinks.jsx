import { pageLinks } from '../data';
import { Navbar, Nav } from 'react-bootstrap';
import PageLink from './PageLink';

const PageLinks = ({ itemClass }) => {
  return (
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
    {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemClass} />
      })}
    </Nav>
  </Navbar.Collapse>
  )
}
export default PageLinks;