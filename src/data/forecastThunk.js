import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getForecast = createAsyncThunk(
  "fetch-current",
  async (cityKey) => {
    const response = await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=AdG6XnaXrK4SjNKQ4HoRhvgaGVDbsGpJ`
    );
    return response.json();
  }
);

const forecastSlice = createSlice({
  name: "forecast",
  initialState: {
    data: {
      Date: ''
    },
    fetchStatus: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getForecast.fulfilled, (state, action) => {
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
