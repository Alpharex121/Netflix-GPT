import React from "react";
import { MOVIE_IMG_URL } from "../utils/constants";
import "../css/moviecart.css";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentmovieInfo, changeShowMovieInfo } from "../utils/movieSlice";
import MoreMovieInfo from "./MoreMovieInfo";
const MovieCard = ({ poster_path, movieDetail }) => {
  const dispatch = useDispatch();

  // console.log(poster_path);
  const handleMovieClick = () => {
    dispatch(changeShowMovieInfo(true));
    dispatch(addCurrentmovieInfo(movieDetail));
  };

  if (!poster_path) return;

  return (
    <div className="movie-card-cont">
      <img
        src={MOVIE_IMG_URL + poster_path}
        alt="Movie Poster"
        onClick={handleMovieClick}
      />
    </div>
  );
};

export default MovieCard;
