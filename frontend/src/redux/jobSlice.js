import { createSlice } from "@reduxjs/toolkit";



const jobSlice = createSlice({
    name: 'job',
    initialState: {
        allJobs: [],
      
    },
    reducers: {
        setAllJobs: (state, action) => {
            // console.log('Action payload:', action.payload); 
            state.allJobs = action.payload; 
        },

    },
});



export const {setAllJobs} = jobSlice.actions;
export default jobSlice.reducer