import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dummyLocation } from "./objects/dummy-data";
import { initializeLocation } from "./objects/intializers";

export const getLocation = createAsyncThunk(
  "fetch-location",
  async (location, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=eX0BvLwq6EEeVFtvBg7usc23ydzRticl
        &q=${location}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error(error);
      throw rejectWithValue(error.message);
    }
  }
);


const locationSlice = createSlice({
  name: "location",
  initialState: {
    data: initializeLocation,
    fetchStatus: "",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLocation.fulfilled, (state, action) => {
        console.log('?')
        if (Array.isArray(action.payload)) {
          console.log('??')
          if (action.payload.length > 0 ) {
            state.fetchStatus = "success";
            state.error = null; 
            console.log('???')
            state.data = action.payload[0];

          } else {
            console.log('????')
            console.log('gets here')
            state.fetchStatus = 'error'
            state.error = "can't find city, please try again"
          }
        } else {
          state.error = action.payload.Message
        }
      }) 
      .addCase(getLocation.pending, (state) => {

        state.fetchStatus = "loading";
        // state.error = "please try again later"
      })
      .addCase(getLocation.rejected, (state, action) => {
        state.fetchStatus = "Failed to fetch";
        console.log('!!!!!!!!!!!')
        state.error = "please try again later"
      });
  },
});

export default locationSlice;
