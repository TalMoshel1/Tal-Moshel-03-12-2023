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

  // useEffect(() => {
  //   console.log("current data: ", current.data);
  //   try {
  //     if (current.data?.EpochTime) {
  //       console.log('location.data.Key :', location.data.Key)
  //       dispatch(getForecast({ isMetric: true, cityKey: 215854 }));
  //     }
  //   } catch (e) {
  //     console.log("should be rendered once");

  //     console.log("e: ", e, "current data: ", current.data);
  //   }
  // }, [current]);

  useEffect(() => {
    if (current?.fetchStatus === "success") {
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
    console.log("current favourites: ", favorites);
  }, [favorites]);

  if (current.fetchStatus === "error") {
    return <p>Error getting the data</p>
  }

  if (current.fetchStatus === "loading") {
    return <p>Spinner</p>

  }

  return (
    <div className="current-page-container">
      {currentValues && (
        <CurrentContainer className="current-container">
          <h1 className='localized-name'>{currentValues.LocalizedName}</h1>
          <h2 className='temperature'>
            {currentValues.Value} {currentValues.Unit}
          </h2>
          <h2 className='weather-text'>{currentValues.WeatherText}</h2>

        </CurrentContainer>
      )}

      {!isFavorite ? (
        <IsFavoriteContainer
          className="button-1"
          onClick={() => dispatch(addToFavorites({ ...currentValues }))}
        >
          <AiFillHeart color='grey'/>
        </IsFavoriteContainer>
      ) : (
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


`

const IsFavoriteContainer = styled.div`
background-color: ${(props) => props.theme.colors.itemBackground};
border: 1px solid ${(props) => props.theme.colors.borderColor}

`