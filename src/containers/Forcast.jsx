// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import forcast from "../../five-day-daily-forcast.json";
// import getCurrentWeatherJson from '../../get-current-weather.json'
// import currentWeatherSlice from '../data/currentWeatherSlice'
import { Card } from "../components/Card";
import { useEffect, useState } from "react";

export function Forecast() {
  // const {changeCurrentWeather} = currentWeatherSlice.actions

  // const dispatch = useDispatch()

  const location  = useSelector((state) => state.location);
  const current = useSelector((state) => state.current);
  const forecast = useSelector((state)=> state.forecast)
  const [props, setProps] = useState();

  useEffect(() => {

    if (current.data.Temperature.Metric.Value) {
      console.log('??')
    } else {
      console.log('!!!')
    }
    
    // if (current.data.value) {
    //   setProps({
    //     value: current.data.Temperature.Metric.Value,
    //     unit: current.data.Temperature.Metric.Unit,
    //     weatherText: current.data.WeatherText,
    //     localizedName: location.data.LocalizedName
  
    //   });
    // }


    

  }, [current.data]);

  useEffect(()=>{
    if (props) {
      console.log('props: ',props)
    }
  },[props])

  return (
    <section>
      {}
      {/* {forcast.DailyForecasts.map((day) => {
        return <Card date={day.Date} localizedName={location.LocalizedName} value={value} weatherText={weatherText} unit={unit}/>;
      })} */}
    </section>
  );
}
