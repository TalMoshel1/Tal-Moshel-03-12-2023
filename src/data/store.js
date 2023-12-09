import  {configureStore} from '@reduxjs/toolkit'
import favoritesSlice from './favouritesSlice'
import locationSlice from '../data/locationThunk'
import currentWeatherSlice from '../data/currentThunk'
import forecastSlice from '../data/forecastThunk'
import themeSlice from './themeSlice'



const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer,
        location: locationSlice.reducer,
        current: currentWeatherSlice.reducer,
        forecast: forecastSlice.reducer,
        theme: themeSlice.reducer

        }
})

export default store
