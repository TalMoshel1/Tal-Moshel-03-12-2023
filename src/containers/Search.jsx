import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import hai from "../../get-location-hai-value.json";
// import locationSlice from "../data/locationSlice";
import { getLocation } from "../data/locationThunk";
import currentWeatherSlice from "../data/currentWeatherSlice";
import { isNotEnglish } from "../../helpers/isEnglish";
import '../styles/search.css'
import styled from "styled-components";

export function Search() {
  const [error, setError] = useState('');
  const [value, setValue] = useState('');
  const [isEnter, setIsEnter] = useState('')
  // const {changeLocation} = locationSlice.actions
  // const {changeCurrentWeather} = currentWeatherSlice.actions
  const dispatch = useDispatch();
  const  location  = useSelector((state) => state.location);

  const getCity = (event) => {
    const value = event.target.value;
    if (!isNotEnglish(value)) {
      if (event.key === "Enter" || event.keyCode === 13) {
        console.log("dispatch search value! :", value);
         return dispatch(getLocation(value));
      }
    }
  };

  useEffect(() => {
      if (isNotEnglish(value)) {
        setError("english only");
      } else {
        setError('');
      }
    
  }, [value]);

  useEffect(()=>{
      if (location.error) {
        setError((location.error.err))
      }
    
  },[location.error])

  return (
    <SearchContainer className='search-section '>
      <p class='english-only'>{error && error}</p>
      <input
      placeholder={'search'}
        type="text"
        onKeyDown={getCity}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* {location?.fetchStatus === "success" && <p>loading</p>}
      {location?.fetchStatus === "error" && <p>error</p>} */}


    </SearchContainer>
  );
}

const SearchContainer = styled.section`

input {
  background-color: ${(props) => props.theme.colors.itemBackground};
  color:  ${(props) => props.theme.colors.lettersBig};
  border: 1px solid ${(props) => props.theme.colors.lettersBig};
}

.search-section  {
  background-color: ${(props) => props.theme.colors.backgroundColor};
}


`
