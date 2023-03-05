import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaLocationArrow } from 'react-icons/fa';
import heroBackground from '../assets/hero-background.jpg'

const Hero = () => {
    return (
        <div className="hero d-flex align-items-center"
            style={{ backgroundImage: `url(${heroBackground})` }}>
            <Container>
                <Row>
                    <Col lg={6}>
                        <h1>Hero Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam obcaecati modi magni optio est nesciunt corrupti nemo officiis facere error voluptates iste nisi molestias, doloremque incidunt laboriosam sequi suscipit nam.</p>
                    </Col>
                    <Col lg={6}>
                        <div className='contact-icons'>
                            <a href="https://www.linkedin.com/in/limber-martinez-0b5b1b1b9/" target="_blank" rel="noreferrer">
                                <FaPhone />
                            </a>
                            <a href="mailto:your-email@example.com" target="_blank" rel="noreferrer">
                                <FaEnvelope />
                            </a>
                            <a href="#" target="_blank" rel="noreferrer">
                                <FaLocationArrow />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;
