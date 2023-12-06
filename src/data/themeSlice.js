import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: {
    header: "#ebfbff",
    headerBorderColor: '#9fecff',
    body: "black",
    footer: "#003333",
    color: '#00566e'
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
