
// store => is a central data store that holds the applications state. single javascript object containing all data

import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; // Import thunk middleware

import jobsReducer from './jobsreducer/jobReducer';

export const store = configureStore({
    reducer:{
        job:jobsReducer,
    },
    middleware: [thunk, ...getDefaultMiddleware()],
}); 