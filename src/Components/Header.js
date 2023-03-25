import { Link } from "react-router-dom";
import { useState } from "react";

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
                {showFullName ? <p
                    className="full-name"
                    onMouseEnter={() => setShowFullName(true)}
                    onMouseLeave={() => setShowFullName(false)}>
                    it's olivia sparks</p> : null}
            </Link>
            <nav>
                <ul className="contact-links">
                    {navLinks.map((link) => {
                        return (
                            <li key={link.id}
                                onMouseEnter={() => setNavHover(link.id)}
                                onMouseLeave={() => setNavHover(0)}
                                style={
                                    navHover === link.id ? {
                                        backgroundColor: `${link.color}`,
                                        width: "fit-content",
                                        paddingRight: "10px",
                                    } : null}>
                                <Link to={link.link}>
                                    <p className="sr-only">{link.name}</p>
                                    <i className={link.i}></i>
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

//I'm really proud of the logic here! On hover, the label & changes the background color is updated to a unique color for each link. I'm using onMouseEnter&Leave for this logic, so it's not accessible for non-mouse users. I would love to learn a way to provide this feature to all sighted users, but for now I have a back-up hover/focus state to change the background of all items to pink on focus.