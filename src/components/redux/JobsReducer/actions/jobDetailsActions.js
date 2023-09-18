import { db } from "../../../../utils/firebase/firebase.utils";
import { collection, getDocs,getDoc, query, doc, orderBy,where ,serverTimestamp} from "firebase/firestore";

// Define action types
export const GET_JOB_DETAILS_REQUEST = 'GET_JOB_DETAILS_REQUEST';
export const GET_JOB_DETAILS_SUCCESS = 'GET_JOB_DETAILS_SUCCESS';
export const GET_JOB_DETAILS_FAILURE = 'GET_JOB_DETAILS_FAILURE';

// Action creators
export const getJobDetailsRequest = () => ({
  type: GET_JOB_DETAILS_REQUEST,
});

export const getJobDetailsSuccess = (jobDetails) => ({
  type: GET_JOB_DETAILS_SUCCESS,
  payload: jobDetails,
});

export const getJobDetailsFailure = (error) => ({
  type: GET_JOB_DETAILS_FAILURE,
  payload: error,
});

// Thunk action to fetch job details
export const fetchJobDetails = (jobId) => async (dispatch) => {
  try {
    dispatch(getJobDetailsRequest());
 
    const jobDocRef = doc(db, 'jobs', jobId);
    const jobDoc = await getDoc(jobDocRef);

    if (jobDoc.exists()) {
      const jobDetails = {
        id: jobDoc.id,
        jobData:jobDoc.data(),
      };

      // Persist Job Details in Local Storage
      localStorage.setItem('jobDetails', JSON.stringify(jobDetails));

      // getting jobs from local storage 
      const storedJobs = JSON.parse(localStorage.getItem('jobs'));
      const job = storedJobs.filter(job=> job.id == jobId);

      dispatch(getJobDetailsSuccess(job));

    } else {
      dispatch(getJobDetailsFailure('Job not found'));
    }
  } catch (error) {
    dispatch(getJobDetailsFailure(error.message));
  }
};
