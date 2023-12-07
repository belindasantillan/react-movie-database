import React from "react";
import Example from "../../assets/Movie Background.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MovieInfo = () => {
    return (
        <div className="movie__info">
            <figure className="movie__img--wrapper">
                <img src={Example} className="movie__info--img" alt="" />
            </figure>
            <div className="movie__content--wrapper">
                <h3 className="movie__info--title">Hunger Games</h3>
                <p className="movie__info--summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptate, iure praesentium nihil recusandae aut molestias ut deserunt. Eos, esse.</p>
                <div className="movie__sub-info">
                <h6 className="movie__info--rated">Rated: PG-13</h6>
                <h6 className="movie__info--runtime">Run Time: 146 mins</h6>
                </div>
                <div className="movie__rating">
                    <FontAwesomeIcon icon="star" />
                    <FontAwesomeIcon icon="star" />
                    <FontAwesomeIcon icon="star" />
                    <FontAwesomeIcon icon="star" />
                    <FontAwesomeIcon icon="star-half-alt"/>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo; 