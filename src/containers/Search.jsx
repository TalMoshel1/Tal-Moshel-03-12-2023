import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import hai from '../../get-location-hai-value.json'
import locationSlice from '../data/locationSlice';
import {getLocation} from '../data/locationThunk'
import currentWeatherSlice from '../data/currentWeatherSlice'

export function Search() {
  const [value, setValue] = useState("");
  const {changeLocation} = locationSlice.actions
  const {changeCurrentWeather} = currentWeatherSlice.actions
  const dispatch = useDispatch()
  const {location} = useSelector((state)=>state.location)
  


  const getCity = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
        const location = hai /*hai is the input value I used*/ /*has value of Key=*/
        dispatch(changeLocation(city)) 
        console.log(city)
        // dispatch(changeCurrentWeather(city)) city should be an Id that goes to thunkchangeCurrent
    }
  };



  return (
    <>
      <span>Click enter on icon to search</span>
      <input
        type="text"
        onKeyDown={getCity}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}
