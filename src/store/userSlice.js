import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import HTTP from '../HTTP';
import API from '../API';

const initialState = {
    data: [],
    status: false,
    isUserLoggedin: false,
    usertype: 'employee',
    useruuid: '',
    userLoginData: {}
}


export const getUserLogin = createAsyncThunk("user/login", (userData) => {
    return HTTP.post('login', { ...userData })
        .then((response) => {
            console.log(response);
            return response.data
        },((response)=>{
            console.log(response);
            return response
        }))
});

export const postUser = createAsyncThunk("user/postdata", (userData) => {
    return HTTP.post('user', { ...userData })
        .then((response) => {
            console.log(response);
            return response.data
        })
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        userLogout: (state)=>{
            state.isUserLoggedin = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postUser.pending, (state) => {
                state.status = false;
            })
            .addCase(postUser.fulfilled, (state, action) => {
                console.log(action)
                state.data = action.payload;
                state.status = true;
            })
            .addCase(postUser.rejected, (state, action) => {
                console.log(action)
                // state.data = action.payload;
                // state.status = true;
            })
            .addCase(getUserLogin.pending, (state) => {
                state.isUserLoggedin = false;
            })
            .addCase(getUserLogin.fulfilled, (state, action) => {
                // console.log('user',action.payload.response.data)
                // if(action)
                state.isUserLoggedin = true;
                state.useruuid = action.payload.userid
                state.userLoginData = action.payload;
                state.usertype = action.payload.usertype;
            })
            .addCase(getUserLogin.rejected, (state, action) => {
                console.log(action)
                // state.data = action.payload;
                // state.status = true;
            })
    }
})

// console.log(userSlice)
export const { userLogout } = userSlice.actions

export default userSlice.reducer