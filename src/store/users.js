import { createSlice } from '@reduxjs/toolkit';
import HTTP from '../HTTP';
import API from '../API';

export const initialState = {
  loading: false,
  hasErrors: false,
  users: [],
};

// A slice for users with our three reducers
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers: (state) => {
      state.loading = true;
    },
    getUsersSuccess: (state, { payload }) => {
      state.users = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getUsersFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
  extraReducers:{
    
  }
});

// Three actions generated from the slice
export const { getUsers, getUsersSuccess, getUsersFailure } = usersSlice.actions;

// A selector
export const usersSelector = (state) => state.users;

// The reducer
export default usersSlice.reducer;

// Asynchronous thunk action
export function fetchUsers() {
  return async (dispatch) => {
    dispatch(getUsers());
    try {
      const response = await HTTP.get(API.users, {
        params: {},
      });
      const { data } = response;
      console.log("Resp got", response)
      //   const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      //   const data = await response.json();
      dispatch(getUsersSuccess(response));
    } catch (error) {
      dispatch(getUsersFailure());
    }
  };
}


// export function fetchUsers() {
//   return (dispatch) => {
//     dispatch(getUsers());

//     HTTP.get(API.users, {
//       params: {},
//     }).then((res) => {
//       // console.log("Resp got", res)
//       dispatch(getUsersSuccess(res));
//     }, (err) => {
//       dispatch(getUsersFailure());
//     })


//   };
// }
