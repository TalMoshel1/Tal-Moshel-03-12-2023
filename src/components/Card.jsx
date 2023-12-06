import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import '../styles/card.css'
import telAvivLocation from '../../tel-aviv-location.json'




export function Card({ Icon, IconPhrase, date, value, unit }) {
  
  const dispatch = useDispatch()

  const navigate = useNavigate()


  // const {changeLocation} = locationSlice.actions


  const homeOtherCity = () => {
    // dispatch(changeLocation(telAvivLocation[0]))
    // dispatch(changeLocation(localizedName))
    navigate('/')
  }


  if (!date) { /*QUESTION: 'the the first note of each prop isn't always Capital? Answer: Because Date word is saved to be a class'*/
    return (
      <section onClick={homeOtherCity}>
        {/* <img src="https://developer.accuweather.com/sites/default/files/14-s.png" alt="" />
        <h1>{localizedName}</h1>
        <h2>
          {value} {unit}
        </h2>
        <h2>{weatherText}</h2> */}
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

  const icon = Icon > 10 ? Icon : `0${Icon}`
  
  return (
    <section className={'weather-day'}>
      <img src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`} alt={IconPhrase} />
      <h1>{daysOfWeek[day]}</h1>
      <h2>
        {value} {unit}
      </h2>
      <h2>{IconPhrase}</h2>
    </section>
  );

}
