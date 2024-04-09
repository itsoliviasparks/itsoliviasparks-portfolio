import { Link } from 'react-router-dom';

import externalLinks from '../assets/externalLinks';

const Contact = () => {
    return (
        <section id='contact'>
            <h2>
                Connect with me:
            </h2>
            <ul>
                <li>
                    GitHub: <Link to={externalLinks.github}>itsoliviasparks</Link>
                </li>
                <li>
                    LinkedIn: <Link to={externalLinks.linkedin}>itsoliviasparks</Link>
                </li>
            </ul>
        </section>
    );
};

export default Contact;