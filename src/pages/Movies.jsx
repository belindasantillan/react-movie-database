import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Movie from "../components/ui/Movie";
import Results from "../assets/Results IMG.png";
import axios from "axios";
import { useParams } from "react-router-dom";

const Movies = () => {
  const { keySearch } = useParams();
  const [movies, setMovies] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState(keySearch);
  const [loading, setLoading] = useState(true);

  function onSearch() {
    window.location.href = `/movies/${searchKeyword}`;
  }

  function noResultsBanner() {
    return (
      <figure className="results__banner--wrapper">
        <img src={Results} className="results__banner" alt="" />
      </figure>
    );
  }

  function skeletonLoading(index) {
    return (
      <div className="movie" key={index}>
        <div className="movie__img--wrapper">
          <div className="skeleton movie__img"></div>
        </div>
        <div className="movie__content--wrapper">
          <div className="skeleton skeleton__title"></div>
          <div className="skeleton skeleton__year"></div>
        </div>
      </div>
    );
  }

  async function fetchMovie() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=3846bb22&s=${keySearch}`
    );
    setMovies(data.Search);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <section id="movies__main">
      <div className="movies__background">
        <div className="movies__container">
          <div className="movies__header">
            <label className="movies__label">Explore Movies</label>
            <div>
              <input
                className="movies__search search"
                type="text"
                value={searchKeyword}
                placeholder="Search by Keyword"
                onChange={(event) => setSearchKeyword(event.target.value)}
                onKeyUp={(event) => event.key === "Enter" && onSearch()}
              />
              <button
                className="movies__search--btn"
                disabled={!searchKeyword}
                onClick={() => onSearch()}
              >
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </div>
          <div className="movies__section--wrapper">
            <h2 className="movies__search-results">Search Results: </h2>
            <div className="movies__list">
              {loading
                ? new Array(6).fill(0).map((_, index) => skeletonLoading(index))
                : movies
                ? movies
                    .map((movie) => <Movie movie={movie} key={movie.imdbID} />)
                    .slice(0, 6)
                : noResultsBanner()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;
