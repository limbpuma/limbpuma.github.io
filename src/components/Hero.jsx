import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { socialLinks } from '../data';
import SocialLink from './SocialLinks';
import '../styles/styles.css';
import heroBackground from '../assets/hero-background.jpg';

const Hero = () => {
  return (
    <div className='container-hero'>
    <Card bg="dark" text="white" className="">
      <Card.Img src={heroBackground} />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center text-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>
          <small>Last updated 3 mins ago</small>
        </Card.Text>
        <div className="d-flex justify-content-center align-items-center">
          {socialLinks.slice(0, 3).map((link) => (
            <ul key={link.id}>
              <SocialLink {...link} />
            </ul>
          ))}
        </div>
      </Card.ImgOverlay>
    </Card>
    </div>
  );
};

export default Hero;
