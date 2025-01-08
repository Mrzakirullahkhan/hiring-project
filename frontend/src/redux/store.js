import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"

// yaha me aik store bana rha hu 
const store = configureStore({
    reducer:{
        auth:authSlice
    }
})

export default store