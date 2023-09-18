import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobDetails, getJobDetailsSuccess} from '../../redux/JobsReducer/actions/jobDetailsActions';
import {addToFavorites, removeFromFavorites } from '../../redux/JobsReducer/actions/favoritesActions';

// ICONS
import { AiOutlineStar } from "react-icons/ai";

import Footer from '../../footer/Footer';
// viewdetails.css
import './viewdetails.css';

 const ViewJobDetails = (props) => { 

    const { jobId } = useParams();// Get the job ID from the URL params
    const dispatch = useDispatch();  

    // selectors 
    const  details = useSelector(state=>state.jobDetailsReducer);
    const { jobDetails:jobDetails, loading} = details

    // favorites data
    const favorites = useSelector(state=>state.favoritesReducer);
    // const { favorites:favorites} = favorites

    // data from local  storage
    const storedJobs = JSON.parse(localStorage.getItem('jobs'));     
        const job = storedJobs.filter(job=> job.id == jobId);

    useEffect(() => {
        // Check local storage for job details
        const storedJobDetails = JSON.parse(localStorage.getItem('jobDetails'));
        if (storedJobDetails && storedJobDetails.id === jobId) {
          // If job details are found in local storage, dispatch success action
          dispatch(getJobDetailsSuccess(storedJobDetails));
        } else {
          // Fetch job details when the component mounts
          dispatch(fetchJobDetails(jobId));
        }

        dispatch(fetchJobDetails(jobId)); 
      }, [dispatch, jobId]);

      // favorites 
      // Check if the job is already in favorites
      const isFavorite = favorites.favorites.some((favorite) => favorite.id === jobId);
    

      // Function to toggle favorite status
      const toggleFavorite = () => {
        if (isFavorite) {
          dispatch(removeFromFavorites(jobId));
          // Remove the job from local storage
          const updatedFavorites = favorites.favorites.filter((favorite) => favorite.id !== jobId);
          localStorage.setItem('favorites', JSON.stringify(updatedFavorites));          
        } else {
          // Pass the job details to addToFavorites action
          dispatch(addToFavorites(jobDetails[0]));
          // Update local storage with the updated list of favorite jobs
          const updatedFavorites = [...favorites.favorites, jobDetails[0]];
          localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
      };



  return (
  <div key={jobId}>
    <div className='flex max-w-5xl mx-auto gap-8 mt-14'>    
    
        {loading ? (
        <div>Loading...</div>
        ) : (
        <div className='flex space-x-12'>
            <div className="job-details flex-[1.9]">
                
                <div className='space-y- flex justify-between'> 
                  <div className='space-y-5'>             
                    <h2 className='capitalize font-bold sm:text-xl md:text-3xl'>{job[0].jobTitle}</h2>              
                    <span className='date-posted block text-xs'> {job[0].companyName} | {job.companyHQ} </span>
                    <div className='text-sm font-semibold opacity-80 flex space-x-2 mb-1'>
                        <span className='block bg-teal-100 rounded-3xl px-1 py-[1px]'> {job[0].type} </span>
                        <span className='block bg-teal-200 rounded-3xl px-2 py-[1px]'>  {job[0].location}</span>
                    </div> 
                    <span className='skills text-sm flex flex-wrap'>{job[0].skills.map(skill=>
                    (<span className='flex flex-row px-[1px]'> {skill} | </span>))}</span>                    
                    <div className=' location text-lg font-semibold opacity-80'>
                        <span className='block'></span>
                    </div>              
                  </div> 

                  <div className='space-y-4 flex flex-col items-center'>
                  <div className='text-left items-end tooltip'  onClick={toggleFavorite}>
                    <AiOutlineStar size={28} className='hover: rounded-3xl p-1 hover:bg-yellow-600 cursor-pointer'  />
                    <span className='tooltiptext text-sm px-[1px]' >Add To Job Tracker</span>
                  </div>
                    <div className='pr-8 space-y-3'>
                      <button className='block bg-orange-400 rounded-3xl px-5 py-[3px] text-lg text-white'> Apply Now </button>
                      <span className='block px-2 py-[1px]'>  {job[0].location}</span>
                    </div>
                  </div>                      
                </div>
                <>
                <p className='about-title text-base font-semibold'>Description</p>
                <p className='description text-base leading-8 mt-4'>{job[0].description}</p>
                </>
            </div>
            <div className='flex-[0.5]'>
              <h2 className='capitalize border-b-[2px] border-gray-200 text-sm pb-2 mb-3'>OTHER RELEVANT JOBS</h2>
              <div className='space-y-3 cursor-pointer'>
                {storedJobs.map(job=>{
                  return ( 
                  <Link to={`/browse-jobs/${job.id}`}>
                    <div className='border-b-[2px] border-gray-200 space-y-1 pb-2' key={job.id}>
                      <span className='capitalize'>{job.jobTitle}</span>
                      <span className='date-posted block text-xs'> {job.companyName} | {job.companyHQ} </span>
                      <span className='date-posted block text-xs'>{job.location}</span>
                    </div>
                  </Link>)
                })}
              </div>
              
            </div>
        </div>
        )}
  </div>
  <Footer/>
  </div>
  )
}

export default ViewJobDetails;