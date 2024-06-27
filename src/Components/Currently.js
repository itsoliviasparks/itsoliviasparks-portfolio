import { Link } from 'react-router-dom';

import externalLinks from '../assets/externalLinks';

const Currently = () => {
    return (
        <section id='currently'>
            <h2>
                What I'm up to:
            </h2>
            <ul>
                <li>
                I'm currently coding some pretty rad banner ad animations @ <Link to={externalLinks.work}>Publicis Canada</Link>
                </li>
            </ul>
        </section>
    );
};

export default Currently;