import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import HTTP from '../HTTP';
import API from '../API';

const initialState = {
    data: [],
    status: false
}

export const getDepartment = createAsyncThunk("department/getdept", (data) => {
    return HTTP.get('department')
        .then((response) => {
            return response.data
        })
});


const deptSlice = createSlice({
    name: 'dept',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getDepartment.pending, (state) => {
                state.status = false;
            })
            .addCase(getDepartment.fulfilled, (state, action) => {
                console.log(action)
                state.data = action.payload;
                state.status = true;
            })
    }
})

// console.log(userSlice)

export default deptSlice.reducer