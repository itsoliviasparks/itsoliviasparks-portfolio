import { Link } from "react-router-dom";

import tclLogo from "../assets/photos/the-collab-lab/53383537.png";
import workflowImg from "../assets/photos/the-collab-lab/111340762-27dbbc00-8636-11eb-92a2-04a31916f9e5.png";

const TheCollabLab = () => {
    return (
        <section className="the-collab-lab wrapper">
            <h2>The <em>Collab</em> Lab</h2>
            <h3>About The Project</h3>
            <img src={tclLogo} className="right logo" alt="The Collab Lab Logo" />
            <p><em>This project is currently in development.</em></p>
            <p>
                I am collaborating with three other early-career developers as part of <a href="https://the-collab-lab.codes" target="_blank" rel="noreferrer" aria-label="link text - new window">The Collab Lab</a> to build a smart shopping list app in React.js. Our team is working under the guidance of three mentors who are all professionals in the field. They act as our project managers and lead learning modules on collaborative development strategies.
            </p>

            <h3>Project Purpose & Goal</h3>
            <p>
                As a team, we are focusing on pair programming, writing great pull/merge request messages, over-communicating in Slack, demos, retros, and other real-world activities of professional software teams.
            </p>
            <p>
                Our team's goal is to create a "smart" shopping list app that can learn the user's buying habits and help them remember what they are likely to need to buy on their next trip to the store.
            </p>

            <h3>Lessons Learned</h3>
            <p>
                One of the most significant lessons I've learned so far is the importance of a professional workflow. Previously, my work was often done in isolation, which meant that documenting the development process and maintaining best-practice record-keeping were not a priority.
            </p>
            <p>
                However, since joining The Collab Lab, I've realized that this is a fundamental aspect of any professional software development team. We follow strict naming conventions for branches, are assigned tickets with acceptance criteria in place, work with established codebases, and write detailed pull requests and comments.
            </p>
            <img src={workflowImg} alt="The Collab Lab Weekly Cadence. Mon-Wed: Two developers pair program to complete the weekly story. Thurs: Submit pull request on GitHub & request the other pair's feedback. Fri: Review the other pair's PR & request final review from mentor. Sat: Implement all feedback until PR is approved & merge into main GitHub branch. Sunday: Demo the new features on production!" title="The Collab Lab Weekly Cadence" />
            <p>
                Collaborating with other developers has also been a great learning experience. I've had the opportunity to work with self-taught developers, those from different bootcamps, and professionals in the field. This has helped me expand my knowledge of the various coding techniques and approaches.
            </p>
            <nav>
                <ul>
                    <li>
                        <Link to="/the-collab-lab-repo">repo</Link>
                    </li>
                    <li>
                        <Link to="/the-collab-lab">live site</Link>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default TheCollabLab;