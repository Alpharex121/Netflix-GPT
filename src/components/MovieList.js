import React from "react";
import MovieCard from "./MovieCard";
import "../css/movieslist.css";
import MoreMovieInfo from "./MoreMovieInfo";
import { useSelector } from "react-redux";

const MovieList = ({ title, movies }) => {
  const showMovieInfo = useSelector((store) => store.movies.showMovieInfo);
  if (!movies) return;
  return (
    <div className="movie-list-start">
      <h1>{title}</h1>
      <div className="movie-list-cont">
        <div className="movie-lists">
          {movies.map((movie) => (
            <div key={movie.id}>
              <MovieCard
                poster_path={movie.poster_path}
                movieDetail={movie}
                key={movie.id}
              />
            </div>
          ))}

          {showMovieInfo && <MoreMovieInfo />}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
