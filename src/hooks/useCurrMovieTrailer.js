import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addCurrMovieTrailer } from "../utils/movieSlice";

const useCurrMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = await json.results.filter(
      (video) => video.type === "Trailer"
    );
    const videoKey = filterData[0];
    dispatch(addCurrMovieTrailer(videoKey));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useCurrMovieTrailer;
