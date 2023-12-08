import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MovieInfo = ({ movieInfo}) => {

    return (
        <div className="movie__info">
            <figure className="movie__img--wrapper">
                <img src={movieInfo.Poster} className="movie__info--img" alt="" />
            </figure>
            <div className="movie__info--wrapper">
                <h3 className="movie__info--title">{movieInfo.Title}</h3>
                <p className="movie__info--summary">{movieInfo.Plot}</p>
                <div className="movie__sub-info--wrapper">
                <h6 className="movie__sub-info">Director: {movieInfo.Director}</h6>
                <h6 className="movie__sub-info">Rated: {movieInfo.Rated}</h6>
                <h6 className="movie__sub-info">Run Time: {movieInfo.Runtime}</h6>
                <h6 className="movie__sub-info">Released: {movieInfo.Released}</h6>
                <h6 className="movie__sub-info">Genre: {movieInfo.Genre}</h6>
                </div>
                <div>
                    <FontAwesomeIcon icon="star" className="movie__sub-info--rating" />
                </div>
            </div>
        </div>
    );
};

export default MovieInfo; 