import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
// import locationSlice from "../data/locationSlice";
// import currentWeatherSlice from '../data/currentWeatherSlice'
// import forecastSlice from "../data/forecastSlice";
import { useIsMobile } from "../Context/Context";
import { getLocation } from "../data/locationThunk";

import { Search } from "../containers/Search";
import { Current } from "../containers/Current";
import { Forecast } from "../containers/Forcast";
import { AddToFavorites} from '../containers/AddToVavorites.jsx'
import {Header} from '../containers/Header.jsx'
import '../styles/home.css'
import styled from "styled-components";
import themeSlice from "../data/themeSlice.js";

export function Home() {

  const isMobile = useIsMobile()
  const theme = useSelector((state) => state.theme);

  return (
    <HomeStyle className='home'>
      <div className='search-current-container'>
      <Search />
      <Current />
      {/* {isMobile && <AddToFavorites />} */}
      </div>
      <Forecast />
      {/* {isMobile && <Header/>} */}
    </HomeStyle>
  );
}

const HomeStyle = styled.div`

    background-color: ${(props) => props.theme.colors.background};
  
`

