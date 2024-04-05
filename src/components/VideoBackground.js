import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import "../css/videobackground.css";

const VideoBackground = (movieId) => {
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);
  useMovieTrailer(movieId);

  return (
    <div className="video-background-cont">
      <iframe
        className="trailer-video-frame"
        width="560"
        height="315"
        src={
          "https://www.youtube.com/embed/" +
          movieTrailer?.key +
          "?&autoplay=1&mute=1&controls=0&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
