import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SocialLink = ({ href, iconClass, iconText, size}) => {
  return (
    <div className='row'>
      <div className='text-center'>
        <ul>
          <a
            href={href}
            target="_blank"
            className="social-icon text-decoration-none d-flex flex-column justify-content-center align-items-center mx-auto"
            rel="noreferrer">
            <FontAwesomeIcon icon={iconClass} size={size} color="iconColor"/>
            <span className="iconTextColor text-uppercase mt-2">{iconText}</span>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default SocialLink;
