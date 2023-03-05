import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaEnvelope, FaLocationArrow } from 'react-icons/fa';
import Image1 from '../assets/image1.jpg';

const Projects = () => {
    return (
        <div className="projects d-flex align-items-center">
            <Container>
                <Row>
                    <Col lg={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Image1} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Image1} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button as={Link} to="https://www.linkedin.com/in/limber-martinez-0b5b1b1b9/" target="_blank" rel="noreferrer">
                                    <FaEnvelope />
                                </Button>
                                <Button as={Link} to="https://www.linkedin.com/in/limber-martinez-0b5b1b1b9/" target="_blank" rel="noreferrer">
                                    <FaLocationArrow />
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Image1} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button as={Link} to="https://www.linkedin.com/in/limber-martinez-0b5b1b1b9/" target="_blank" rel="noreferrer">
                                    <FaEnvelope />
                                </Button>
                                <Button as={Link} to="https://www.linkedin.com/in/limber-martinez-0b5b1b1b9/" target="_blank" rel="noreferrer">
                                    <FaLocationArrow />
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Projects;
