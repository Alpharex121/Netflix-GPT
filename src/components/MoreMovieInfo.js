import React from "react";
import "../css/movieinfo.css";
import useCurrMovieTrailer from "../hooks/useCurrMovieTrailer";
import { useDispatch, useSelector } from "react-redux";
import { changeShowMovieInfo } from "../utils/movieSlice";
const MoreMovieInfo = () => {
  const dispatch = useDispatch();
  const currMovie = useSelector((store) => store.movies.currentMovieInfo);
  useCurrMovieTrailer(currMovie.id);
  const currMovieTreailerKey = useSelector(
    (store) => store.movies.currMovieTrailer
  );

  if (!currMovieTreailerKey) return;
  const trailerKey = currMovieTreailerKey.key;

  console.log(currMovie);
  const { title, overview, original_language, release_date, vote_average } =
    currMovie;

  const handleClose = () => {
    dispatch(changeShowMovieInfo(false));
  };

  return (
    <div className="show-movie-info-cont">
      <div className="video-background-cont">
        <iframe
          className="trailer-video-frame"
          width="560"
          height="315"
          src={
            "https://www.youtube.com/embed/" +
            trailerKey +
            "?&autoplay=1&mute=1&controls=0&loop=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="movie-detail-cont">
        <h1>{title}</h1>
        <h3>{overview}</h3>
        <h5>Language: {original_language}</h5>
        <h5>Release Date: {release_date}</h5>
        <h5>Rating: {vote_average} ⭐</h5>
      </div>
      <div className="close-btn">
        <button onClick={handleClose}>❌</button>
      </div>
    </div>
  );
};

export default MoreMovieInfo;
