// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import forcast from "../../five-day-daily-forcast.json";
// import getCurrentWeatherJson from '../../get-current-weather.json'
// import currentWeatherSlice from '../data/currentWeatherSlice'
import { Card } from "../components/Card";



export function Forecast() {

// const {changeCurrentWeather} = currentWeatherSlice.actions

// const dispatch = useDispatch()

const { location } = useSelector((state) => state.location);
const {current} = useSelector((state)=>state.current)

// useEffect(()=>{
//   dispatch(changeCurrentWeather(location.key))
// },[])

const value = current.Temperature.Metric.Value
const unit = current.Temperature.Metric.Unit
const weatherText = current.WeatherText


  return (
    <section>
      {forcast.DailyForecasts.map((day) => {
        return <Card date={day.Date} localizedName={location.LocalizedName} value={value} weatherText={weatherText} unit={unit}/>;
      })}
    </section>
  );
}
