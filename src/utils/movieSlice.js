import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trendingMovies: null,
    topRatedMovies: null,
    popularMovies: null,
    movieTrailer: null,
    currentMovieInfo: null,
    currMovieTrailer: null,
    showMovieInfo: false,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    changeShowMovieInfo: (state, action) => {
      state.showMovieInfo = action.payload;
    },
    addCurrentmovieInfo: (state, action) => {
      state.currentMovieInfo = action.payload;
    },
    addCurrMovieTrailer: (state, action) => {
      state.currMovieTrailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addTopRatedMovies,
  addTrendingMovies,
  addPopularMovies,
  addUpcomingMovies,
  changeShowMovieInfo,
  addCurrentmovieInfo,
  addCurrMovieTrailer,
} = movieSlice.actions;

export default movieSlice.reducer;
