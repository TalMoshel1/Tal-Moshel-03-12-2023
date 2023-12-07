import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { AiFillHeart } from "react-icons/ai";
import favoritesSlice from "../data/favouritesSlice";
import { useLocation } from "react-router-dom";
import { getCurrent } from "../data/currentThunk";
import { getForecast } from "../data/forecastThunk";
import "../styles/current.css";
import styled from "styled-components";

export function Current() {
  const location = useSelector((state) => state.location);
  const current = useSelector((state) => state.current);
  const forecast = useSelector((state) => state.forecast.data);
  const { favorites } = useSelector((state) => state.favorites);
  const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

  const [currentValues, setCurrentValues] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.data?.Key) {
      dispatch(getCurrent(location.data.Key));
      dispatch(getForecast())
    } 
}, [location.data]);

  useEffect(() => {
    try {
      if (current.data?.EpochTime) {
        dispatch(getForecast(location.data.Key));
      }
    } catch (e) {
      console.log("e: ", e, "current data: ", current.data);
    }
  }, [current]);

  useEffect(() => {
    if (current.fetchStatus === "success") {
      console.log(current.fetchStatus);
      setCurrentValues({
        Key: location.data.Key,
        Unit: current.data.Temperature.Metric.Unit,
        Value: current.data.Temperature.Metric.Value,
        WeatherText: current.data.WeatherText,
        LocalizedName: location.data.LocalizedName,
      });
    } else {
      console.log(current.data.fetchStatus);
    }
  }, [current]);

  // const urlLocation = useLocation();

  const [isFavorite, setIsFavorite] = useState();

  const isFavoriteFunc = () => {
    console.log('triggered')
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

  useEffect(() => {
    console.log("currentValues.Key: ", currentValues?.Key);
  }, [favorites]);

  return (
    <div className="current-page-container">
      {currentValues && (
        <CurrentContainer className="current-container">
          <h1>{currentValues.LocalizedName}</h1>
          <h2>{currentValues.WeatherText}</h2>
          <h2>
            {currentValues.Value} {currentValues.Unit}
          </h2>
        </CurrentContainer>
      )}

      {!isFavorite ? (
        <IsFavoriteContainer
          className="button-1"
          onClick={() => dispatch(addToFavorites({ ...currentValues }))}
        >
          <AiFillHeart color='grey' border='1px solid black'/>
        </IsFavoriteContainer>
      ) : (
        <IsFavoriteContainer
          className="button-1"
          onClick={() => dispatch(removeFromFavorites({ Key: currentValues.Key }))}
        >
          <AiFillHeart  color='red' border='1px solid black'/>
        </IsFavoriteContainer>
      )}
    </div>
  );
}

const CurrentContainer = styled.div`

background-color: ${(props) => props.theme.colors.elemnetBackgroundColor};

border: 1px solid ${(props) => props.theme.colors.BorderColor};


`

const IsFavoriteContainer = styled.div`
background-color: ${(props) => props.theme.colors.elemnetBackgroundColor};

`