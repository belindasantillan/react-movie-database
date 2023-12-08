import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import MovieInfo from "../components/ui/MovieInfo";
import SkeletonLoading from "../components/ui/SkeletonLoading";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MoviesInfo = () => {
    const { imdbID } = useParams();
    const [movieInfo, setMovieInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchMovieInfo() {
        setLoading(true);
        const { data } = await axios.get(`https://omdbapi.com/?apikey=3846bb22&i=${imdbID}`);
        setMovieInfo(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchMovieInfo()
    }, []);

    return (
        <section id="movies__main">
            <div className="movies__background">
                <div className="movies__container">
                    <div className="movies__header">
                        <label className="movies__label">Explore Movies</label>
                        <div>
                            <input className="movies__search search" type="text" placeholder="Search by Keyword" />
                            <button className="movies__search--btn"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button>
                        </div>
                    </div>
                    <Link to="/movies" className="movies__link">
                        <FontAwesomeIcon icon="arrow-left" /> Go back
                    </Link>
                    <div className="movies__section--wrapper">
                        <h2 className="movies__search-results">Movie Information: </h2>
                        <div className="movies__list">
                            {loading ? (<SkeletonLoading />) : (<MovieInfo movieInfo={movieInfo} />) }
                        </div>
                    </div>
                </div>
            </div>
      </section>
    );
};

export default MoviesInfo; 