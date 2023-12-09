import React, { useEffect } from "react";
import { useState } from "react";


export function UseGeoLocation() {

  
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lon: "" },
  });

  const onSuccess = (location) => {
    setLocation({
        loaded: true,
        coordinates: {
            lat: location.coords.latitude,
            lon: location.coords.longitude

        }
    })
  }

  const onError = (error) => {
    setLocation({
        loaded: true,
        error,
    })
  }

  useEffect(()=>{
    if (!('geolocation' in navigator)) {
        onError({
            code: 0,
            message: 'Geolocation is not supported'
        })
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  },[])
  return location;
}

