import { useSelector } from "react-redux"
import {Card} from '../components/Card'
import { useEffect } from "react"

export function Favorites() {
    const favorites = useSelector((state)=>state.favorites.favorites)
    
    useEffect(()=>{
        console.log(favorites)
    },[favorites])
    
    
    if (favorites.length > 0) {
        return (
            <section>
                {favorites.map((f)=> <Card key={f.Key} unit={f.Unit} date={f.Date} value={f.Value} weatherText={f.WeatherText} localizedName={f.LocalizedName}/>)}
            </section>
            )
    }


}