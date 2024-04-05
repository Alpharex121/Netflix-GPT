import React from "react";
import { BG_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovies from "./GptMovies";
import "../css/gptsearchpage.css";

const GptSearchPage = () => {
  return (
    <div>
      <div className="gptsearch-bg-img">
        <img src={BG_IMG} alt="bg-img" />
      </div>
      <div>
        <GptSearchBar />
        <GptMovies />
      </div>
    </div>
  );
};

export default GptSearchPage;
