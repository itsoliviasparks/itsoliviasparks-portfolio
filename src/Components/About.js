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
                    I'm a methodical & goal-oriented Tech Lead with 6+ years experience in collaborative project development
                </li>
                <li>
                    I specialize in HTML5 animation utilizing <Link to={externalLinks.gsap}>GSAP</Link>, Adobe Creative Suite, and Figma
                </li>
                <li>
                    I'm a proven leader who focuses on strategic thinking, driving innovation, implementing best practices/SOPs, nurturing talent, and fostering a culture of clear communication & continuous improvement
                </li>
                <li>
                    Fun fact: Before I began my career in tech, I spent half a decade working in the fashion industry as a <Link to='/tech-design-work'>Technical Apparel Designer</Link>
                </li>
                <li>
                    <b>Pronouns:</b> she/her
                </li>
            </ul>
        </section>
    );
};

export default About;