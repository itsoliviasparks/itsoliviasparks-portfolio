import { Link } from 'react-router-dom';

import contactLinks from '../assets/contactLinks';
import img from '../assets/photos/trippy-swirl-citrus-header.png';

const Header = () => {
    return (
        <header>
            <img src={img} alt=''  className='texture'/>
            <h1>
                <Link to='/'>
                    it's olivia sparks
                </Link>
            </h1>
            <ul className='texture'>
                {
                    contactLinks.map((link) => {
                        return (
                            <li key={link.name}>
                                <Link to={link.link}>
                                    <i className={link.i} alt={link.name} title={link.name}></i>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </header>
    );
};

export default Header;