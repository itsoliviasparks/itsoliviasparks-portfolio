import { Link } from 'react-router-dom';

import externalLinks from '../assets/externalLinks';
import img from '../assets/photos/trippy-swirl-mint-footer.png';

const Footer = () => {
    return (
        <footer>
            <div className='footer-copy'>
                <p>
                    Created by <Link to={externalLinks.github}>Olivia Sparks</Link>. <Link to={externalLinks.portfolioRepo}>Browse the repo.</Link>
                </p>
                <p>
                    ©2022-{(new Date().getFullYear())} Olivia Sparks. All rights reserved.
                </p>
            </div>
            <img src={img} alt='' />
        </footer>
    );
};

export default Footer;