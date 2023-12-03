import { Search } from "../containers/Search"
import { Current } from "../containers/Current"
import { Forecast } from "../containers/Forcast"


export function Home() {



    
    return (
        <main>
            <Search />
            <Current />
            <Forecast />
        </main>
    )
}