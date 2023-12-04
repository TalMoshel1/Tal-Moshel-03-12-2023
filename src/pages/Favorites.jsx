import { useSelector } from "react-redux"
import {Card} from '../components/Card'

export function Favorites() {
    const {favorites} = useSelector((state)=>state.favorites)

    console.log('favorites from Favorites component: ',favorites)
    
    
    if (favorites.length) {
        return (
            <section>
                {favorites.map((f)=> <Card key={f.Key} unit={f.Unit} date={f.Date} value={f.Value} weatherText={f.WeatherText} localizedName={f.LocalizedName}/>)}
            </section>
            )
    }


}