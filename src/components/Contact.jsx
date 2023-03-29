import React from 'react';
import { Form, Container } from 'react-bootstrap';

import TitleSection from './TitleSection';
import { useTranslation } from "react-i18next";
import i18n from "../translation/i18n";


const Contact = () => {

  const { t } = useTranslation();

    return (
      <div className="container-fluid container-contact align-items-center">
      <div className="contact-title-section">
      <TitleSection title={t("titleSection.2.title")} subtitle={t("titleSection.2.subtitle")}/>
      </div>
      <Container className="container-contact-form text-center">
        <div className="mb-3">
          <Form.Label htmlFor="exampleFormControlInput1" className="contact-form">
            <h3>{t("contactSection.formLabelText")}</h3>
          </Form.Label>
          <Form.Control type="email" placeholder="name@example.com" className="contact-form-label"/>
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h3>{t("contactSection.formExampleText")}</h3>
          </Form.Label>
          <Form.Control as="textarea" rows={3} id="exampleFormControlTextarea1" className="contact-label-textarea" />
          <button type="button" className="btn btn-custom mt-5 w-50">
            {t("contactSection.Submit")}
          </button>
        </div>
      </Container>
    </div>
    );
}

export default Contact;
