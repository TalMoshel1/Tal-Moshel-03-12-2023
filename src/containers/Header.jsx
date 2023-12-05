import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import themeSlice from "../data/themeSlice";
import {styled} from 'styled-components'
import '../styles/header.css'
import { useEffect, useState } from "react";

export function Header() {

  const theme = useSelector((state)=> state.theme)
  const dispatch = useDispatch()
  const {setDefaultTheme, setDarkTheme} = themeSlice.actions

  const location = useLocation()



  const handleThemeChange = () => {
    if (theme.darkMode) {
       dispatch(setDefaultTheme())
    } else {
      return dispatch(setDarkTheme())
    }
  }



   

      return (
        <>
          <HeaderContainer>
            <h1 className='site-header'>Tal Moshel Weather App</h1>
            <div className='list-conrtainer'>
              <Link to="/" className={`${location.pathname==='home' && 'home'}`}>HOME</Link>
              <Link to="/favorites" className={`${location.pathname === 'favorites' && 'favorites'}`}>FAVORITES</Link>
              <button onClick={handleThemeChange}>change themes!</button>
            </div>
          </HeaderContainer>
        </>
      );
    


}

const HeaderContainer = styled.header`

background-color: ${props => props.theme.colors.header};

`
