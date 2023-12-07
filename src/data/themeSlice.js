import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: {
    body: '#ebfbff',
    backgroundColor: "#d2f6ff",
    pageBackgroundColor: '#d2f6ff',
    elemnetBackgroundColor:  'rgba(255, 255, 255, 0.3)',
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
      state.color.backgroundColor = '#000000'
      state.colors.headerBackground = "#1E1E1E";
      state.colors.itemBackground = "#1E1E1E";
      state.colors.lettersSmall = '#A2A2A2';
      state.colors.lettersBig = '#E1E1E1'
      state.darkMode = true;
    },
    setDefaultTheme(state) {
      state.color.backgroundColor = '#FFFFFF'
      state.colors.headerBackground = "#6200EE";
      state.colors.itemBackground = "#FFFFFF";
      state.colors.lettersSmall = '#787878';
      state.colors.lettersBig = '#212121'
      state.darkMode = false;
    },
  },
});


export default themeSlice
