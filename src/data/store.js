import  {configureStore} from '@reduxjs/toolkit'
import locationThunk from '../data/locationThunk'

const store = configureStore({
    reducer: {
        location: locationThunk.reducer
        }
})

export default store