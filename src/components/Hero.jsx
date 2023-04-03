import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { heroSection, imgLanguage } from '../data';
import { useTranslation } from "react-i18next";
import i18n from "../translation/i18n";


const Hero = () => {
  const { t } = useTranslation();
  const { image } = heroSection[0];
  const { imageEn, imageEs, imageDe } = imgLanguage[0];

  return (
    <div className='container-fluid d-flex flex-column align-items-center'>
      <Card border="0" bg="transparent" className="hero-im-custom">
        <div className="row row-hero">
          <div className="col-md-6">
            <Card.Img src={image} alt="IA hero image" className="hero-img-custom" />
          </div>
          <div className="hero-text col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
            <Card.Title className="hero-title text-center"><h1>{t("heroSection.title")}</h1></Card.Title>
            <Card.Text className="hero-subtitle text-center">{t("heroSection.subTitle")}</Card.Text>
            <Card.Text>
              <small className='hero-litle-text'>{t("heroSection.smallText")}</small>
            </Card.Text>
            <div className='change-language d-flex-row mt-5'>
              <button className='btn btn-language' onClick={() => i18n.changeLanguage('en')}>
                <img className='imgLanguage' src={imageEn} alt='English' style={{ marginRight: '5px' }} />
                English
              </button>
              <button className='btn btn-language' onClick={() => i18n.changeLanguage('es')}>
                <img className='imgLanguage' src={imageEs} alt='Español' style={{ marginRight: '5px' }} />
                Español
              </button>
              <button className='btn btn-language' onClick={() => i18n.changeLanguage('de')}>
                <img className='imgLanguage' src={imageDe} alt='Deutsch' style={{ marginRight: '5px' }} />
                Deutsch
              </button>
            </div>

          </div>
        </div>
      </Card>
    </div>
  );
};

export default Hero;
