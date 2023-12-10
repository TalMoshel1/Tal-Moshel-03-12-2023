import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getLocation } from "../data/locationThunk";
import { isNotEnglish } from "../../helpers/isEnglish";
import '../styles/search.css'
import styled from "styled-components";

export function Search() {
  const [error, setError] = useState('');
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const  location  = useSelector((state) => state.location);

  const getCity = (event) => {
    const value = event.target.value;
    if (!isNotEnglish(value)) {
      if (event.key === "Enter" || event.keyCode === 13) {
         return dispatch(getLocation({location: value, isGeoApi: false}));
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
        return setError(location.error)
      }
      if (location.fetchStatus === 'error') {
        console.log(location.error)
        return setError("Please try later!!")
      } 
      if (location.fetchStatus ==='loading') {
        return setError(location.fetchStatus)
      } else {
        return setError('')
      }
    
  },[location.error, location.fetchStatus])

  return (
    <SearchContainer className='search-section '>
      <p class='english-only'>{error && error}</p>
      <input
      placeholder={'search'}
        type="text"
        onKeyDown={getCity}
        onChange={(e) => setValue(e.target.value)}
      />
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
  background-color: ${(props) => props.theme.colors.background};
}


`
