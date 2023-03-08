import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { socialLinks, heroSection } from '../data';
import SocialLink from './SocialLinks';

const Hero = () => {
  // Acceder a los datos
  const { title, subTitle, image, smallText } = heroSection[0];


  return (
    <div className='container-hero d-flex flex-column align-items-center'>
      <Card bg="dark" text="white" className="w-100">
        <Card.Img src={image} className="hero-img w-100" />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center text-center">
          <Card.Title className="text-center"><h1>{title}</h1></Card.Title>
          <Card.Text>
            <h4 className="text-center">{subTitle}</h4>
          </Card.Text>
          <Card.Text>
            <small>{smallText}</small>
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
