import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { card, projectLink, } from '../data';
import TitleSection from './TitleSection';
import Card from './Card';
import SocialLink from './SocialLinks';
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div id="projects" className='container-projects align-items-center justify-content-around'>
      <div className='project-title-section'>
        <TitleSection title={t("titleSection.2.title")} subtitle={t("titleSection.2.subtitle")} />
      </div>
      <Container className='mx-auto'>
      <Row className='card-project-container row-cols-1 row-cols-md-6 row-cols-lg-3 justify-content-around'>
          {card.slice(6, 9).map((link) => (
            <Col key={link.id} className='col-12 col-md-6 col-lg-3 col-xl-3 h-100'>
              <div className='card-projects p-3 h-100'>
                <Card {...link} title={t(`cardtext.${link.id}.title`)} text={t(`cardtext.${link.id}.text`)} />
                <div className='socialLinkProject d-flex justify-content-center'>
                  {projectLink.slice((link.id - 6) * 2, (link.id - 6) * 2 + 1).map((link) => ( //here can be icons added (link.id - 6) * 2 + 2)
                    <div className='my-3' key={link.id}>
                      <SocialLink {...link} title={(`projectLink.${link.href}.title`)} />
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
