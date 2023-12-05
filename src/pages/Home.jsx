import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
// import locationSlice from "../data/locationSlice";
// import currentWeatherSlice from '../data/currentWeatherSlice'
// import forecastSlice from "../data/forecastSlice";
import { useIsMobile } from "../Context/Context";
import { getLocation } from "../data/locationThunk";
import { getCurrent } from "../data/currentThunk";
import { getForecast } from "../data/forecastThunk";


import { Search } from "../containers/Search";
import { Current } from "../containers/Current";
import { Forecast } from "../containers/Forcast";
import { AddToFavorites} from '../containers/AddToVavorites.jsx'
import {Header} from '../containers/Header.jsx'
import '../styles/home.css'
import styled from "styled-components";

export function Home() {


  const isMobile = useIsMobile()

  console.log('is mobile from home: ', isMobile)

  return (
    <div className='home'>
      <div>
      <Search />
      <Current />
      {isMobile && <AddToFavorites />}
      </div>
      <Forecast />
      {isMobile && <Header/>}

    </div>
  );
}

