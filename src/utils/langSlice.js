import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "lang",
  initialState: {
    language: "en",
  },
  reducers: {
    changeLang: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLang } = languageSlice.actions;
export default languageSlice.reducer;
