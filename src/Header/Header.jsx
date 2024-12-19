import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return (
       <>
       <div className="header">
                <nav>
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/Skills">Skills</Link></li>
                      <li><Link to="/Education">Education</Link></li>
                      <li><Link to="/AboutMe">About Me</Link></li>
                      <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </nav>
        </div>
        </>
    );
}

export default Header;