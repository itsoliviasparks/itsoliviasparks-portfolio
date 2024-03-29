import { useState } from "react";
import { Link } from "react-router-dom";

import contactLinks from "../assets/contactLinks";

const Contact = () => {
    const [contactHover, setContactHover] = useState(0);
    
    return (
        <section className="contact wrapper">
            <h2>
                Let's connect if you're looking for an <em>eager beaver</em> to join your team!
            </h2>
            <ul>
                {
                    contactLinks.map((link) => {
                        return (
                            <li key={link.id}
                                onMouseEnter={() => setContactHover(link.id)}
                                onMouseLeave={() => setContactHover(0)}>
                                <Link to={link.link}
                                    style={
                                        contactHover === link.id ? {
                                            color: `${link.color}`,
                                        } : null}>
                                    <div>
                                        <i className={link.i} alt={link.name}></i>
                                        <p>:</p>
                                    </div>
                                    <p>{link.name}</p>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default Contact;