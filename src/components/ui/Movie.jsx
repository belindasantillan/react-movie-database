import React from "react";
import { Link } from "react-router-dom";
import noImage from "../../assets/No Image.png";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <Link to={`/movies/info/${movie.imdbID}`} className="movie__img--wrapper">
        {movie.Poster === "N/A" ? (
          <img src={noImage} className="movie__img" alt="" />
        ) : (
          <img src={movie.Poster} className="movie__img" alt="" />
        )}
      </Link>
      <div className="movie__content--wrapper">
        <Link to={`/movies/info/${movie.imdbID}`}>
          <h3 className="movie__title">
            {movie.Title.length > 30
              ? `${movie.Title.substring(0, 30)}...`
              : movie.Title}
          </h3>
        </Link>
        <h6 className="movie__year">Year Released: {movie.Year}</h6>
      </div>
    </div>
  );
};

export default Movie;
