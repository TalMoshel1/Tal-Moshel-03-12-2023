import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components"

export function useGetError() {

    const location = useSelector((state) => state.location);
    const current = useSelector((state) => state.current);
    const forecast = useSelector((state) => state.forecast);

    const [error, setError] = useState()
    useEffect(()=>{
        if (location.fetchStatus === "error" && current.fetchStatus === "error") {
            console.log('combined errors: ',location.data, current.data)
            return 
          }
          if (location.fetchStatus === "error" && forecast.fetchStatus === "error") {
            console.log('combined errors: ', location.data, forecast.data)
            return
          }
        if (location.fetchStatus === "error") {
            console.log('location error: ',location.data)
          }
        
          if (current.fetchStatus === "error") {
            console.log('current error: ',current.data)
        
          }
          if (forecast.fetchStatus === "error") {
            console.log('forecast error: ', forecast.data)
          }
    },[location.data, current.data, forecast.data])

    
}

// return <Error className='error'>Error getting the data</Error>


// const Error = styled.p`
// color: ${(props) => props.theme.colors.lettersBig};
// `

/* forecast.fetchStatus === 'error' || current.fetchStatus === 'error' */