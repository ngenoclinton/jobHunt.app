import { db } from "../../../../utils/firebase/firebase.utils";
import { collection, getDocs,getDoc, query, doc, orderBy,where ,serverTimestamp} from "firebase/firestore";

// action types =>represent the different states of the asynchronous data fetching process loading, success, and failure
export const GET_JOBS_REQUEST = 'GET_JOBS';
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS';
export const GET_JOBS_FAILURE = 'GET_JOBS_FAILURE';

// Action creators =>dispatch actions for these different states.
export const getJobsRequest = () => ({
  type: GET_JOBS_REQUEST,
});

export const getJobsSuccess = (jobs) => ({
  type: GET_JOBS_SUCCESS,
  payload: jobs,
});

export const getJobsFailure = (error) => ({
  type: GET_JOBS_FAILURE,
  payload: error,
});

// action is modified to dispatch these actions at the appropriate times during the data fetching process.
export const getJobs=()=>async(dispatch)=>{
    try{
      dispatch(getJobsRequest());

    const q = query(collection(db, 'jobs'), orderBy("postedOn", "desc"));
    const jobs = await getDocs(q);

    const tempJobs = jobs.docs.map((job) => (
          {...job.data(), id:job.id, postedOn:job.data().postedOn.toDate()}
      ));

      localStorage.setItem('jobs', JSON.stringify(tempJobs));

      dispatch(getJobsSuccess(tempJobs));

  }catch (error) {
      dispatch(getJobsFailure(error));
    }
}

