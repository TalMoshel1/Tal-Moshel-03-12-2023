import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import hai from '../../get-location-hai-value.json'
import locationSlice from '../data/locationSlice';
import {getLocation} from '../data/locationThunk'

export function Search() {
  const [value, setValue] = useState("");
  const {changeLocation} = locationSlice.actions
  const dispatch = useDispatch()
  const {location} = useSelector((state)=>state.location)

  const getCity = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
        const city = hai /*hai is the input value I used*/
        dispatch(changeLocation(city))
    }
  };

  useEffect(()=>{
    console.log('location from Search:', location)
  },[location])



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
