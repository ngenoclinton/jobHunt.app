
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites, setFavorites } from '../redux/JobsReducer/actions/favoritesActions';

import { AiOutlineStar } from "react-icons/ai";

const SavedJobs = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state=>state.favoritesReducer);
    console.log(favorites);

    useEffect(() => {
        // Check local storage for favorite jobs
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
      
        if (storedFavorites && storedFavorites.length > 0) {
          // Dispatch an action to set the favorites in the Redux store
          dispatch(setFavorites(storedFavorites));
        }
      }, [dispatch]);

    const savedJobs = JSON.parse(localStorage.getItem('favorites'));
    console.log(savedJobs);

    const handleRemoveFromFavorites = (id)=>{
              const isFavorite = savedJobs.some((favorite) => favorite.id === id);

        if (isFavorite) {
            dispatch(removeFromFavorites(id));
            // Remove the job from local storage
            const updatedFavorites = savedJobs.filter((favorite) => favorite.id !== id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));          
          }
    }

  return (
    <div  className='mx-auto max-w-6xl mt-7 items-center'>

      <div>
        {savedJobs.length < 1 ? (<div className='mx-auto max-w-2xl px-32 py-16 bg-gray-300 justify-center items-centerx'>No Results Found</div>) : (
            <div className='grid grid-cols-5 space-x-4'>
                {savedJobs.map((job)=>{
                    return(
                      <Link to={`/browse-jobs/${job.id}`}>  <div className='border-[1px] border-gray-300 px-5 py-4 space-y-2 cursor-pointer flex flex-col justify-evenly' key={job.id}>
                            <div> 
                                <AiOutlineStar size={28} className='hover: rounded-3xl cursor-pointer text-orange-500' onClick={()=>handleRemoveFromFavorites(job.id)}/>
                            </div>
                            <div className='text-sm font-semibold capitalize'>
                                {job.jobTitle}
                            </div>
                                <div className='text-xs'>{job.location}</div>
                            <div className='flex justify-between'>
                                <span className='text-sm'>Time past</span>
                                <button className='rounded-lg text-[12px] text-center px-[1px] py-[1px] bg-orange-500 text-white'>See details</button>
                            </div>
                        </div></Link>
                    )
                })}
            </div>
        )}          
      </div>
    </div>
  )
}

export default SavedJobs
