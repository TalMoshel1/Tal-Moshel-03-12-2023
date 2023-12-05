import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import favoritesSlice from "../data/favouritesSlice";
import { useLocation } from "react-router-dom";
import { getCurrent } from "../data/currentThunk";
import '../styles/current.css'

export function Current() {
  const location = useSelector((state) => state.location);
  const current = useSelector((state) => state.current);
  const { favorites } = useSelector((state) => state.favorites);
  const { addToFavorites } = favoritesSlice.actions;
  const [currentValues, setCurrentValues] = useState({
    ...current.data,
    LocalizedName: location.data.LocalizedName,
  });
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (location.data) {
  //     dispatch(getCurrent(location.data.Key));
  //   }
  // }, [location.data]);

  useEffect(() => {
    if (current.data) {
      setCurrentValues({
        Key: location.data.Key,
        Unit: current.data.Temperature.Metric.Unit,
        Value: current.data.Temperature.Metric.Value,
        WeatherText: current.data.WeatherText,
        LocalizedName: location.data.LocalizedName,
      });
    }
  }, [current.data]);

  const urlLocation = useLocation();

  // const intializeFavoriteData =
  //   JSON.parse(localStorage.getItem("favorites")).length > 0 || [];

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
      console.log("favorits is empty");
    }
  }, [favorites]);

  // useEffect(() => {
  //   console.log("current favourites: ", favorites);
  // }, [favorites]);

  return (
    <div>
      {currentValues && (
        <section className='current-container'>
          <h1>{currentValues.LocalizedName}</h1>
          <h2>{currentValues.WeatherText}Clouds and sun</h2>
          <h2>
            {currentValues.Value}26.2 {currentValues.Unit}C
          </h2>
        </section>
      )}

      {!isFavorite && (
        <button onClick={() => dispatch(addToFavorites({ ...currentValues }))}>
          Add to Favorites
        </button>
      )}
    </div>
  );
}
