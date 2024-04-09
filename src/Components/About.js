import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section id='about'>
            <h2>
                A little about me:
            </h2>
            <ul>
                <li>
                    I'm a curious & methodical developer, designer, manager, & overall 'keener', dedicated to lifelong learning & problem solving
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