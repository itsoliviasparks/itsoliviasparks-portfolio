import { Link } from 'react-router-dom';

import externalLinks from '../assets/externalLinks';

import tclLogo from '../assets/photos/the-collab-lab/tcl-logo.png';
import tclWeeklyCadence from '../assets/photos/the-collab-lab/tcl-weekly-cadence.png';

const TheCollabLab = () => {
    return (
        <main id='the-collab-lab' className='wrapper'>
            <h2>The <em>Collab</em> Lab</h2>
            <h3>About The Project</h3>
            <img src={tclLogo} className='logo' alt='The Collab Lab Logo' />
            <p>
                Over an 8-week period in early 2023, I collaborated with three other early-career developers as part of <Link to={externalLinks.collabLabSite}>The Collab Lab</Link>. Together, we built a 'smart' shopping list app in React.js. Our team worked under the guidance of three mentors, all professionals in the field, who acted as our project managers & led learning modules on collaborative development strategies.
            </p>

            <h3>Project Purpose & Goal</h3>
            <p>
                As a team, we focused on pair programming, writing great pull/merge request messages, over-communicating in Slack, demos, retros, and other real-world activities of professional software teams.
            </p>
            <p>
                Our team's goal was to create a 'smart' shopping list app that can learn the user's buying habits and help them remember what they are likely to need to buy on their next trip to the store.
            </p>

            <h3>Lessons Learned</h3>
            <p>
                One of the most significant lessons I learned was the importance of clear communication, both in & out of the text editor.
            </p>
            <img src={tclWeeklyCadence} className='workflow' alt="The Collab Lab Weekly Cadence. Mon-Wed: Two developers pair program to complete the weekly story. Thurs: Submit pull request on GitHub & request the other pair's feedback. Fri: Review the other pair's PR & request final review from mentor. Sat: Implement all feedback until PR is approved & merge into main GitHub branch. Sunday: Demo the new features on production!" title='The Collab Lab Weekly Cadence' />
            <p>
                Each week our team was split off into pairs. Each pair completed a weekly story & then reviewed the other pair's PR.
            </p>
            <p>
                For me, reviewing the other pair's pull request highlighted the importance of writing maintainable & easy to understand code. Additionally, having our team's mentors review the pull requests I worked on was incredibly valuable. Their thoughtful comments really opened my eyes to new ways of working through logic, undoubtedly making me a better programmer.
            </p>
            <p>
                Collaborating with other developers was a great learning experience. I worked with self-taught developers, those from different bootcamps, and professionals in the field. This helped me expand my knowledge of various coding techniques and approaches.
            </p>
            <p className='links'>
                <Link to={externalLinks.collabLab}>live site</Link> | <Link to={externalLinks.collabLabRepo}>repo</Link>
            </p>

            <h3>Volunteering</h3>
                <p>
                    After my great experience in TCL-61, I remained an engaged member of The Collab Lab community, volunteering until its closure at the end of 2024.
               </p>
               <p>
                    As a volunteer, I helped early-career developers, particularly those from underrepresented groups in tech, gain practical experience in web development by working remotely on real world projects:
                </p>
                <ul>
                    <li>
                        Once potential Collabies got through the application, review, and selection process, their names were forwarded to me. I took care of the organization & logistics of sending acceptance/rejection emails and adding everyone to Slack
                    </li>
                    <li>
                        Additionally, I was part of a dedicated team of TCL volunteers, who collectively developed a <Link to={externalLinks.collabLabGallery}>comprehensive gallery</Link>, showcasing all of TCL's past projects. Our efforts included reviving and seamlessly integrating past projects onto live URLs while establishing connectivity to operational read-only databases
                    </li>
                </ul>
        </main>
    );
};

export default TheCollabLab;