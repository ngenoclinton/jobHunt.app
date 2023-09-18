import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    jobs:[],
    loading:true,
    jobDetails:{
        companyName:"",
        companyUrl:"",
        companyHQ:"",
        description:"",
        jobLink:"",
        jobTitle:"",
        location:"",
        type:"",
        skills:[]
    },
    viewJob:{}
}