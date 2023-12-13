import React from "react";

const skeletonLoading = () => {
  return (
    <div className="movie__info info__skeleton--wrapper">
      <figure className="movie__img--wrapper">
        <div className="skeleton info__skeleton--img"></div>
      </figure>
      <div className="movie__info--wrapper">
        <div className="skeleton info__skeleton--title"></div>
        <div className="skeleton info__skeleton--para"></div>
        <div className="movie__sub-info--wrapper">
          <div className="skeleton info__skeleton"></div>
          <div className="skeleton info__skeleton"></div>
          <div className="skeleton info__skeleton"></div>
          <div className="skeleton info__skeleton"></div>
          <div className="skeleton info__skeleton"></div>
          <div className="skeleton info__skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export default skeletonLoading;
