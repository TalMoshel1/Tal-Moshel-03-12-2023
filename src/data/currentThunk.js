import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCurrent = createAsyncThunk("fetch-current", async (cityKey) => {
  const response = await fetch(
    `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=AdG6XnaXrK4SjNKQ4HoRhvgaGVDbsGpJ`
  );
  return response.json();
});

const currentSlice = createSlice({
  name: "current",
  initialState: {
    data: {
      WeatherText: "",
      Temperature: {
        Metric: {
          Value: "",
          Unit: "",
        },
      },
      fetchStatus: "",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrent.fulfilled, (state, action) => {
        state.data = action.payload[0];
        state.fetchStatus = "success";
      })
      .addCase(getCurrent.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(getCurrent.rejected, (state, action) => {
        state.fetchStatus = "error";
      });
  },
});

export default currentSlice;
