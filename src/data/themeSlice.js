import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: {
    backgroundColor: '#FFFFFF',
    headerBackground: "#4285F4",
    borderColor: '#262628',
    itemBackground:  '#F5F5F5',
    lettersSmall: '#787878',
    lettersBig: '#212121',
    darkModelettersBig: '#E1E1E1',
    lightModelettersBig: '#E1E1E1',

  },
  mobile: "768px",
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme(state) {
      state.colors.backgroundColor = '#000000'
      state.colors.headerBackground = "#1E1E1E";
      state.colors.borderColor = '#262628';
      state.colors.itemBackground = "#1E1E1E";
      state.colors.lettersSmall = '#A2A2A2';
      state.colors.lettersBig = '#E1E1E1';
      state.colors.lightModelettersBig = '#212121';

      state.darkMode = true;
    },
    setDefaultTheme(state) {
      state.colors.backgroundColor = '#FFFFFF'
      state.colors.headerBackground = "#4285F4";
      state.colors.borderColor = '#262628';
      state.colors.itemBackground = "#F5F5F5";
      state.colors.lettersSmall = '#787878';
      state.colors.lettersBig = '#212121';
      state.colors.darkModelettersBig = '#E1E1E1';
      state.darkMode = false;
    },
  },
});


export default themeSlice
