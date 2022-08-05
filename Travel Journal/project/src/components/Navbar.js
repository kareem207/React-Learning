import "./Navbar.css"
import {faEarthAmerica} from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Navbar(props) {
    return (
        <nav className="Navbar">
            <div className="Navbar_tags">
                <FontAwesomeIcon icon={faEarthAmerica} size="2x" />
                <h1 className="NavBar_title">my travel journal.</h1>
            </div>
        </nav>
    );
}

export default Navbar;