import tech1 from "../assets/photos/hollister/KIC_325-1440-2492-108_life1.jpeg";
import tech2 from "../assets/photos/hollister/KIC_332-1801-1452-110_model4.jpeg";

const About = () => {
    return (
        <section className="tech-design-work wrapper">
            <h2>
                What is a Technical Apparel Developer?
            </h2>
            <h3>
                Essentially, they're the <em>apparel equivalent of a UX focused Front-End Dev.</em>
            </h3>
            <p>
                Before I began my coding career, I spent half a decade working in fashion industry as a Technical Apparel Developer.
            </p>
            <img src={tech1} className="right" alt="Hollister online product image. Teen boy is wearing ripped jeans and a black & white plaid flannel. He is sitting on the ground with one leg bent & his arm resting on top. Side view." title="Hollister online product image" />
            <h3>Job Purpose & Goal</h3>
            <p>
                My main focus in this role was to execute the design team's vision of each season's collection while protecting & improving best-in-class fit & function of each garment (read: user-experience).
            </p>
            <p>
                My work was iterative, and involved weekly research to identify user pain points — <em>Is it warm enough? Is the pocket in an intuitive place? Can you sit down comfortably? Does it fit as expected?</em>
            </p>
            <p>
                From there, I would research, prototype, & test solutions to these user-focused problems before sending the best solution to stores (read: push to production).
            </p>
            <p>
                Throughout the development process, I analyzed user-submitted data and led focus groups to guide product improvements. I worked within tight timing and budget constraints; managed the expectations of cross-functional team members; and tracked product development using the industry's version control equivalent.
            </p>
            <img src={tech2} className="left" alt="Hollister online product image. Young man is wearing a grey winter coat with black details. His hood is up. His hands are touching the jacket's chest pocket. View is from waist up." title="Hollister online product image" />
            <h3>It's All Collaboration</h3>
            <p>
                In this position, I collaborated closely with internal design, sourcing, and QA teams, as well as third-party factories, to develop more than 60 products per quarter.
            </p>
            <p>
                Additionally, my role involved presenting my ideas and work to both my cross-functional peers and the brand's leadership team. To do this, I led weekly collaborative working sessions with my peers to align on each style. I also summarized and presented high-level key takeaways to the company's leadership team for their buy-in prior to the implementation of finalized products and customer research.
            </p>
            <h3>Outcome</h3>
            <p>
                In this role, user experience was quantified in True To Size (TTS) ratings & calculated from online reviews. I improved the user experience by 9% to an average of 94% TTS.
            </p>
        </section>
    );
}

export default About;