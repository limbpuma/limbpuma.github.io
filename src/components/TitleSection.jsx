import React from 'react';
import { Card } from 'react-bootstrap';

const TitleSection = ({ title, subTitle }) => {
  return (
    <Card className='border-0'>
      <Card.Body className='text-center'>
        <Card.Title className='section-title'>
          {title}
        </Card.Title>
        <Card.Text className='section-subtitle mb-2 text-muted'>
        <p><span>{subTitle}</span></p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TitleSection;

  