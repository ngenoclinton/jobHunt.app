import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getJobs } from '../redux/JobsReducer/actions';

import { useSelector, useDispatch } from 'react-redux';
import CardJob from './CardJob';



function BrowseJobs() {
    const dispatch = useDispatch();
    const jobsState = useSelector(state => state.jobsReducer);
    const { data:jobs, loading} =jobsState
    console.log(jobs.length);
    console.log(jobs.length);
    useEffect(() => {
      const storedJobDetails = JSON.parse(localStorage.getItem('jobs'));
      dispatch(getJobs());
    }, [dispatch]);
    
  return (
    <div>
        <div className="relative">
        {loading && jobs.length === 0 ?(<div className='mx-auto text-green-500 flex justify-center items-center'>Data Loading...</div>):(
          <div className='max-w-4xl  w-full mt-10 ml-1 space-y-4'>
            {jobs.map(job =>{
                return(
            <CardJob
                key={job.id}
                {...job}
            />
            )}
            )}
        </div>)}
    </div>
</div>
  )
}

export default BrowseJobs