import { useState, useEffect } from "react";

const MovingBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    useEffect(() => {
      const updateMousePosition = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', updateMousePosition);
      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    }, []);

    return (
        <div className="background"
            style={{background: `radial-gradient(at ${mousePosition.x}px ${mousePosition.y}px, rgba(227,223,211,1) 1%, rgba(216,210,191,1) 44%`}}>
        </div>
    )
  };
  export default MovingBackground;