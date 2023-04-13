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
    <div id="aboutme" className='container-aboutme justify-content-around'>
      <div className='about-title-section'>
        <TitleSection title={t("titleSection.0.title")} subtitle={t("titleSection.0.subtitle")} />
      </div>
      <Row className='aboutme align-items-center justify-content-around'>
        <Col xs={12} md={4} lg={4} xl={4}>
          <div className='p-3'>
            <h1 className='aboutme-title-about text-center'>{t("aboutSection.title")}</h1>
            <p className='aboutme-subtitle-about mt-5'>{t("aboutSection.subTitle")}</p>
            <div className="socialLinkAbout d-flex flex-wrap justify-content-center mt-5">
              {socialLinks.slice(3, 8).map((link) => (
                <div key={link.id}>
                  <SocialLink {...link} />
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4} xl={4} className='card-aboutme'>
          {card.slice(0, 1).map((link) => (
            <div className='card-aboutme-inner p-4' key={link.id}>
              <Card {...link} title={t(`cardtext.${link.id}.title`)} text={t(`cardtext.${link.id}.text`)} />
              <div className="socialLinkAboutCard d-flex justify-content-center align-items-center">
                {socialLinks.slice(0, 1).map((link) => (
                  <div className='mt-3' key={link.id}>
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
