import { configureStore } from "@reduxjs/toolkit";

import userSlice from './userSlice'
import departmentSlice from "./departmentSlice";
import billSlice from "./BillSlice";


const store = configureStore({
  reducer:{
    user:userSlice,
    dept:departmentSlice,
    bill:billSlice
  }
})

export default store