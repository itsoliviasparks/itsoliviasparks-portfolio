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
                    I'm a <b>Technology Lead</b> in the Motion & Display dept. @ <Link to={externalLinks.work}>Publicis Toronto</Link>:
                    <ul>
                        <li>
                            As a Tech Lead, I work closely with Project Management, QA, and Creative teams, while overseeing and guiding my team in the transformation of storyboards & brand assets into production-ready, best-in-class ads
                        </li>
                        <li>
                            My team of talented Interactive Developers and I work together to create some pretty rad banner ad animations! <em>(As well as some compliance-focused banners with scrolling ISI)</em>
                        </li>
                        <ul>
                            <li>
                                Primarily we work on standard banners, animated with <Link to={externalLinks.gsap}>GSAP</Link> and delivered via Google's DoubleClick Studio (DCS) platform
                                </li>
                                <li>
                                We also work with third-party media companies, use a variety of banner development tools & platforms, and build HTML5 Point-of-Care assets
                            </li>
                        </ul>
                    </ul>
                </li>
            </ul>
        </section>
    );
};

export default Currently;