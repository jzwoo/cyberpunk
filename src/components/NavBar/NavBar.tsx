import React from "react";
import {NavLink} from "react-router-dom";
import "./NavBar.css";

const NavBar: React.FC = () => {
    return (
        <nav className="navBar">
            <ul>
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/store" className={({isActive}) => isActive ? "active" : ""}>
                        Store
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={({isActive}) => isActive ? "active" : ""}>
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;