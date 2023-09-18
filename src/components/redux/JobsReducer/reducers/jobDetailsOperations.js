import { GET_JOB_DETAILS_SUCCESS,GET_JOB_DETAILS_REQUEST, GET_JOB_DETAILS_FAILURE} from "../actions/jobDetailsActions";

const initialState ={
    loading: false, // Initially set to true
    data: null, // }Your job data
    error: null,
}

const jobDetailsReducer=(state=initialState, action)=>{
    switch(action.type){        
            // getting job details
        case GET_JOB_DETAILS_REQUEST:
                return {
                  ...state,
                  loading: true,
                  error: null,
                };
        case GET_JOB_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                jobDetails: action.payload,
                error: null,
              };

        case GET_JOB_DETAILS_FAILURE:
                return {
                  ...state,
                  loading: false,
                  jobDetails: null,
                  error: action.payload,
                };    
        default: 
            return state
    }
}
export default jobDetailsReducer;