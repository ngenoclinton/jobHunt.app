import { combineReducers } from "redux";
import operationsReducer from "./reducers/operations";
import jobsReducer from "./JobsReducer/reducers/operations";
import jobDetailsReducer from "./JobsReducer/reducers/jobDetailsOperations";
import favoritesReducer from "./JobsReducer/reducers/favoritesReducerOperations";

const rootReducer = combineReducers({
    operationsReducer,
    jobsReducer,
    jobDetailsReducer,
    favoritesReducer,
})
export default rootReducer;