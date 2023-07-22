import React from "react";
import "./NavBar.css";

const NavBar: React.FC = () => {
    return (
        <div className="navBar">
            <div>
                HOME
            </div>

            <div>
                STORE
            </div>

            <div>
                CART
            </div>

            <div>
                LOGIN
            </div>
        </div>
    )
}

export default NavBar;