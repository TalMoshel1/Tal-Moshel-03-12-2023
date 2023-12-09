import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dummyForecast } from "./objects/dummy-data";
import { initializeForecast } from "./objects/intializers.js";
import { getForecastUrl } from "./functions/getForecastUrl.js";

export const getForecast = createAsyncThunk(
  "fetch-forecast",
  async ({ isMetric, cityKey }) => {
    try {
      const url = getForecastUrl(isMetric, cityKey);
      const response = await fetch(url);
      console.log(response)
      return response.json();
    } catch (e) {
      console.log(e);
    }
  }
);

// /forecasts/v1/daily/5day/${cityKey}?apikey=eX0BvLwq6EEeVFtvBg7usc23ydzRticl&metric=true

// export const getForecast = createAsyncThunk("fetch-forecast", async (cityKey) => {
//   const response =Promise.resolve(dummyForecast)

//   return response
// });

const forecastSlice = createSlice({
  name: "forecast",
  initialState: {
    data: {},
    fetchStatus: "",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getForecast.fulfilled, (state, action) => {
        if (!action.payload) {
          console.log('???')
          state.error = "cant find forecast data, please try again later!";
          return
        } else {
          console.log(action.payload)
          state.data = action.payload;
          state.error = null
        }
      })
      .addCase(getForecast.pending, (state, action) => {
        console.log(action.payload)
        state.data = action.payload;
        state.error = "can't find display forecast, please try later!!";
        state.fetchStatus = "loading";
      })
      .addCase(getForecast.rejected, (state, action) => {
        console.log(action.error)
        state.error = "can't find display forecast, please try later!!!";
      });
  },
});

export default forecastSlice;
