import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: {
    body: '#ebfbff',
    backgroundColor: "#d2f6ff",
    BorderColor: '#003c2a',
    color: '#003c2a',
    footer: "#003333",
  },
  mobile: "768px",
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme(state) {
      state.colors.header = "#324B50";
      state.colors.body = "#445155";
      state.darkMode = true;
    },
    setDefaultTheme(state) {
      state.colors.header = "#ebfbff";
      state.colors.body = "#fff";
      state.darkMode = false;
    },
  },
});


export default themeSlice
