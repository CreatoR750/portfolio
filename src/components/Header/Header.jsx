import React from "react";
import "./header.scss";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
    let navigate = useNavigate();
    return (
        <header className="container">
            <div className="header">
                <h1 onClick={() => navigate("/")}>Anton Strelnikov</h1>
                <div className="header__navbar">
                    <NavLink
                        style={{ textDecoration: "none" }}
                        className={({ isActive }) => (isActive ? "navbar__link active" : "navbar__link")}
                        to="/about-me"
                    >
                        About me
                    </NavLink>
                    <NavLink
                        style={{ textDecoration: "none" }}
                    
                        className={({ isActive }) => (isActive ? "navbar__link active" : "navbar__link")}
                        to="/skills"
                    >
                        Skills
                    </NavLink>
                    <NavLink
                        style={{ textDecoration: "none" }}
                        className={({ isActive }) => (isActive ? "navbar__link active" : "navbar__link")}
                        to="/projects"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        style={{ textDecoration: "none" }}
                        className={({ isActive }) => (isActive ? "navbar__link active" : "navbar__link")}
                        to="/contacts"
                    >
                        Contacts
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
