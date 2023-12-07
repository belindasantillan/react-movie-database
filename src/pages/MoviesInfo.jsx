import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MovieInfo from "../components/ui/MovieInfo";
import { Link } from "react-router-dom";

const MoviesInfo = () => {
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
                    <Link to="/movies" className="movies__link">
                        <FontAwesomeIcon icon="arrow-left" /> Go back
                    </Link>
                    <div className="movies__section--wrapper">
                        <h2 className="movies__search-results">Movie Information: </h2>
                        <div className="movies__list">
                            <MovieInfo />
                        </div>
                    </div>
                </div>
            </div>
      </section>
    );
};

export default MoviesInfo; 