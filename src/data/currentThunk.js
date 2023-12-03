import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

  export const getCurrent = createAsyncThunk("fetch-current", async (cityKey) => {
    const response = await fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=eX0BvLwq6EEeVFtvBg7usc23ydzRticl&details=true`, 
    )
    return response.json();
  });


const currentSlice = createSlice({
  name: "current",
  initialState: { data: {}, fetchStatus: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrent.fulfilled, (state, action) => {
        state.data = action.payload;
        state.fetchStatus = "success";
      })
      .addCase(getCurrent.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(getCurrent.rejected, (state) => {
        state.fetchStatus = "error";
      });
  },
});

export default currentSlice;
