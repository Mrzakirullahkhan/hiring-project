import { createSlice } from "@reduxjs/toolkit";



const jobSlice = createSlice({
    name: 'job',
    initialState: {
        allJobs: [],
        singleJob:null
      
    },
    reducers: {
        setAllJobs: (state, action) => {
            // console.log('Action payload:', action.payload); 
            state.allJobs = action.payload; 
        },
        setSingleJob:(state,action)=>{
            state.singleJob = action.payload
        }

    },
});



export const {setAllJobs,setSingleJob} = jobSlice.actions;
export default jobSlice.reducer