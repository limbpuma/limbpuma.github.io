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
            <Row className='container-project-content mx-auto justify-content-center align-items-center pl-5 mt-5'>
            <Col className='aboutme-left col-12 col-md-8 col-lg-12'>
          <div className="row row-cols-md-3 mx-auto w-100">
            {card.slice(0, 3).map((link) => (
              <div className='' key={link.id}>
                <Card {...link} />
                <div className="d-flex justify-content-center">
                {socialLinks.slice(0, 2).map((link) => (
                  <div key={link.id}>
                    <SocialLink {...link} />
                  </div>
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
