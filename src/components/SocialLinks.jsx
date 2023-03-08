

const SocialLink = ({ iconText, href, iconClass, iconColor, path }) => {
  return (
    <div className='row'>
      <div className='text-center'>
        <button type='button' className='btn-social mb-1'>
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
        </button>
        <p className='button-social-text'>{iconText}</p>
      </div>
    </div>
  );
};

export default SocialLink;
