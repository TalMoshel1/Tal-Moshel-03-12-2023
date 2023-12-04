import { useEffect } from "react"
import { useSelector } from "react-redux"

export function Favorites() {

    const {favorites} = useSelector((state)=> state.favorites)
    const {current} = useSelector((state)=>state.current)


    useEffect(()=>{
        console.log('favorites from Favorites component: ', favorites)

    })

    


}