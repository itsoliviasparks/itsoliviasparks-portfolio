import { Link } from "react-router-dom";

import aboutImg from "../assets/photos/olivia-sparks.jpg";
import TechStack from "./TechStack";

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
                <img src={aboutImg} className="right" alt="Head shot of Olivia Sparks. She is smiling and wearing pink & black tortoise shell glasses" title="Olivia Sparks" />
                <p>
                    See, I was born with the “there must be a better way” gene & that ethos permeates every aspect of my life:
                </p>
                <p>
                    In my code, this manifests as some pretty good intuition when the project i'm working on isn't DRY. To “towel off” my code, I'm always learning from those senior to me & asking them targeted questions on how to improve.
                </p>
                <p>
                    This gene, also leads me to research new & better ways of writing web applications. No app exists in a silo— code is collaborative! So, I strive to understand the bigger picture of what I'm working on to connect new learnings with past knowledge & to ensure that my work integrates well into wider codebases.

                </p>
                <p>
                    My “there must be a better way” mindset also contributed to my 5+ year track record of solving user-focus problems in my past-life as a Technical Apparel Developer. You can read more about that <Link to="/tech-design-work">here</Link>.
                </p>
                <p>
                    Ultimately, maintainable & easy to understand code is always my goal. I love elegant & modular code blocks that provide a seamless user-experience.
                </p>
                <h3>
                    I believe that all problems have a solution— it's just a matter of having the patience to find the solution that's just <em>right</em>.
                </h3>
            </section>
            <TechStack />
        </>
    );
}

export default About;