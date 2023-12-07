import { useSelector } from "react-redux"
import {Card} from '../components/Card'
import { useEffect } from "react"
import '../styles/favorites.css'

export function Favorites() {
    const favorites = useSelector((state)=>state.favorites.favorites)


    console.log('favorites: ', favorites)

        return (     
            <section className='favorites-container'>
            {favorites.map((f)=> <Card id={f.Key} unit={f.Unit} value={f.Value} weatherText={f.WeatherText} localizedName={f.LocalizedName}/>)}
            {favorites.map((f)=> <Card id={f.Key} unit={f.Unit} value={f.Value} weatherText={f.WeatherText} localizedName={f.LocalizedName}/>)}
            {favorites.map((f)=> <Card id={f.Key} unit={f.Unit} value={f.Value} weatherText={f.WeatherText} localizedName={f.LocalizedName}/>)}

        </section>
)

    

  


}