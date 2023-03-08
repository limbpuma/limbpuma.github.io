import React from 'react';
import { Card } from 'react-bootstrap';

const TitleSection = ({ title, subTitle }) => {
  return (
    <Card className='border-1' style={{ background: 'transparent' }}>
      <Card.Body className='text-center'>
        <Card.Title className='section-title'>
          <h1>{title}</h1>
        </Card.Title>
        <Card.Text className='section-subtitle mb-2 text-muted'>
        <h5><span>{subTitle}</span></h5>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TitleSection;

  