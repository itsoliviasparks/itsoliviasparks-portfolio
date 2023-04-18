import { Link } from "react-router-dom";

const OpeningPage = () => {
    return (
        <section className="opening-page">
            <div className="opener">
            <div className="hero-text">
                <p>curious & methodical</p>
                <div className="bold">
                    <p>software</p>
                    <p>developer</p>
                </div>
                <p>designer, & overall "keener"</p>
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
            </div>
        </section>
    )
};

export default OpeningPage;