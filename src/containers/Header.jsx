import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import themeSlice from "../data/themeSlice";
import {styled} from 'styled-components'

export function Header() {

  const theme = useSelector((state)=> state.theme)
  const dispatch = useDispatch()
  const {setDefaultTheme, setDarkTheme} = themeSlice.actions

  const location = useLocation()

  console.log(location)


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
        <h1>Tal Moshel Weather App</h1>
        <div>
          <Link to="/" className={`${location.pathname==='/' && '/'}`}>HOME</Link>
          <Link to="/favorites" className={`${location.pathname==='/favorites' && '/favorites'}`}>FAVORITES</Link>
          <button onClick={handleThemeChange}>change themes!</button>
        </div>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.header`

background-color: ${props => props.theme.colors.header};
display: flex;
justify-content: space-between;
align-items: center;
height: 10vh;

h1 {
  margin-left: 1em

}

div {
  margin-right: 1em
}

a {
  border-bottom: 1px solid transparent;
  transition: border 1s ease;
  padding-bottom: 10px;
  text-decoration: none;
  margin-right: 1em


}


a:hover {
  border-bottom: 3px solid black

}

`
