import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: {
    background: '#FFFFFF',
    headerBackground: "#4285F4",
    borderColor: '#262628',
    itemBackground:  '#F5F5F5',
    lettersSmall: '#787878',
    lettersBig: '#212121',
    toggleHover: 'white',

  },
  toggleTransform: 'translateX(0)',
  mobile: "768px",
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme(state) {
      state.colors.background = '#000000'
      state.colors.headerBackground = '#1E1E1E';
      state.colors.borderColor = '#262628';
      state.colors.itemBackground = "#1E1E1E";
      state.colors.lettersSmall = '#A2A2A2';
      state.colors.lettersBig = '#E1E1E1';
      state.colors.toggleHover = '#000000';
      state.toggleTransform = 'translateX(30px)'
      state.darkMode = true;
    },
    setDefaultTheme(state) {
      state.colors.background = '#FFFFFF'
      state.colors.headerBackground = '#4285F4';
      state.colors.borderColor = '#262628';
      state.colors.itemBackground = "#F5F5F5";
      state.colors.lettersSmall = '#787878';
      state.colors.lettersBig = '#212121';
      state.colors.toggleHover = '#FFFFFF';
      state.toggleTransform = 'translateX(0)'
      state.darkMode = false;
    },
    setbackground(state, action) { 
      
    }
  },
});


export default themeSlice
