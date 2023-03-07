import { Nav } from 'react-bootstrap';

const PageLink = ({ link }) => {
    return (
   <Nav.Link key={link.id} to={link.href}>
      {link.text}
    </Nav.Link>
    )
  }
  export default PageLink;