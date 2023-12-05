// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import forcast from "../../five-day-daily-forcast.json";
// import getCurrentWeatherJson from '../../get-current-weather.json'
// import currentWeatherSlice from '../data/currentWeatherSlice'
import '../styles/forecast.css'
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
    } /* the issue was the intial state wasn't setted up correctly*/
    
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
    <section className='forecast'>
      {/* {forcast.DailyForecasts.map((day) => {
        return <Card date={day.Date} localizedName={location.LocalizedName} value={value} weatherText={weatherText} unit={unit}/>;
      })} */}
      <Card date={"2023-12-05T07:00:00+02:00"} localizedName={'Tel Aviv'} value={23.11} weatherText={'Mostly cloudy'} unit={'C'} />
      <Card date={"2023-12-05T07:00:00+02:00"} localizedName={'Tel Aviv'} value={23.11} weatherText={'Mostly cloudy'} unit={'C'} />
      <Card date={"2023-12-05T07:00:00+02:00"} localizedName={'Tel Aviv'} value={23.11} weatherText={'Mostly cloudy'} unit={'C'} />
      <Card date={"2023-12-05T07:00:00+02:00"} localizedName={'Tel Aviv'} value={23.11} weatherText={'Mostly cloudy'} unit={'C'} />
      <Card date={"2023-12-05T07:00:00+02:00"} localizedName={'Tel Aviv'} value={23.11} weatherText={'Mostly cloudy'} unit={'C'} />

    </section>
  );
}
