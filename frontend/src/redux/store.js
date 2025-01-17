import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"
import jobSlice from "./jobSlice";
// yaha me aik store bana rha hu 
const store = configureStore({
    reducer:{
        auth:authSlice,
        job:jobSlice
    }
})

export default store