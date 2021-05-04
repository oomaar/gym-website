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

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        };
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <Nav className={nav && "active"}>
            <Link to="#" className="logo">
                <img src="/images/logo.png" alt="Logo" />
            </Link>
            <MenuBtn id="menu-btn" className="menu-btn" type="checkbox" />
            <MenuIcon htmlFor="menu-btn" for="menu-btn" className="menu-icon">
                <NavIcon className="nav-icon"></NavIcon>
            </MenuIcon>
            <Menu>
                <MenuItem>
                    <Link to="#">Header</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="#">Features</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="#">Offer</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="#">About</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="#">Contact</Link>
                </MenuItem>
            </Menu>
        </Nav>
    );
};

export default Navbar;
