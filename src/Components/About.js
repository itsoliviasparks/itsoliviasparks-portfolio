import { Link } from 'react-router-dom';

import externalLinks from '../assets/externalLinks';

const About = () => {
    return (
        <section id='about'>
            <h2>
                A little about me:
            </h2>
            <ul>
                <li>
                    I’m a curious & methodical developer, designer, and overall "keener" with 6+ years experience in collaborative project development
                </li>
                <li>
                    I specialize in DHTML animation utilizing <Link to={externalLinks.gsap}>GSAP</Link>, Adobe Creative Suite, and Figma; I craft succinct & maintainable code with a focus on performance
                </li>
                <li>
                    I’m a proven leader who implements best practices & standard operating procedures while fostering clear communication, strategic thinking, and a culture of continuous improvement
                </li>
                <li>
                    I identify & offer forward-thinking solutions to problems while operating effectively through ambiguity, challenges, and transitions
                </li>
                <li>
                    Fun fact: Before I began my coding career, I spent half a decade working in the fashion industry as a <Link to='/tech-design-work'>Technical Apparel Developer</Link>
                </li>
                <li>
                    <b>Pronouns:</b> she/her
                </li>
            </ul>
        </section>
    );
};

export default About;