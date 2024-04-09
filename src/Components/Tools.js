import { useState } from 'react';

import techStack from '../assets/techStack';

const Tools = () => {
    const [showLabel, setShowLabel] = useState(0);

    return (
        <section id='tools'>
            <h2>
                Tools I've worked with:
            </h2>
            <ul className='tools'>
                {
                    techStack.map((skill) => {
                        return (
                            <li
                                key={skill.name}
                                onMouseEnter={() => setShowLabel(skill.id)}
                                onMouseLeave={() => setShowLabel(0)}>
                                <i className={skill.i}
                                    alt={skill.name}></i>
                                {showLabel === skill.id ?
                                    <p className='label'>
                                        {skill.name}
                                    </p> : null}
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default Tools;