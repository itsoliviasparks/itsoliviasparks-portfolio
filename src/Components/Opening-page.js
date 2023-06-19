import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const OpeningPage = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const devRef = useRef(null);
    const devAllRef = useRef([]);
    const firstRef = useRef(null);
    const lastRef = useRef(null);
    const navRef = useRef([]);

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))
        console.log(width)
    }, [width])

    useEffect(() => {
        gsap.fromTo(firstRef.current,
            { xPercent: 100 },
            { duration: 1, xPercent: 0, ease: "expo.out" })
        gsap.fromTo([devRef.current],
            { opacity: 0 },
            { delay: 0.5, duration: 1, opacity: 1 })
        gsap.fromTo(devAllRef.current,
            { opacity: 0, yPercent: -20, scale: 0.1, transformOrigin: "50% 0" },
            { delay: 0.5, duration: 2, stagger: -0.1, opacity: 1, yPercent: 0, scale: 1, ease: "elastic.out(0.9, 0.9)" })
        gsap.fromTo(lastRef.current,
            { xPercent: -150 },
            { delay: 1, duration: 1, xPercent: 0, ease: "expo.out" })
        gsap.fromTo(navRef.current,
            { opacity: 0 },
            { delay: 1.8, duration: 0.05, opacity: 1, ease: "expo.out" })
    }, [firstRef])

    return (
        <section className="opening-page">
            {width < 930 ?
                <svg id="hero" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="10 0 455 479.8" className="wrapper">
                    <g id="developer" ref={devRef}>
                        <text transform="translate(34.35 245.53)" className="developer peaGreen" ref={el => { devAllRef.current[0] = el; }}>dev</text>
                        <text transform="translate(28.3 233.53)" className="developer orange" ref={el => { devAllRef.current[1] = el; }}>dev</text>
                        <text transform="translate(28.3 250.53)" className="developer pink" ref={el => { devAllRef.current[2] = el; }}>dev</text>
                        <text transform="translate(32.08 238.53)" className="developer black" ref={el => { devAllRef.current[3] = el; }}>dev</text>
                        <text transform="translate(29.43 243.53)" className="developer white" ref={el => { devAllRef.current[4] = el; }}>dev</text>
                    </g>

                    <g ref={firstRef}>
                        <text transform="translate(82.96 60.34)" className=" first black">curious &</text>
                        <text transform="translate(43.65 122.34)" className=" first black">methodical</text>
                    </g>
                    <g ref={lastRef}>
                        <text transform="translate(90.15 309.34)" className="last black">designer,</text>
                        <text transform="translate(96.48 367.5)" className="last black">& overall</text>
                        <text transform="translate(90.54 424.5)" className="last black">“keener”</text>
                    </g>
                </svg>
                :
                <svg id="hero" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="-88.5 0 1380 291.62">
                    <g id="developer" ref={devRef}>
                        <text transform="matrix(1 0 0 1 15.2949 196.9756)" className="developer peaGreen" ref={el => { devAllRef.current[0] = el; }}>developer</text>
                        <text transform="matrix(1 0 0 1 -0.7051 184.9756)" className="developer orange" ref={el => { devAllRef.current[1] = el; }}>developer</text>
                        <text transform="matrix(1 0 0 1 -0.7051 201.9756)" className="developer pink" ref={el => { devAllRef.current[2] = el; }}>developer</text>
                        <text transform="matrix(1 0 0 1 9.2949 189.9756)" className="developer black" ref={el => { devAllRef.current[3] = el; }}>developer</text>
                        <text transform="matrix(1 0 0 1 2.2949 194.9756)" className="developer white" ref={el => { devAllRef.current[4] = el; }}>developer</text>
                    </g>
                    <text transform="translate(248.13 60.34)" className=" first black" ref={firstRef}>curious & methodical</text>
                    <text transform="translate(123.97 273.34)" className="last black" ref={lastRef}>designer, & overall “keener”</text>
                </svg>
            }
            <nav className="wrapper">
                <ul>
                    <li ref={el => { navRef.current[0] = el; }}>
                        <Link to="/about">about</Link>
                    </li>
                    <li ref={el => { navRef.current[1] = el; }}>
                        <Link to="/projects">projects</Link>
                    </li>
                    <li ref={el => { navRef.current[2] = el; }}>
                        <Link to="/contact">contact</Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
};

export default OpeningPage;