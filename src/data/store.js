import  {configureStore} from '@reduxjs/toolkit'
import locationThunk from '../data/locationThunk'
import locationSlice from './locationSlice'
import currentWeatherSlice from './currentWeatherSlice'
import forecastSlice from './forecastSlice'
import favoritesSlice from './favouritesSlice'

const store = configureStore({
    reducer: {
        // location: locationThunk.reducer
        location: locationSlice.reducer,
        current: currentWeatherSlice.reducer,
        forecast: forecastSlice.reducer,
        favorites: favoritesSlice.reducer
        }
})

export default store