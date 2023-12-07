import React from "react";
import Example from "../../assets/Movie Background.png";


const Movie = () => {
    return (
        <div className="movie">
            <figure className="movie__img--wrapper">
                <img src={Example} className="movie__img" alt="" />
            </figure>
            <div className="movie__content--wrapper">
                <h3 className="movie__title">movie.Title</h3>
                <h6 className="movie__year">Year Released: movie.Year</h6>
            </div>
        </div>
    );
};

export default Movie; 