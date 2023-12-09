import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dummyLocation } from "./objects/dummy-data";
import { initializeLocation } from "./objects/intializers";

export const getLocation = createAsyncThunk(
  "fetch-location",
  async (location, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=4eG4ZizaYAjzSMwQfZX7va8Gc5HwVpwk
        &q=${location}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    } catch (e) {
      throw rejectWithValue(e.message);
    }
  }
);


const locationSlice = createSlice({
  name: "location",
  initialState: {
    data: {},
    fetchStatus: "",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLocation.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          if (action.payload.length > 0 ) {
            state.fetchStatus = "success";
            state.error = null; 
            state.data = action.payload[0];

          } else {
            state.fetchStatus = 'error'
            state.error = "can't find city, please try again"
          }
        } else {
          state.error = action.payload.Message
        }
      }) 
      .addCase(getLocation.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(getLocation.rejected, (state, action) => {
        state.fetchStatus = "Failed to fetch";
        state.error = "please try again later"
      });
  },
});

export default locationSlice;
