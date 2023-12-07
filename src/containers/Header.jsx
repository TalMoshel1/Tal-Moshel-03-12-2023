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
        {!isMobile && <h1 className="site-header">Tal Moshel Weather App</h1>}
        <div className={`list-container ${isMobile && 'spread-header-items-evenly'}`}>
          {/* <FavoritesButton/> */}
          <Link to="/" className={`${location.pathname === "home"  && "home"}`}>
            HOME
          </Link>
          <Link
            to="/favorites"
            className={`${location.pathname === "favorites" && "favorites"}`}
          >
            FAVORITES
          </Link>
          <button onClick={handleThemeChange}>CHANGE COLORS!</button>
        </div>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.backgroundColor};
  border: 1px solid ${(props) => props.theme.colors.BorderColor};
  color: ${(props) => props.theme.colors.color};
  border-radius: 2px;

  a { 
    color: ${(props) => props.theme.colors.color};
  }

  a:hover {
    border-bottom: 3px solid ${(props) => props.theme.colors.color};
  
  }

  button { 
    color: ${(props) => props.theme.colors.color};
    transition: color 0.5s;


  }

  button:hover {
    color: ${(props) => props.theme.darkMode === false && 'white' };
    border: 1px solid ${(props) => props.theme.darkMode === false && 'black' }

  }
  
 

`;
