import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {titleSection, socialLinks, card } from '../data';
import Card from './Card';
import SocialLink from './SocialLinks';
import TitleSection from './TitleSection';

const AboutMe = () => {
    return (

        <div className='container-aboutme'>
            <div className='container-title-section'>
          {titleSection.slice(0, 1).map((link) => (
            <div className='' key={link.id}>
              <TitleSection {...link} />
            </div>
          ))}
        </div>
            <Row className='mx-auto justify-content-center align-items-center'>
                <Col className='col-8'>
                    <div className="row row-cols-md-2 g-2 mx-auto w-75 ">
                        {card.slice(0, 4).map((link) => (
                            <div className='border' key={link.id}>
                                <Card {...link} />
                            </div>
                        ))}
                    </div>
                </Col>
                <Col className='col-4'>
                    {card.slice(3).map((link) => (
                        <div className='w-100 border' key={link.id}>
                            <Card {...link} />
                            <div className="d-flex justify-content-center">
                                {socialLinks.slice(0, 1).map((link) => (
                                    <ul key={link.id}>
                                        <SocialLink {...link} />
                                    </ul>
                                ))}
                            </div>
                        </div>
                    ))}
                </Col>
            </Row>
        </div>

    );
}

export default AboutMe;
