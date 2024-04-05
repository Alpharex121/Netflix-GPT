import React from "react";
import Header from "./Header";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import usePoplularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcoming";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";
import Footer from "./Footer";

const Browse = () => {
  useNowPlayingMovies();
  useTrendingMovies();
  usePoplularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const isGptPage = useSelector((store) => store?.gptSearch?.gptPage);

  return (
    <>
      <Header />
      {isGptPage ? (
        <GptSearchPage />
      ) : (
        <>
          <PrimaryContainer />
          <SecondaryContainer />
        </>
      )}
      <Footer />
    </>
  );
};

export default Browse;
