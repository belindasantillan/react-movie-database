import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import noImage from "../../assets/No Image.png";

const MovieInfo = ({ movieInfo }) => {
  console.log(movieInfo.Ratings);

  return (
    <div className="movie__info">
      <figure className="movie__img--wrapper">
        {movieInfo.Poster === "N/A" ? (
          <img src={noImage} className="movie__info--img" alt="" />
        ) : (
          <img src={movieInfo.Poster} className="movie__info--img" alt="" />
        )}
      </figure>
      <div className="movie__info--wrapper">
        <h3 className="movie__info--title">
          {movieInfo.Title.length > 50
            ? `${movieInfo.Title.substring(0, 50)}...`
            : movieInfo.Title}
        </h3>
        <p className="movie__info--summary">
          {movieInfo.Plot.length > 250
            ? `${movieInfo.Plot.substring(0, 250)}...`
            : movieInfo.Plot}{" "}
        </p>
        <div className="movie__sub-info--wrapper">
          <h6 className="movie__sub-info">Director: {movieInfo.Director}</h6>
          <h6 className="movie__sub-info">Actors: {movieInfo.Actors}</h6>
          <h6 className="movie__sub-info">Rated: {movieInfo.Rated}</h6>
          <h6 className="movie__sub-info">Run Time: {movieInfo.Runtime}</h6>
          <h6 className="movie__sub-info">Released: {movieInfo.Released}</h6>
          <h6 className="movie__sub-info">Genre: {movieInfo.Genre}</h6>
        </div>
        <div>
          <FontAwesomeIcon icon="star" className="movie__sub-info--rating" />
          {movieInfo.Ratings.length === 0 ? "N/A" : movieInfo.Ratings[0].Value}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
