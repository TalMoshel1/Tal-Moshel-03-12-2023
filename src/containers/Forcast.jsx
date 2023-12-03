import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import forcast from "../../five-day-daily-forcast.json";
import { Card } from "../components/Card";


export function Forecast() {


  return (
    <section>
      {forcast.DailyForecasts.map((day) => {
        return <Card date={day.Date}/>;
      })}
    </section>
  );
}
