import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getJobs } from '../redux/JobsReducer/actions';

import { useSelector, useDispatch } from 'react-redux';
import CardJob from './CardJob';



function BrowseJobs() {
    const dispatch = useDispatch();
    const jobsState = useSelector(state => state.jobsReducer);
    const { data:jobs, loading} =jobsState
    
    useEffect(() => {
      const storedJobDetails = JSON.parse(localStorage.getItem('jobs'));
      dispatch(getJobs());
    }, [dispatch]);
    
  return (
    <div>
        <div className="relative overflow-hidden mt-2">
        {loading && jobs.length === 0 ?(<div className='mx-auto text-green-500 flex justify-center items-center'>Data Loading...</div>):(
          <div className='flex space-y-20 md:space-y-0 md:gap-2 max-w-6xl mx-auto flex-col md:flex-row px-6 '>
              <div className='max-w-4xl flex-[1.7] w-full mt-10 ml-1 space-y-4'>
                {jobs.map(job =>{
                    return(
                <CardJob
                    key={job.id}
                    {...job}
                />
                )}
                )}
              </div>
              <div className='flex-[0.5] border-l-[2px] border-gray-400 h-fit pl-3 md:pt-7 mt-7 md:mt-0'>
                <div className='border-b-1.5px pb-6 border-b-[1.5px] border-gray-400'>
                  <p className='text-b sm:text-base md:text-lg font-bold'>Avg. internship hourly pay</p>       
                  <p>For Remote Internships</p>
                  <p className='text-lg sm:text-xl md:text-2xl font-bold'> $15.00 - $16.00</p>
                </div>
                <div className='space-y-5 mt-6 group'>
                  <div className='text-b sm:text-base md:text-lg font-bold'>More 2024 Remote Internships</div>
                  <>
                    <p className='w-fit cursor-pointer my-2 border-b-[1px] border-transparent hover:border-teal-500 text-teal-500 hoover:group'>Accounting </p>
                    <p className='w-fit cursor-pointer my-2 border-b-[1px] border-transparent hover:border-teal-500 text-teal-500 hoover:group'>Administration</p>
                    <p className='w-fit cursor-pointer my-2 border-b-[1px] border-transparent hover:border-teal-500 text-teal-500 hoover:group'>Animation</p>
                    <p className='w-fit cursor-pointer my-2 border-b-[1px] border-transparent hover:border-teal-500 text-teal-500 hoover:group'>Business</p>
                    <p className='w-fit cursor-pointer my-2 border-b-[1px] border-transparent hover:border-teal-500 text-teal-500 hoover:group'>Computer Science</p>
                    <p className='w-fit cursor-pointer my-2 border-b-[1px] border-transparent hover:border-teal-500 text-teal-500 hoover:group'>Education</p>
                    <p className='w-fit cursor-pointer my-2 border-b-[1px] border-transparent hover:border-teal-500 text-teal-500 hoover:group'>Engineering</p>
                    <p className='w-fit cursor-pointer my-2 border-b-[1px] border-transparent hover:border-teal-500 text-teal-500 hoover:group'>Film</p>
                    <p className='w-fit cursor-pointer my-2 border-b-[1px] border-transparent hover:border-teal-500 text-teal-500 hoover:group'>Finance</p>
                    <p className='w-fit cursor-pointer my-2 border-b-[1px] border-transparent hover:border-teal-500 text-teal-500 hoover:group'>Graphic Design</p>
                    <p className='w-fit cursor-pointer my-2 border-b-[1px] border-transparent hover:border-teal-500 text-teal-500 hoover:group'>High School</p>
                    <p className='w-fit cursor-pointer my-2 border-b-[1px] border-transparent hover:border-teal-500 text-teal-500 hoover:group'>Human Resources</p>
                    <p className='w-fit cursor-pointer my-2 border-b-[1px] border-transparent hover:border-teal-500 text-teal-500 hoover:group'>Journalism</p>
                    <p className='w-fit cursor-pointer my-2 border-b-[1px] border-transparent hover:border-teal-500 text-teal-500 hoover:group'>Management</p>
                    <p className='w-fit cursor-pointer my-2 border-b-[1px] border-transparent hover:border-teal-500 text-teal-500 hoover:group'>Paid</p>
                    <p className='w-fit cursor-pointer my-2 border-b-[1px] border-transparent hover:border-teal-500 text-teal-500 hoover:group'> Public Relations </p>
                  </>
                </div>
              </div>
        </div>
        )}
    </div>
</div>
  )
}

export default BrowseJobs