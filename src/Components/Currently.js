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
                <li>
                    I also volunteer with <Link to={externalLinks.collabLabSite}>The Collab Lab</Link>, helping early-career developers, particularly those from underrepresented groups in tech, gain practical experience in web development by working remotely on real world projects
                </li>
            </ul>
        </section>
    );
};

export default Currently;