import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { socialLinks, card } from '../data';
import Card from './Card';
import SocialLink from './SocialLinks';
import TitleSection from './TitleSection';

import { useTranslation } from "react-i18next";


const AboutMe = () => {

  const { t } = useTranslation();
  

  return (
    <div className='container-aboutme'>
      <div className='about-title-section'>

            <TitleSection title={t("titleSection.0.title")} subtitle={t("titleSection.0.subtitle")}/>
      </div>
      <Row className='aboutme mx-auto justify-content-center align-items-center p-3'>
        <Col  className='aboutme-left col-12 col-md-6 col-lg-6 mx-auto'>
          <h1 className='aboutme-title-about text-center'>{t("aboutSection.title")}</h1>
          <p className='aboutme-subtitle-about text-center'>{t("aboutSection.subTitle")}</p>
          <div  className="socialLinkAbout d-flex flex-wrap justify-content-center">
            {socialLinks.slice(3, 8).map((link) => (
              <div key={link.id}>
                <SocialLink {...link} />
              </div>
            ))}
          </div>
        </Col>
        <Col className='card-aboutme col-12 col-md-6 col-lg-3 mx-auto p-3'>
          {card.slice(0,1).map((link) => (
            <div  key={link.id}>
              <Card {...link}  title={t(`cardtext.${link.id}.title`)} text={t(`cardtext.${link.id}.text`)}/>
              <div className="socialLinkAboutCard d-flex justify-content-center align-items-center">
              {socialLinks.slice(0, 1).map((link) => (
                <div key={link.id}>
                  <SocialLink {...link} />
                </div>
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
