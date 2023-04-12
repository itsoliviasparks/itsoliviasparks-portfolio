import { Link } from "react-router-dom";

const OpeningPage = () => {
    return (
        <section className="opening-page">
            <div className="hero-text">
                <p>solving</p>
                <div className="user-focused">
                    <p>user-</p>
                    <p>focused</p>
                </div>
                <p>problems</p>
            </div>
            <nav className="wrapper">
                <ul>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/projects">projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
};

export default OpeningPage;