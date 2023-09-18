
import {GET_JOBS_REQUEST,GET_JOBS_SUCCESS,GET_JOBS_FAILURE} from "../actions";

const initialState ={
        loading: true, // Initially set to true
        data: [], // }Your job data
        error: null,
    }

const jobsReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_JOBS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
              };
        case GET_JOBS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
             };
        case GET_JOBS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default: 
            return state
    }
}
export default jobsReducer;