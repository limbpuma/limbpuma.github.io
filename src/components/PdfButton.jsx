import React from 'react';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';

const PDFButton = ({ pdfText }) => {
  const { i18n } = useTranslation();

  const getPdfLinkByLanguage = () => {
    const pdfLinks = {
      en: 'https://drive.google.com/file/d/1-zFTNo7oRMLv0Y5oBhigak_GER2oTUM2/view?usp=sharing',
      es: 'https://drive.google.com/file/d/1CtPVYOB9Zqo84E7NFfQhQyd9ussuA_87/view?usp=sharing',
      de: 'https://drive.google.com/file/d/1pLKyo3pRzGjpC9KRnAKoTtpEKOfans9A/view?usp=sharing',
    };

    return pdfLinks[i18n.language] || pdfLinks.en;
  };

  const pdfLink = getPdfLinkByLanguage();

  return (
    <div className='d-flex justify-content-center'>
      <Button href={pdfLink} target="_blank" rel="noopener noreferrer" variant="primary" className="me-2 btn-custom">
        <p className='mb-0 p-1'>{pdfText}</p>
      </Button>
      {/*
      <Button href={pdfLink} target="_blank" download variant="secondary">
        Descargar PDF
      </Button>
      */}
    </div>
  );
};

export default PDFButton;
