import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import telAvivLocation from '../../tel-aviv-location.json'

// export const getLocation = createAsyncThunk('fetch-location', async (q, LocationUrl)=>{
//     if (!q) {
//         const response = await fetch(`${LocationUrl}/telaviv`)
//         return response.json()
//     }
//     const response = await fetch({LocationUrl}/{q})
//     return response.json()
// })

/* http://dataservice.accuweather.com/currentconditions/v1/215854
*/

const locationSlice = createSlice({
    name: 'location',
    initialState: {
        location: telAvivLocation[0]
    },
    reducers: {
        changeLocation: (state, action) => {
            state.location = action.payload[0]
        }
    }

})

export default locationSlice
