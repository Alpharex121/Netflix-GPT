import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import "../css/gptsearchpage.css";

const GptMovies = () => {
  const { movieNames, movieDetail } = useSelector((store) => store.gptSearch);
  console.log(movieDetail);
  if (!movieNames) return;

  return (
    <div className="gpt-movies-cont">
      {movieNames.map((movieNames, index) => (
        <MovieList
          key={movieNames}
          title={movieNames}
          movies={movieDetail[index]}
        />
      ))}
    </div>
  );
};

export default GptMovies;
