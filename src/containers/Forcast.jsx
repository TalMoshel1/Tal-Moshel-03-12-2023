// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import forcast from "../../five-day-daily-forcast.json";
// import getCurrentWeatherJson from '../../get-current-weather.json'
// import currentWeatherSlice from '../data/currentWeatherSlice'
import "../styles/forecast.css";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import '../styles/changeUnitButton.css'

export function Forecast() {
  const forecast = useSelector((state) => state.forecast);
  const [isC, setIsC] = useState(false)

  

  if (forecast.data.DailyForecasts) {
    return (
      <>
        <button className="changeUnitButton">view in {isC ? 'C': 'F'}</button>
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
      </>
    );
  }
  return <section className="forecast"></section>;
}
