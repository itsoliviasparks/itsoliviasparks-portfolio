import About from '../Components/About';
import AFK from '../Components/AFK';
import Contact from '../Components/Contact';
import Currently from '../Components/Currently';
import Projects from '../Components/Projects';
import School from '../Components/School';
import Tools from '../Components/Tools';

const Main = () => {
    return (
        <main className='wrapper texture'>
            <About />
            <Currently />
            <Projects />
            <Tools />
            <School />
            <AFK />
            <Contact />
        </main>
    );
};

export default Main;