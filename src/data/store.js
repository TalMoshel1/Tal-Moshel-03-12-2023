import  {configureStore} from '@reduxjs/toolkit'
import locationThunk from '../data/locationThunk'
import locationSlice from './locationSlice'

const store = configureStore({
    reducer: {
        // location: locationThunk.reducer
        location: locationSlice.reducer
        }
})

export default store