import React from "react";
import Logo from "../assets/MDE Logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <Link to="/">
                <figure className="logo__wrapper">
                    <img className="logo" src={Logo} alt="" />
                </figure>
            </Link>
            <ul className="nav__link--list">
                <li className="nav__link"><Link to="/" className="nav__link--anchor nav__link--underline">Home</Link></li>
                <li className="nav__link"><Link to={`/movies/spy`} className="nav__link--anchor nav__link--primary">Movies</Link></li>
            </ul>
        </nav>
    );
};

export default Nav; 