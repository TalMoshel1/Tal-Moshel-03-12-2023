import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { AiFillHeart } from "react-icons/ai";
import favoritesSlice from "../data/favouritesSlice";
import { useLocation } from "react-router-dom";
import "../styles/current.css";
import styled from "styled-components";

export function Current() {
  const location = useSelector((state) => state.location);
  const current = useSelector((state) => state.current);
  const { favorites } = useSelector((state) => state.favorites);
  const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
  const [fetchStatus, setFetchStatus] = useState()
  const [currentValues, setCurrentValues] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (current?.fetchStatus === 'success') {
      setFetchStatus()
      setCurrentValues({
        Key: location.data.Key,
        Unit: current.data.Temperature.Metric.Unit,
        Value: current.data.Temperature.Metric.Value,
        WeatherText: current.data.WeatherText,
        LocalizedName: location.data.LocalizedName,
      });
    } else {
      const status = current?.error
      console.log(current)
      setFetchStatus(status)
    }
  }, [current]);

  const [isFavorite, setIsFavorite] = useState();

  const isFavoriteFunc = () => {
    if (favorites.length === 0) {
      return false;
    }
    const bool =
      favorites.filter((f) => {
        return f.Key === location.data.Key;
      }).length > 0;
    if (bool) {
      setIsFavorite(true);
      return true;
    }
    setIsFavorite(false);
    return false;
  };

  useEffect(() => {
    if (favorites.length > 0) {
      const result = isFavoriteFunc();
      console.log(result);
    } else {
      setIsFavorite(false)
    }
  }, [favorites]);

  return (
    <div className="current-page-container">
      {fetchStatus && <p className='error'>{fetchStatus}</p>}
      {currentValues && (
        <CurrentContainer className="current-container">
          <h1 className='localized-name'>{currentValues.LocalizedName}</h1>
          <h2 className='temperature'>
            {currentValues.Value} {currentValues.Unit}
          </h2>
          <h2 className='weather-text'>{currentValues.WeatherText}</h2>
        </CurrentContainer>
      )}

      {(!isFavorite && currentValues) && (
        <IsFavoriteContainer
          className="button-1"
          onClick={() => dispatch(addToFavorites({ ...currentValues }))}
        >
          <AiFillHeart color='grey'/>
        </IsFavoriteContainer>
      ) }
      
      {(isFavorite && currentValues) && (
        <IsFavoriteContainer
          className="button-1"
          onClick={() => dispatch(removeFromFavorites({ Key: currentValues.Key }))}
        >
          <AiFillHeart  color='red'/>
        </IsFavoriteContainer>
      )}
      
    </div>
  );
}

const CurrentContainer = styled.div`
background-color: ${(props) => props.theme.colors.itemBackground};
border: 1px solid ${(props) => props.theme.colors.borderColor};
.localized-name {
  color: ${(props) => props.theme.colors.lettersBig};
}
.weather-text {
  color: ${(props) => props.theme.colors.lettersSmall};
} 
.temperature {
  color: ${(props) => props.theme.colors.lettersBig};
}
.fetch-status{
  color:red
}
`

const IsFavoriteContainer = styled.div`
background-color: ${(props) => props.theme.colors.itemBackground};
border: 1px solid ${(props) => props.theme.colors.borderColor}
`