import { useState } from "react";

import techStack from "../assets/techStack";

const TechStack = () => {
    const [showLabel, setShowLabel] = useState(0);

    return(
        <section className="tech-stack wrapper">
            <h2>Tech Stack & Skills:</h2>
            <ul className="tech-stack">
                {techStack.map((skill) => {
                    return (
                        <li
                            key={skill.id}
                            onMouseEnter={() => setShowLabel(skill.id)}
                            onMouseLeave={() => setShowLabel(0)}>
                                <i className={skill.i}
                                    alt={skill.name}
                                    style={{color: `${skill.color}`}}></i>
                                <p className="sr-only">it's Olivia Sparks</p>
                                {showLabel === skill.id ? <p
                                    className="label">
                                    {skill.name}</p> : null}
                        </li>
                    )
                })}
            </ul>
        </section>
    );
};

export default TechStack;