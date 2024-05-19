import { Link } from 'react-router-dom';

import externalLinks from '../assets/externalLinks';
import img from '../assets/photos/trippy-swirl-citrus-footer.png';

const Footer = () => {
    return (
        <footer className='texture'>
            <div className='footer-copy'>
                <p>
                    Created by Olivia Sparks. <Link to={externalLinks.portfolioRepo}>Browse the repo.</Link>
                </p>
                <p>
                    ©2022-2024 Olivia Sparks. All rights reserved.
                </p>
            </div>
            <img src={img} alt='' />
        </footer>
    );
};

export default Footer;