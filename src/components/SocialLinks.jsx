import '../styles/styles.css';

const SocialLink = ({ iconText, href, iconClass, iconColor, path }) => {
  return (
    <div className='row'>
      <div className='col-sm-6 col-md-4 col-lg-3'>
        <button type='button' className='btn btn-primary btn-social'>
          <a href={href}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill={iconColor}
              className={iconClass}
              viewBox='0 0 16 16'>
              <path d={path} />
            </svg>
          </a>
          <p>{iconText}</p>
        </button>
      </div>
    </div>
  );
};

export default SocialLink;
