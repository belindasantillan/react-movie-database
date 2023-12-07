import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Movie from "../components/ui/Movie";

const Movies = () => {
    return (
        <section id="movies__main">
            <div className="movies__background">
            <div className="movies__container">
                <div className="movies__header">
                <label className="movies__label">Explore Movies</label>
                <div>
                    <input className="movies__search search" type="text" placeholder="Search by Keyword" onChange="(event) => onSearchMovies(event.target.value)"/>
                    <button className="movies__search--btn"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button>
                </div>
                </div>
                <div className="movies__section--wrapper">
                <h2 className="movies__search-results">Search Results: </h2>
                    <div className="movies__list">
                    <Movie />
                    </div>
                </div>
            </div>
            </div>
      </section>
    );
};

export default Movies; 