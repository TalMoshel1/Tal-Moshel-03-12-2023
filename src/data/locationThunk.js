import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

  export const getLocation = createAsyncThunk("fetch-location", async (location) => {
    const response = await fetch(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=eX0BvLwq6EEeVFtvBg7usc23ydzRticl&q=${location}`, 
    )
    if (!response) { return {error: "location wasn't found"}}
    return response.json();
  });


const locationSlice = createSlice({
  name: "location",
  initialState: { data: {}, fetchStatus: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLocation.fulfilled, (state, action) => {
        state.data = action.payload;
        console.log("api data: ", action.payload);
        state.fetchStatus = "success";
        console.log("success");
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
