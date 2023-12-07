// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import forcast from "../../five-day-daily-forcast.json";
// import getCurrentWeatherJson from '../../get-current-weather.json'
// import currentWeatherSlice from '../data/currentWeatherSlice'
import "../styles/forecast.css";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import { getForecast } from "../data/forecastThunk";
import { useDispatch } from "react-redux";
import '../styles/changeUnitButton.css'
import {useIsCUnit} from '../Context/IsCunit'

export function Forecast() {
  const forecast = useSelector((state) => state.forecast);
  const location = useSelector((state) => state.location)
  const dispatch = useDispatch()

  const isCUnit = useIsCUnit()

  const handleChangeUnit = () => {
    if (isCUnit === true) {
      dispatch(getForecast({ isMetric: false, cityKey: location.data.Key }))
      console.log('need F')
    } else if (isCUnit === false) {
      console.log('need C')
      dispatch(getForecast({ isMetric: true, cityKey: location.data.Key }))
    }
  }

  if (forecast.fetchStatus === "error") {
    return <p>Error getting the data</p>
  }

  if (forecast.fetchStatus === "loading") {
    return <p>Spinner</p>

  }

  if (forecast.data?.DailyForecasts) {
    return (
      <div className='forecast-container'>
        <button className="changeUnitButton" onClick={handleChangeUnit}>view in {isCUnit ? 'F' : 'C'}</button>
        <section className="forecast">
          {forecast.data.DailyForecasts.map((day) => {
            return (
              <Card
                
                Icon={day.Day.Icon}
                IconPhrase={day.Day.IconPhrase}
                date={day.Date}
                minValue={day.Temperature.Minimum.Value}
                unit={day.Temperature.Minimum.Unit}
                maxValue={day.Temperature.Maximum.Value}
              />
            );
          })}
        </section>
      </div>
    );
  }
}
