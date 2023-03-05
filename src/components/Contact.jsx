import React from 'react';
import { Row, Col, Button, Card, Navbar, Form, Container } from 'react-bootstrap';


const Contact = () => {
    return (
        <Container className="text-center">
            <div className="mb-3">
                <Form.Label htmlFor="exampleFormControlInput1" className="form-label">Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <Form.Label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} id="exampleFormControlTextarea1" />
            </div>
        </Container>
    );
}

export default Contact;
