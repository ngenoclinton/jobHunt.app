// reducer => reducer is a function that specifies how the application state changes in response to actions
// they take the current state and action as inputs and return the new state.

import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    jobs:[],
    loading:true,
}

const jobsSlice = createSlice({
    name:'jobs',
    initialState,
    reducers:{
        setJobs:(state, action)=>{
            state.jobs = action.payload;
            state.loading = false
        },
        setJobDetails:(state, action)=>{
            state.jobDetails = action.payload;
        },
        setViewJob:(state, action)=>{
            state.viewJob = action.payload;
        }
        // add other reducer actions
    }
})

export const selectAllJobs = (state)=>state.jobs;

export const {setJobs, setJobDetails, setViewJob} = jobsSlice.actions;
export default jobsSlice.reducer;