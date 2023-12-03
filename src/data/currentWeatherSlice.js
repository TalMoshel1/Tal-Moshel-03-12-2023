import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import telAvivCurrent from '../../tel-aviv-current.json'

const currentWeatherSlice = createSlice({
    name: 'current',
    initialState: {
        current: telAvivCurrent[0]
    },
    reducers: {
        changeCurrentWeather: (state, action) => {
            state.current = action.payload[0]
        }
    }
})

export default currentWeatherSlice
