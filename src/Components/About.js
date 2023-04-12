import { Link } from "react-router-dom";

import TechStack from "./TechStack";
import aboutImg from "../assets/photos/olivia-sparks.jpg";

const About = () => {
    return (
        <>
            <section className="about wrapper">
                <h2>
                    <span>
                        My name is Olivia Sparks.
                    </span>
                    I love problem solving, and I'm annoyed when things aren't quite right. <em>I'm a developer.</em>
                </h2>
                <img src={aboutImg} className="right" alt="Head shot of Olivia Sparks. She is smiling and wearing pink & black tortoise shell glasses" />
                <p>
                    See, I was born with the <strong>“there must be a better way” gene</strong> & that ethos permeates every aspect of my life:
                </p>
                <p>
                    In my code, this manifests as some pretty good <strong>intuition when the project i'm working on isn't DRY</strong>. To “towel off” my code, I'm always <strong>learning from those senior to me & asking them targeted questions</strong> on how to improve.
                </p>
                <p>
                    This ethos, also leads me to research new & better ways of writing web applications. No app exists in a silo— code is collaborative. So, <strong>I strive to understand the bigger picture</strong> of what I'm working on to connect new learnings with past knowledge & to ensure that my work integrates well into wider codebases.

                </p>
                <p>
                    My “there must be a better way” ethos also contributed to my 5+ year track record of solving user-focus problems in my past-life as a Technical Apparel Developer. You can read more about that <Link to="/tech-design-work">here</Link>.
                </p>
                <p>
                    Ultimately, maintainable & easy to understand code is always my goal. I love elegant & modular code blocks that <strong>provide a seamless user-experience</strong>.
                </p>
                <h3>
                    I believe that all problems have a solution— it's just a matter of having the patience to find the solution that will make the user's experience just <em>right</em>.
                </h3>
            </section>
            <TechStack />
        </>
    );
}

export default About;