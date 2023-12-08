import React from "react";
import { Link } from "react-router-dom";


const Movie = ({ movie }) => {
    return (
        <div className="movie">
            <Link to={`/movies/${movie.imdbID}`} className="movie__img--wrapper">
                <img src={movie.Poster} className="movie__img" alt="" />
            </Link>
            <div className="movie__content--wrapper">
                <Link to={`/movies/${movie.imdbID}`} >
                <h3 className="movie__title">{movie.Title}</h3>
                </Link>
                <h6 className="movie__year">Year Released: {movie.Year}</h6>
            </div>
        </div>
    );
};

export default Movie; 