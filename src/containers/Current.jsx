import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import getCurrentWeatherJson from '../../get-current-weather.json'
import currentWeatherSlice from '../data/currentWeatherSlice'

export function Current() {
    const {changeCurrentWeather} = currentWeatherSlice.actions
  const { location } = useSelector((state) => state.location);
  const dispatch = useDispatch()


  useEffect(()=>{
    console.log(location) /* location.key is what need be searched on Thunk function:
    `http://dataservice.accuweather.com/currentconditions/v1/${location.key}`*/
    // dispatch(changeCurrentWeather())
  },[location])



  return (
    <section>
        <h1>{location.LocalizedName}</h1>
        <h2>{getCurrentWeatherJson[0].WeatherText}</h2>
        <h2>{getCurrentWeatherJson[0].Temperature.Metric.Value} {getCurrentWeatherJson[0].Temperature.Metric.Unit}</h2>

    </section>
      )
}
