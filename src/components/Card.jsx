import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getLocation } from "../data/locationThunk";
import favoritesSlice from '../data/favouritesSlice'
import '../styles/card.css'
import styled from "styled-components";
import themeSlice from '../data/themeSlice.js'





export function Card({ Icon, IconPhrase, date, minValue, maxValue, unit, localizedName, value, weatherText, id }) {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {removeFromFavorites} = favoritesSlice.actions
  console.log('key from card:', id)

  const handleClickRemoveFavorite = () => {
    dispatch(removeFromFavorites({Key: id}))
  }


  const homeOtherCity = () => {
    dispatch(getLocation(localizedName))
    navigate('/')
  }


  if (!date) { /*QUESTION: 'the the first note of each prop isn't always Capital? Answer: Because Date word is saved to be a class'*/
    return (
      <CardTheme  className={'favorite'} >
        {/* <img src="https://developer.accuweather.com/sites/default/files/14-s.png" alt="" /> */}
        <div onClick={homeOtherCity} className='favorite-city'>
        <h1>{localizedName}</h1>
        <h2>
          {value} {unit}
        </h2>
        <h2>{weatherText}</h2>
        </div>

        <button className='remove-favorite' onClick={handleClickRemoveFavorite}>remove favorite</button>
      </CardTheme>
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
    <CardTheme className={'weather-day'}>
      <img src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`} alt={IconPhrase} />
      <h1>{daysOfWeek[day]}</h1>
      <h2>
        {minValue}/{maxValue} {unit}
      </h2>
      <h2>{IconPhrase}</h2>
    </CardTheme>
  );

}


const CardTheme = styled.section`
  background-color: ${(props) => props.theme.colors.elemnetBackgroundColor};

  
  .favorite-city {
    display: flex;
    flex-direction: column;
    transition: font-size: 0.5s
    width:180px
  }
  
  .favorite-city:hover { 
    cursor: pointer;
    font-size: 1.5rem;

  }
  .remove-favorite {
    transition: background-color 1s;
    transition: font-size: 0.5s
  }

  .remove-favorite:hover {
    background-color:grey;
    cursor: pointer;
    font-size: 1.5rem;
    

  }

`

