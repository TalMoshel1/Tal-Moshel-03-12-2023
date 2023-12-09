import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {initializedCurrent} from './objects/intializers.js'
import { dummyCurrent } from "./objects/dummy-data.js";

export const getCurrent = createAsyncThunk("fetch-current", async (cityKey) => {
  try {
    const response = await fetch(
      `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=4eG4ZizaYAjzSMwQfZX7va8Gc5HwVpwk`
    );
    return response.json();
  } catch(e) {
    throw new Error(e)
  }
  
});


const currentSlice = createSlice({
  name: "current",
  initialState: {
    data: {},
    fetchStatus: "",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrent.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          if (action.payload.length > 0 ) {
            state.data = action.payload[0];
            state.fetchStatus = "success";
            state.error = null; 
          } else {
            state.error = "cant find city, please try again"
          }
        } 
      })
      .addCase(getCurrent.pending, (state, action) => {
        state.error = "can't find the current weather, please try later"
        state.fetchStatus = "loading";
      })
      .addCase(getCurrent.rejected, (state, action) => {
        state.error = "can't find the current weather, please try later";
        state.fetchStatus = "error";
      });
  },
});

export default currentSlice;
