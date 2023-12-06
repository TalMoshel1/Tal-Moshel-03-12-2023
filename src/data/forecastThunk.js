import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dummyForecast } from "./objects/dummy-data";
import {initializeForecast} from './objects/intializers.js'


// export const getForecast = createAsyncThunk(
//   "fetch-current",
//   async (cityKey) => {
//     const response = await fetch(
//       `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=AdG6XnaXrK4SjNKQ4HoRhvgaGVDbsGpJ`
//     );
//     return response.json();
//   }
// );

export const getForecast = createAsyncThunk("fetch-forecast", async (cityKey) => {
  const response =Promise.resolve(dummyForecast)

  return response
});

const forecastSlice = createSlice({
  name: "forecast",
  initialState: {
    data: {},
    fetchStatus: ""
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getForecast.fulfilled, (state, action) => {
        console.log(action.payload)
        state.data = action.payload;
        state.fetchStatus = "success";
      })
      .addCase(getForecast.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(getForecast.rejected, (state) => {
        state.fetchStatus = "error";
      });
  },
});

export default forecastSlice;
