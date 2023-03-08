import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { socialLinks } from '../data';
import SocialLink from './SocialLinks';
import '../styles/styles.css';
import heroBackground from '../assets/hero-background.jpg';

const Hero = () => {
  return (
    <div className='container-hero d-flex flex-column align-items-center'>
      <Card bg="dark" text="white" className="w-100">
        <Card.Img src={heroBackground} className="hero-img w-100" />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center text-center">
          <Card.Title className="text-center"><h1>Card title</h1></Card.Title>
          <Card.Text>
            <h4 className="text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h4>
          </Card.Text>
          <Card.Text>
            <small>Last updated 3 mins ago</small>
          </Card.Text>
          <div className="d-flex">
            {socialLinks.slice(0, 3).map((link) => (
              <div className='' key={link.id}>
                <SocialLink {...link} />
              </div>
            ))}
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Hero;
