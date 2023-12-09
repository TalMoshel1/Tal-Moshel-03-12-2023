import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import themeSlice from "../data/themeSlice";
import { styled } from "styled-components";
import "../styles/header.css";
import { useIsMobile } from "../Context/Context.jsx";
import { ToggleTheme } from "../components/ToggleTheme.jsx";
import {Animation} from "./Animation.jsx";

export function Header() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const { setDefaultTheme, setDarkTheme } = themeSlice.actions;

  const location = useLocation();
  const isMobile = useIsMobile();


  const handleThemeChange = () => {
    if (theme.darkMode) {
      dispatch(setDefaultTheme());
      console.log('need to change')
    } else {
      dispatch(setDarkTheme());

    }
  };

  return (
    <>
      <HeaderContainer className={isMobile && 'sticky-header'}>
      <Animation className='animation'></Animation>
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
          {/* <button className='change-colors' onClick={handleThemeChange}>CHANGE COLORS!</button> */}
          <ToggleTheme/>
        </div>
    
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.header`
background-color: ${(props) => props.theme.colors.headerBackground};
border: 1px solid ${(props) => props.theme.colors.borderColor};
color: ${(props) => props.theme.colors.lettersBig};
border-radius: 2px;
position: sticky;

  a { 
    color: ${(props) => props.theme.colors.lettersBig};
    border: 1px solid ${(props) => props.theme.colors.headerBackground};
    z-index: 1;

  }

  a:hover {
    border-bottom: 3px solid ${(props) => props.theme.colors.lettersBig};
  }

  .change-colors { 
    color: ${(props) => props.theme.colors.lettersBig};
    cursor: pointer;
    transition: color 0.3s;
  }

  .change-colors:hover {
    color: ${(props) => props.theme.colors.lettersSmall};
  }





  
 

`;


// const Animation = styled.div`

// position: relative;
//     right: 10px;
// }
// `