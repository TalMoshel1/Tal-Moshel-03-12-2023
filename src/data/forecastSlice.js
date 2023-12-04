import {createSlice } from "@reduxjs/toolkit"
import forecastJson from '../../five-day-daily-forcast.json'

const forecastSlice = createSlice({
    name: 'forecast',
    initialState: {
        forecast: forecastJson.DailyForecasts
    },
    reducers: {
        changeLocation: (state, action) => {
            state.location = action.payload[0]
        }
    }

})

export default forecastSlice