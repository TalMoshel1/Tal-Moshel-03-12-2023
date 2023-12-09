import { useSelector } from "react-redux"
import {Card} from '../components/Card'
import { useEffect } from "react"
import '../styles/favorites.css'
import styled from "styled-components"

export function Favorites() {
    const favorites = useSelector((state)=>state.favorites.favorites)

    if (!favorites.length > 0) {
        return (
            <FavoritesContainer className='favorites-container'>
                <Card isNoFavorites={true}/>
        </FavoritesContainer>
        )

    } 
    return (     
            <FavoritesContainer className='favorites-container'>
            {favorites.map((f)=> <Card id={f.Key} unit={f.Unit} value={f.Value} weatherText={f.WeatherText} localizedName={f.LocalizedName}/>)}
        </FavoritesContainer>
)




}

const FavoritesContainer = styled.section`
background-color: ${(props) => props.theme.colors.background};

`