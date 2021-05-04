import { useState } from 'react';
import { Link } from "react-scroll";
import Logo from "../../images/logo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        };
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to="#" className="logo">
                <img src={Logo} alt="Logo" />
            </Link>
            <input id="menu-btn" className="menu-btn" type="checkbox"/>
            <label htmlFor="menu-btn" for="menu-btn" className="menu-icon">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li>
                    <Link to="#">Header</Link>
                </li>
                <li>
                    <Link to="#">Features</Link>
                </li>
                <li>
                    <Link to="#">Offer</Link>
                </li>
                <li>
                    <Link to="#">About</Link>
                </li>
                <li>
                    <Link to="#">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
