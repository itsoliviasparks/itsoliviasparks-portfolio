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
                    I'm a Technology Lead in the Motion & Display department @ <Link to={externalLinks.work}>Publicis Health</Link>
                </li>
                <li>
                    My team includes talented Interactive Developers & Content Authors. Together, we create some pretty rad banner ad animations & develop impactful email communications
                </li>
            </ul>
        </section>
    );
};

export default Currently;