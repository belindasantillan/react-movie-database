import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import MovieInfo from "../components/ui/MovieInfo";
import SkeletonLoading from "../components/ui/SkeletonLoading";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const MoviesInfo = () => {
  const { imdbID } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setSearchKeyword] = useState();
  const navigate = useNavigate();

  function navigateOnEnterIfKeyword(event) {
    if (keyword) {
      event.key === "Enter" && navigate(`/movies/${keyword}`);
    }
  }

  async function fetchMovieInfo() {
    setLoading(true);
    const { data } = await axios.get(
      `https://omdbapi.com/?apikey=3846bb22&i=${imdbID}`
    );
    setMovieInfo(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovieInfo();
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
                placeholder="Search by Keyword"
                onChange={(event) => setSearchKeyword(event.target.value)}
                onKeyUp={(event) => navigateOnEnterIfKeyword(event)}
              />
              <button
                className="movies__search--btn"
                disabled={!keyword}
                onClick={() => navigate(`/movies/${keyword}`)}
              >
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </div>
          <div className="movies__link" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon="arrow-left" /> Go back
          </div>
          <div className="movies__section--wrapper">
            <h2 className="movies__search-results">Movie Information: </h2>
            <div className="movies__list">
              {loading ? (
                <SkeletonLoading />
              ) : (
                <MovieInfo movieInfo={movieInfo} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviesInfo;
