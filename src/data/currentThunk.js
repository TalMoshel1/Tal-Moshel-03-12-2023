import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {initializedCurrent} from './objects/intializers.js'
import { dummyCurrent } from "./objects/dummy-data.js";

export const getCurrent = createAsyncThunk("fetch-current", async (cityKey) => {
  try {
    const response = await fetch(
      `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=kLBFG7ks0fYmfw5znsZ5QYEkkgZbHsjh`
    );
    return response.json();
  } catch(e) {
    console.log(e)
  }
  
});

// export const getCurrent = createAsyncThunk("fetch-current", async (cityKey) => {
//   const response = Promise.resolve(dummyCurrent)
//   return response
// });

const currentSlice = createSlice({
  name: "current",
  initialState: {
    data: initializedCurrent,
    fetchStatus: ""
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrent.fulfilled, (state, action) => {
        state.data = action.payload[0]
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
