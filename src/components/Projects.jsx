import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { card, socialLinks, titleSection } from '../data';
import TitleSection from './TitleSection';
import Card from './Card';
import SocialLink from './SocialLinks';


const Projects = () => {
    return (
        <div >
            <Container className='container-projects'>
            <div className='container-title-section'>
          {titleSection.slice(0, 1).map((link) => (
            <div className='' key={link.id}>
              <TitleSection {...link} />
            </div>
          ))}
        </div>
            <Row className=''>
                    <Col med={12} >
                        <div className="row row-cols-1 row-cols-md-3 justify-content-around">
                        {card.slice(0,3).map((link) => (
                        <div className='d.flex-column w-25 border' key={link.id}>
                            <Card {...link} />
                            <div className="d-flex justify-content-center align-items-center mx-auto">
                                {socialLinks.slice(0, 2).map((link) => (
                                    <ul className="mx-auto" key={link.id}>
                                        <SocialLink {...link} />
                                    </ul>
                                ))}
                            </div>
                        </div>
                    ))}
                            </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Projects;
