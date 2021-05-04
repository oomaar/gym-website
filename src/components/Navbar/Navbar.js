import { useState } from 'react';
import { Link } from "react-scroll";

import {
    Nav,
    Menu,
    MenuItem,
    MenuBtn,
    MenuIcon,
    NavIcon,
} from "./styledNavbar";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const changeBackground = () => window.scrollY >= 50 ? setNav(true) : setNav(false);
    window.addEventListener('scroll', changeBackground);

    return (
        <Nav className={nav && "active"}>
            <Link to="main" className="logo" smooth={true} duration={300}>
                <img src="/images/logo.png" alt="Logo" />
            </Link>
            <MenuBtn id="menu-btn" className="menu-btn" type="checkbox" />
            <MenuIcon htmlFor="menu-btn" for="menu-btn" className="menu-icon">
                <NavIcon className="nav-icon"></NavIcon>
            </MenuIcon>
            <Menu>
                <MenuItem>
                    <Link to="main" smooth={true} duration={200}>Header</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="features" smooth={true} duration={200}>Features</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="offer" smooth={true} duration={200}>Offer</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="about" smooth={true} duration={200}>About</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="contact" smooth={true} duration={200}>Contact</Link>
                </MenuItem>
            </Menu>
        </Nav>
    );
};

export default Navbar;
