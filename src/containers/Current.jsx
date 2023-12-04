import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
// import currentWeatherSlice from "../data/currentWeatherSlice";
import favoritesSlice from "../data/favouritesSlice";
import { useLocation } from "react-router-dom";

export function Current() {
  // const { changeCurrentWeather } = currentWeatherSlice.actions;
  const { location } = useSelector((state) => state.location);
  const { current } = useSelector((state) => state.current);
  const { favorites } = useSelector((state) => state.favorites);
  const { addToFavorites } = favoritesSlice.actions;

  const dispatch = useDispatch();

  const urlLocation = useLocation()

  const Value = current.Temperature.Metric.Value;
  const Unit = current.Temperature.Metric.Unit;
  const WeatherText = current.WeatherText;
  const LocalizedName = location.LocalizedName;
  const Key = location.Key

  console.log('values from current: ', WeatherText, LocalizedName, Key)

  // const intializeFavoriteData = JSON.parse(localStorage.getItem('favorites')).length > 0  || []


  const [isFavorite, setIsFavorite] = useState();



  const isFavoriteFunc = () => {
    if (favorites.length === 0) {
      return false;
    }
    const bool = favorites.filter((f)=>{return f.Key === location.Key}).length > 0
    console.log(location.Key)
    if (bool) {
      setIsFavorite(true)
      return true
    }
    return false
  };



  useEffect(() => {
    console.log(location)
    if (favorites.length) {
      const result = isFavoriteFunc()
      console.log(result)
    } else {
      console.log('favorits is empty')
    }
  }, [favorites, location, urlLocation.pathname]);

  useEffect(()=>{
    console.log('current favourites: ',favorites)
  },[favorites])

  return (
    <div>
      <section>
        <h1>{LocalizedName}</h1>
        <h2>{WeatherText}</h2>
        <h2>
          {Value} {Unit}
        </h2>
      </section>

      {!isFavorite && (
        <button onClick={() => dispatch(addToFavorites({Key,LocalizedName, WeatherText, Unit, Value}
          ))}>
          Add to Favorites
        </button>
      )}
    </div>
  );
}
