import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import themeSlice from "../data/themeSlice";
import { styled } from "styled-components";
import "../styles/header.css";
import { useIsMobile } from "../Context/Context.jsx";

export function Header() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const { setDefaultTheme, setDarkTheme } = themeSlice.actions;

  const location = useLocation();
  const isMobile = useIsMobile();

  console.log('from header! ',isMobile)


  const handleThemeChange = () => {
    if (theme.darkMode) {
      dispatch(setDefaultTheme());
    } else {
      return dispatch(setDarkTheme());
    }
  };

  return (
    <>
      <HeaderContainer className={isMobile && 'sticky-header'}>
        <h1 className="site-header">Tal Moshel Weather App</h1>
        <div className="list-conrtainer">
          {/* <FavoritesButton/> */}
          <Link to="/" className={`${location.pathname === "home" && "home"}`}>
            HOME
          </Link>
          <Link
            to="/favorites"
            className={`${location.pathname === "favorites" && "favorites"}`}
          >
            FAVORITES
          </Link>
          <button onClick={handleThemeChange}>change themes!</button>
        </div>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.header};
 

`;
