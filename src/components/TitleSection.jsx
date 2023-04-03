import React from 'react';
import { Card } from 'react-bootstrap';

const TitleSection = ({ title, subtitle }) => {
  return (
    <div>
      <Card.Body className='container-title-section text-center'>
        <Card.Title className='section-title mb-4'>
          {title}
        </Card.Title>
        <Card.Text className='section-subtitle mb-2 text-muted'>
        <span>{subtitle}</span>
        </Card.Text>
      </Card.Body>
    </div>
  );
};

export default TitleSection;

  