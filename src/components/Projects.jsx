import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { card, socialLinks, } from '../data';
import TitleSection from './TitleSection';
import Card from './Card';
import SocialLink from './SocialLinks';
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className='container-projects align-items-center'>
      <div className='project-title-section'>
      <TitleSection title={t("titleSection.0.title")} subtitle={t("titleSection.0.subtitle")}/>
      </div>
      <Container className='mx-auto'>
        <Row className='card-project-container row-cols-1 row-cols-md-2 row-cols-lg-3 '>
          {card.slice(1, 4).map((link) => (
            <Col key={link.id} className='col-12 col-md-3 col-lg-3'>
              <div className='card-projects p-3'>
                <Card {...link} title={t(`cardtext.${link.id}.title`)} text={t(`cardtext.${link.id}.text`)}/>
                <div className='socialLinkProject d-flex justify-content-center'>
                  {socialLinks.slice(9, 11).map((link) => (
                    <div key={link.id}>
                      <SocialLink {...link} title={(`projectLink.${link.href}.title`)}/>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
