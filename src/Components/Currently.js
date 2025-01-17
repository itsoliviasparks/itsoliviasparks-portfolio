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
                    I'm the Technology Lead in the Motion & Display dept. @ <Link to={externalLinks.work}>Publicis</Link> CoLab:
                    <ul>
                        <li>
                            My team includes talented Interactive Developers and we create some pretty rad banner ad animations together!
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    );
};

export default Currently;