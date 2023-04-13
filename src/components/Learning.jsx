import React, { useState } from 'react';
import { Container, Row, Col,  } from 'react-bootstrap';
import { schoolLinks, card } from '../data';
import Card from './Card';
import TitleSection from './TitleSection';
import { useTranslation } from 'react-i18next';
import CardLearning from './CardLearning';
import SocialLink from './SocialLinks';
import PDFButton from './PdfButton';




const Learning = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);  

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div id="learning" className='container-learning justify-content-around'>
      <div className='learning-title-section'>
        <TitleSection title={t('titleSection.1.title')} subtitle={t('titleSection.1.subtitle')} />
      </div>
      <div className='container-card mx-auto'>
        <Row className='card-learning-container justify-content-center align-items-center'>
          <Col xs={12} md={4} lg={5} xl={5} className='learning-card-column p-3'>
            <div id='carouselExampleControls' className='carousel slide' data-bs-ride='carousel' data-bs-interval='false'>
            <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='prev' onClick={() => setActiveIndex(activeIndex === 0 ? 3 : activeIndex - 1)}>
              <span className='carousel-control-prev-icon' aria-hidden='true' />
              <span className='visually-hidden'>Previous</span>
            </button>
            <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='next' onClick={() => setActiveIndex(activeIndex === 3 ? 0 : activeIndex + 1)}>
              <span className='carousel-control-next-icon' aria-hidden='true' />
              <span className='visually-hidden'>Next</span>
            </button>
              <div xs={12} className='carousel-inner'>
                {card.slice(1, 5).map((link, index) => (
                  <div key={link.id} className={`carousel-item ${activeIndex === index ? 'active' : ''}`}>
                    <div className='card-learning p-3'>
                      <Card className='card-learning-card' {...link} title={t(`cardtext.${link.id}.title`)} text={t(`cardtext.${link.id}.text`)} />
                      <div className='socialLinkProject d-flex justify-content-center'>
                        <CardLearning {...link} text1={t(`cardtext.${link.id}.text1`)} text2={t(`cardtext.${link.id}.text2`)} text3={t(`cardtext.${link.id}.text3`)}/>
                      </div>
                    </div>
                    <ol className='carousel-indicators'>
                      {card.slice(1, 5).map((_, index) => (
                        <li
                          key={index}
                          data-bs-target='#carouselExampleControls'
                          data-bs-slide-to={index}
                          className={activeIndex === index ? 'active' : ''}
                          onClick={() => setActiveIndex(index)}
                        />
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} lg={5} xl={5} className='learning-text-column p-3 mx-auto d-flex flex-column'>
            <h1 className='text-center' >{t("learningSection.title")}</h1>
            <p className='mt-5 mb-5' >{t("learningSection.subTitle")}</p>
            <PDFButton pdfText={t(`pdfText.text`)}/>
            <div className="socialLinkLearning d-flex flex-wrap justify-content-center mt-5">
            {schoolLinks.slice(0, 4).map((link) => (
              <div key={link.id}>
                <SocialLink {...link} />
              </div>
            ))}
          </div>            
          </Col>             
        </Row>
      </div>
    </div>
  );
};

export default Learning;
