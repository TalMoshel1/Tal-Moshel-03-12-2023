// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import forcast from "../../five-day-daily-forcast.json";
// import getCurrentWeatherJson from '../../get-current-weather.json'
// import currentWeatherSlice from '../data/currentWeatherSlice'
import "../styles/forecast.css";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";

export function Forecast() {
  const forecast = useSelector((state) => state.forecast);



  if (forecast.data.DailyForecasts) {
    return (
      <section className="forecast">
        {forecast.data.DailyForecasts.map((day) => {
          return (
            <Card
              Icon={day.Day.Icon}
              IconPhrase={day.Day.IconPhrase}
              date={day.Date}
              value={day.Temperature.Minimum.Value}
              unit={day.Temperature.Minimum.Unit}
            />
          );
        })}
      </section>
    );
  }
  return (
    <section className="forecast">

    </section>
  );
}
