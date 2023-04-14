import { Link } from "react-router-dom";

import projects from "../assets/projects";

const Projects = () => {
    return (
        <section className="projects wrapper">
            <h2>I'd love to <em>show-off</em> a little bit:</h2>
            <p>
                Click through each project to learn more about the problems solved, what I learned during development, and to access the live site & repository.
            </p>
            <ul className="project-list">
                {
                    projects.map((project) => {
                        return (
                            <li key={project.id}>
                                <img src={project.headerPhoto}
                                    alt={project.notTech ? project.imgDesc : `Screenshot of "${project.name}" website on a MacBook & iPhone`} />
                                <div className="show-links">
                                    <div className="project-desc">
                                        <div className="title">
                                            <h3>{project.name}</h3>
                                            {
                                                project.done ? null : <p className="in-dev">In Development</p>
                                            }
                                        </div>
                                        <p>{project.desc}</p>
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
                                    </div>
                                    <ul className="project-links">
                                        {
                                            project.links.map((link) => {
                                                return (
                                                    <li key={link.link}
                                                        className={link.color}>
                                                        <Link to={link.link}>{link.name}</Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
        </section>
    );
};

export default Projects;