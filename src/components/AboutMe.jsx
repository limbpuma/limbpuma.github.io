import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image1 from '../assets/image1.jpg';

const AboutMe = () => {
    return (
        <div className="container text-center aboutme-right">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                                <div className="card">
                                    <img src={Image1} className="card-img-top" alt="imgage-about" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src={Image1} className="card-img-top" alt="imgage-about" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src={Image1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src={Image1} className="card-img-top" alt="imgage-about" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="card aboutme-right">
                            <img src={Image1} className="card-img-top" alt="imgage-about" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a to="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;
