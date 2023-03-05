import { Container } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaLocationArrow } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='container'>
            <footer className="footer">
                <Container>
                    <div className="contact-icons">
                        <a as={Link} to="tel:555-555-5555">
                            <FaPhone />
                        </a>
                        <a as={Link} to="mailto:info@example.com">
                            <FaEnvelope />
                        </a>
                        <a as={Link} to="https://goo.gl/maps/example">
                            <FaLocationArrow />
                        </a>
                    </div>
                </Container>
            </footer>
        </div>
    );
}

export default Footer;

