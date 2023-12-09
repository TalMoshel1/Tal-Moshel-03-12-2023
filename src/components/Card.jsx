import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getLocation } from "../data/locationThunk";
import favoritesSlice from "../data/favouritesSlice";
import "../styles/card.css";
import styled from "styled-components";

export function Card({
  Icon,
  IconPhrase,
  date,
  minValue,
  maxValue,
  unit,
  localizedName,
  value,
  weatherText,
  id,
  isNoFavorites
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { removeFromFavorites } = favoritesSlice.actions;

  const handleClickRemoveFavorite = () => {
    dispatch(removeFromFavorites({ Key: id }));
  };

  const homeOtherCity = () => {
    dispatch(getLocation(localizedName));
    navigate("/");
  };

  const NavigateHome = () => {
    navigate("/");
  }

  if (isNoFavorites) {
    return (
      <AddFavorites onClick={NavigateHome} className='add-favorites'>
          Click to Add favorites!
      </AddFavorites>
    );
  }


  if (!date) {
    /*QUESTION: 'the the first note of each prop isn't always Capital? Answer: Because Date word is saved to be a class'*/
    return (
      <CardTheme className={"favorite"}>
        <div onClick={homeOtherCity} className="favorite-city">
          <div>
            <h1 className="city">{localizedName}</h1>
            <h2 className="temperature">
              {value} {unit}
            </h2>
            <h2 className="weather-text">{weatherText}</h2>
          </div>
        </div>

        <button className="remove-favorite" onClick={handleClickRemoveFavorite}>
          remove favorite
        </button>
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

  const icon = Icon > 10 ? Icon : `0${Icon}`;

  return (
    <CardTheme className={"weather-day"}>
      <img
        src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`}
        alt={IconPhrase}
      />
      <h1 className="day">{daysOfWeek[day]}</h1>
      <h2 className="temperature">
        {minValue}/{maxValue} {unit}
      </h2>
      <h2 className="icon-phrase">{IconPhrase}</h2>
    </CardTheme>
  );
}

const CardTheme = styled.section`
  background-color: ${(props) => props.theme.colors.itemBackground};
  color : ${(props) => props.theme.colors.itemBackground};

  border: 1px solid ${(props) => props.theme.colors.borderColor};

  .temperature, .day, .favorite-city {
    color: ${(props) => props.theme.colors.lettersBig};

  }
  .icon-phrase, .weather-text{
    color: ${(props) => props.theme.colors.lettersSmall};

  }


  
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
    transition: background-color 0.3s;
  }

  .remove-favorite:hover {
    background-color:grey;
    cursor: pointer;
    

  }

  .add-favorites {
      all: initial;
      font-family: 'Poppins', sans-serif;
      font-weight: bold;
      cursor: pointer;
      color: ${(props) => props.theme.colors.lettersBig};
      font-size: 1rem;
      translation: color 0.3s;
      border: 1px solid ${(props) => props.theme.colors.borderColor};
      border-radius: 22px;
      padding:20px;
  }

  .add-favorites:hover {
    color: ${(props) => props.theme.colors.lettersSmall};

  }

 

  

`;

const AddFavorites = styled.button`
  all: initial;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => props.theme.colors.lettersBig};
  font-size: 1rem;
  translation: color 0.3s;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  border-radius: 22px;
  padding:20px;


:hover {
color: ${(props) => props.theme.colors.lettersSmall};

}`