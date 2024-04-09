import { Link } from 'react-router-dom';

import externalLinks from '../assets/externalLinks';

const School = () => {
    return (
        <section id='school'>
            <h2>
                Where I've studied:
            </h2>
            <ul>
                <li>
                    I'm a graduate of <Link to={externalLinks.juno}>Juno College's</Link> Web Development Bootcamp
                </li>
                <li>
                    I also have a Bachelor of Design in Fashion & a Minor in Philosophy from <Link to={externalLinks.tmu}>TMU</Link> (Formerly Ryerson University)
                </li>
            </ul>
        </section>
    );
};

export default School;