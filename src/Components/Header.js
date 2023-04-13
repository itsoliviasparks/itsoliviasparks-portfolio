import { useState } from "react";
import { Link } from "react-router-dom";

import navLinks from "../assets/navLinks";

const Header = () => {
    const [showFullName, setShowFullName] = useState(false);
    const [navHover, setNavHover] = useState(0);

    return (
        <header>
            <Link to="/" className="name">
                <h1
                    onMouseEnter={() => setShowFullName(true)}
                    onMouseLeave={() => setShowFullName(false)}>
                    os
                </h1>
                <p className="sr-only">it's Olivia Sparks</p>
                {showFullName ?
                    <p
                    className="full-name"
                    onMouseEnter={() => setShowFullName(true)}
                    onMouseLeave={() => setShowFullName(false)}>
                        it's olivia sparks
                    </p> : null}
            </Link>
            <nav>
                <ul className="contact-links">
                    {navLinks.map((link) => {
                        return (
                            <li key={link.id}
                                onMouseEnter={() => setNavHover(link.id)}
                                onMouseLeave={() => setNavHover(0)}
                                style={
                                    navHover === link.id ?
                                    {backgroundColor: `${link.color}`,
                                        width: "fit-content",
                                        paddingRight: "10px",
                                    } : null}>
                                <Link to={link.link}>
                                    <p className="sr-only">{link.name}</p>
                                    <i className={link.i} alt={link.name}></i>
                                    {navHover === link.id ? link.name : null}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    );
};

export default Header;