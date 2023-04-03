import React from 'react';
import { socialLinks } from '../data';
import SocialLink from './SocialLinks';
import { useTranslation } from "react-i18next";
import i18n from "../translation/i18n";
const Footer = () => {
  const { t } = useTranslation();
  return (
      <div className="container-footer">
        <div className="row mx-auto">
          <div className="col-md-6 text-center d-flex flex-column justify-content-center">
            <h5 className="">{t("footerSection.footerTitle")}</h5>
            <h5>{t("footerSection.footerText")}</h5>
            <hr className="border-light" />
            <h5>{t("footerSection.footerText2")}</h5>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center text-center p-2">
            <h5 className="">{t("footerSection.follow")}</h5>
            <div className="socialLinkFooter d-flex justify-content-center align-items-center">
              {socialLinks.slice(0, 2).map((link) => (
                <div key={link.id} className="">
                  <SocialLink {...link} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

  );
};

export default Footer;
