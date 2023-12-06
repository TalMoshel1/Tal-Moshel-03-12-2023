import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dummyLocation } from "./objects/dummy-data";
import { initializeLocation } from "./objects/intializers";

// export const getLocation = createAsyncThunk(
//   "fetch-location",
//   async (location) => {
//     const response = await fetch(
//       `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=AdG6XnaXrK4SjNKQ4HoRhvgaGVDbsGpJ&q=${location}`
//     );
//     if (!response) {
//       throw new Error("Location not found");
//     }
//     return response.json();
//   }
// );
export const getLocation = createAsyncThunk(
  "fetch-location",
  async (location) => {
    const response = Promise.resolve(dummyLocation);

    return response;
  }
);

const locationSlice = createSlice({
  name: "location",
  initialState: {
    data: initializeLocation,
    fetchStatus: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLocation.fulfilled, (state, action) => {
        state.data = action.payload[0];
        state.fetchStatus = "success";
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
