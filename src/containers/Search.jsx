import { useDispatch } from 'react-redux';
import hai from '../../get-location-hai-value.json'
import locationSlice from '../data/locationSlice';
import { useEffect, useState } from "react";
import {getLocation} from '../data/locationThunk'

export function Search() {
  const [value, setValue] = useState("");
  const {changeLocation} = locationSlice.actions
  const dispatch = useDispatch()

  const getCity = (event) => {
    if (event.key === 'Enter' ) {
        const city = hai /*hai is the input value I used*/
        dispatch(changeLocation(city))
    }
  };



  return (
    <>
      <span>Click enter on icon to search</span>
      <input
        type="text"
        onKeyDown={getCity}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}
