import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
// import locationSlice from "../data/locationSlice";
// import currentWeatherSlice from '../data/currentWeatherSlice'
// import forecastSlice from "../data/forecastSlice";

import {getLocation} from "../data/locationThunk";
import {getCurrent} from '../data/currentThunk'
import {getForecast} from "../data/forecastThunk";



import { Search } from "../containers/Search";
import { Current } from "../containers/Current";
import { Forecast } from "../containers/Forcast";
import { useEffect } from "react";



export function Home() {
  // const dispatch = useDispatch();
  // const  location = useSelector((state) => state.location);
  // const  current = useSelector((state) => state.current);
  // const  forecast = useSelector((state) => state.forecast);


  // useEffect(() => {
  //   dispatch(getLocation("tel aviv"));
  // }, []);
  
  // useEffect(() => {
  //   if (location.data.Key) {
  //     dispatch(getCurrent(location.data.Key));
  //     dispatch(getForecast(location.data.Key));

  //   }
  // }, [location.data]);
  


 


  return (
    <main>
       <Search />
        <Current/>
       <Forecast /> 
    </main>
  );
}