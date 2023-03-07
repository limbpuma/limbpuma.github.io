import '../styles/styles.css';
const SocialLink = ({ iconText, href, iconClass, iconColor, path }) => {
    return (
        <div className='d-flex row '>
            <button type="button" class="btn btn-primary text-danger" width="16" height="16">
                <a href={href}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill={iconColor} class={iconClass} viewBox="0 0 16 16">
                        <path d={path} />
                    </svg>                
                    </a>
                    <div className="icon-name text-center pt-1">{iconText}</div>

            </button>   
        </div>
    );
};

export default SocialLink;


