import React from 'react';
import { Form, Container } from 'react-bootstrap';
import { titleSection, contactMe } from '../data';
import TitleSection from './TitleSection';



const Contact = () => {
     // Acceder a los datos
  const { formLabelText, formExampleText} = contactMe[0];

    return (
        <div className="container-contact">
            <div className='container-title-section'>
          {titleSection.slice(0, 1).map((link) => (
            <div className='' key={link.id}>
              <TitleSection {...link} />
            </div>
          ))}
        </div>
        <Container className="container-contact-form text-center w-75">
            <div className="mb-3">
                <Form.Label htmlFor="exampleFormControlInput1" className="form-label">{formLabelText}</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <Form.Label htmlFor="exampleFormControlTextarea1" className="form-label">{formExampleText}</Form.Label>
                <Form.Control as="textarea" rows={3} id="exampleFormControlTextarea1" />
            </div>
        </Container>
        </div>
    );
}

export default Contact;
