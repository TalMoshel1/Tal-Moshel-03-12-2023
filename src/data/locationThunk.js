import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dummyLocation } from "./objects/dummy-data";
import { initializeLocation } from "./objects/intializers";
import {getLocationUrl} from './functions/getLocationUrl'

export const getLocation = createAsyncThunk(
  "fetch-location",
  async ({location, isGeoApi}, { rejectWithValue }) => {
    try {
        const url = getLocationUrl(location,isGeoApi)
        const response = await fetch(url);
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
            state.fetchStatus = 'success';
            state.error = null; 
            state.data = action.payload[0];

          } else {
            state.fetchStatus = 'error'
            state.error = "can't find city, please try again"
          }
        } if (action.payload.Key) {
          state.fetchStatus = 'success';
          state.error = null; 
          state.data = action.payload

        }else {
          state.error = action.payload.Message
        }
      }) 
      .addCase(getLocation.pending, (state) => {
        state.fetchStatus = 'loading';
      })
      .addCase(getLocation.rejected, (state, action) => {
        state.fetchStatus = 'Failed to fetch';
        state.error = 'please try again later'
      });
  },
});

export default locationSlice;
