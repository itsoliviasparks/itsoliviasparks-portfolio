import { Link } from 'react-router-dom';

import projects from '../assets/projects';

const Projects = () => {
    return (
        <section id='projects'>
            <h2>
                Stuff I've worked on:
            </h2>
            <ul>
                {
                    projects.map((project) => {
                        return (
                            <li className='project' key={project.name}>
                                <div className="project-header">
                                    <h3>{project.name}</h3>
                                    { project.done ? null : <p className="in-dev"> - In Development</p> }
                                    <ul className="project-links">
                                        {
                                            project.links.map((link) => {
                                                return (
                                                    <li key={link.link}>
                                                        <Link to={link.link}>{link.name}</Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                {
                                    project.tech ?
                                        <ul className="project-tech">
                                            {
                                                project.tech.map((skill) => {
                                                    return (
                                                        <li key={project.name + skill.name}>
                                                            <i className={skill.i}
                                                                alt={skill.name}
                                                                title={skill.name}
                                                            ></i>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        : null
                                }
                                <ul className="project-desc">
                                        {
                                            project.desc.map((li) => {
                                                return (
                                                    <li key={li}>
                                                        {li}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default Projects;