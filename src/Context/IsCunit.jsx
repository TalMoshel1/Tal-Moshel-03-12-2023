import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

export function useIsCUnit(){
    const forecast = useSelector((state) => state.forecast);
    const [isCUnit, setIsCunit] = useState()

    useEffect(()=>{
        if (forecast.data?.DailyForecasts) {
          if (forecast.data?.DailyForecasts[0].Temperature.Minimum.Unit ==='C') {
            setIsCunit(true)
          } else {
            setIsCunit(false)
          }
        }

        return () => {
        };
      },[forecast.data])

    return isCUnit
}

