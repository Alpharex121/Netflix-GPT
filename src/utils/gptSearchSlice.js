import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    gptPage: false,
    movieNames: null,
    movieDetail: null,
  },
  reducers: {
    changeGptPage: (state) => {
      state.gptPage = !state.gptPage;
    },

    addGptMovie: (state, action) => {
      const { movieNames, movieDetail } = action.payload;
      state.movieNames = movieNames;
      state.movieDetail = movieDetail;
    },
  },
});

export const { changeGptPage, addGptMovie } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
