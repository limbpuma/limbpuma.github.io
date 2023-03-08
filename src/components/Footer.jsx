import React from 'react';
import { socialLinks, footer } from '../data';
import SocialLink from './SocialLinks';

const Footer = () => {
  const { footerTitle, footerText, footerText2, footerFollow } = footer[0];
  return (
    <footer className="container-footer">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 text-center">
            <h5 className="mb-3">{footerTitle}</h5>
            <h5>{footerText}</h5>
            <hr className="border-light" />
            <h5>{footerText2}</h5>
          </div>
          <div className="col-md-6 text-center">
            <h5 className="mb-3">{footerFollow}</h5>
            <div className="d-flex justify-content-center align-items-center">
              {socialLinks.slice(0, 3).map((link) => (
                <div key={link.id} className="">
                  <SocialLink {...link} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
