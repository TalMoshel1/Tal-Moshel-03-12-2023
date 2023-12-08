import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dummyLocation } from "./objects/dummy-data";
import { initializeLocation } from "./objects/intializers";

export const getLocation = createAsyncThunk(
  "fetch-location",
  async (location, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=kLBFG7ks0fYmfw5znsZ5QYEkkgZbHsjh&q=${location}`
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
// export const getLocation = createAsyncThunk(
//   "fetch-location",
//   async (location) => {
//     const response = Promise.resolve(dummyLocation);

//     return response;
//   }
// );

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
        if (Array.isArray(action.payload)) {
          if (action.payload.length > 0 ) {
            state.data = action.payload[0];
            state.fetchStatus = "success";
            state.error = null; 
          } else {
            state.error = {err : "cant find city, please try again"}
          }
        }
      })
      .addCase(getLocation.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(getLocation.rejected, (state) => {
        state.fetchStatus = "error";
      });
  },
});

export default locationSlice;
