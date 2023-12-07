import React from "react";
import HeaderImg from "../assets/Landing Background IMG.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
    return (
        <header>
            <div className="header__content--wrapper">
                <h1 className="header__title">All your favorite movies in one place</h1>
                <h2 className="header__sub-title">Explore now</h2>
                <div className="header__search--wrapper">
                    <input className="header__search search" type="text" placeholder="Search by Keyword" onChange="(event) => onSearch(event.target.value)"/>
                    <button className="search__btn"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="home__search" /><FontAwesomeIcon icon="fa-solid fa-spinner" className="spinner" /></button>
                </div>
            </div>
            <figure className="header__img--wrapper">
                <img className="header__img" src={HeaderImg} alt="" />
            </figure>
        </header>
    );
};

export default Home; 