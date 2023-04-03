import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import { Form, Container } from 'react-bootstrap';

import TitleSection from './TitleSection';

const Contact = () => {
  const form = useRef();
  const { t } = useTranslation();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_ox1732a', 'template_qo78qrd', e.target, 'W2uVMjlR6dxvYWNzU')
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);
        e.target.reset();
        setTimeout(() => {
          setMessageSent(false);
        }, 5000);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="container-fluid container-contact align-items-center">
      <div className="contact-title-section">
        <TitleSection title={t('titleSection.2.title')} subtitle={t('titleSection.2.subtitle')} />
      </div>
      <Container className="container-contact-form text-center">
        <Form ref={form} onSubmit={sendEmail}>
          <div className="contact-form-label-input mb-5">
            <Form.Label htmlFor="exampleFormControlInput1" className="contact-form">
              <h3>{t('contactSection.formName')}</h3>
            </Form.Label>
            <Form.Control type="text" placeholder={t('contactSection.formNamePlaceholder')} name="user_name" className="contact-form-label" required />
            <Form.Label htmlFor="exampleFormControlInput1" className="contact-form">
              <h3>{t('contactSection.formEmail')}</h3>
            </Form.Label>
            <Form.Control type="email" placeholder="name@example.com" name="user_email" className="contact-form-label" required />
          </div>
          <div className="form-labetl-text mb-3">
            <Form.Label htmlFor="exampleFormControlTextarea1" className="form-label">
              <h3>{t('contactSection.formText')}</h3>
            </Form.Label>
            <Form.Control as="textarea" rows={3} placeholder={t('contactSection.formTextArea')} id="exampleFormControlTextarea1" name="message" className="contact-label-textarea" required />
            <button type="submit" className="btn btn-custom mt-5 w-50" value="Send">
              {messageSent ? t('contactSection.MessageSent') : t('contactSection.Submit')}
            </button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
