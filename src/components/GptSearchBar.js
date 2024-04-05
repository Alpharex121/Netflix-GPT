import React, { useRef } from "react";
import "../css/gptsearchpage.css";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovie } from "../utils/gptSearchSlice";

const GptSearchBar = () => {
  const currLang = useSelector((store) => store?.language?.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieFromTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearchBtn = async () => {
    const query =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separed like the example result given ahead. Example Result: Sholay, Golmaal, Fukrey, Jawan, Raone";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) return null;

    const gptMovieList = gptResults.choices[0]?.message?.content.split(",");

    const promiseArray = gptMovieList.map((movie) =>
      searchMovieFromTMDB(movie)
    );

    const finalResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovie({ movieNames: gptMovieList, movieDetail: finalResults })
    );
  };

  return (
    <div className="gptsearchbar">
      <form
        action=""
        className="gpt-search-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[currLang].placeholder}
          ref={searchText}
        />
        <button className="gpt-search-btn" onClick={handleSearchBtn}>
          {lang[currLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
