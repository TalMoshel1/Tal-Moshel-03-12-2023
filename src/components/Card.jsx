import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import locationSlice from "../data/locationSlice"
import '../styles/card.css'
import telAvivLocation from '../../tel-aviv-location.json'




export function Card({ localizedName, weatherText, value, date, unit }) {
  
  const dispatch = useDispatch()

  const navigate = useNavigate()


  const {changeLocation} = locationSlice.actions


  console.log({ localizedName, weatherText, value, date, unit })

  const homeOtherCity = () => {
    // dispatch(changeLocation(telAvivLocation[0]))
    // dispatch(changeLocation(localizedName))
    navigate('/')
  }


  if (!date) { /*QUESTION: 'the the first note of each prop isn't always Capital? Answer: Because Date word is saved to be a class'*/
    return (
      <section onClick={homeOtherCity}>
        <h1>{localizedName}</h1>
        <h2>
          {value} {unit}
        </h2>
        <h2>{weatherText}</h2>
      </section>
    );
  }

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date(date).getDay();

  
  return (
    <section className={'weather-day'}>
      <h1>{daysOfWeek[day]}</h1>
      <h2>
        {value} {unit}
      </h2>
      <h2>{weatherText}</h2>
    </section>
  );

}
