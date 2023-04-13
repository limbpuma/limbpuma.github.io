import React from 'react';
import { Card } from 'react-bootstrap';

const TitleSection = ({ title, subtitle }) => {
  return (
    <div>
      <Card.Body className='container-title-section text-center'>
        <Card.Title className='section-title mb-4 fs-2'>
          {title}
        </Card.Title>
        <Card.Text className='section-subtitle mb-2 text-muted fw-bold fs-2'>
        {subtitle}
        </Card.Text>
      </Card.Body>
    </div>
  );
};

export default TitleSection;

  