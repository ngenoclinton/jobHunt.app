import React, {useState, useEffect} from 'react'

import './Jobs.css';
import jobData from '../../dammyData';
import {GrClose} from 'react-icons/gr';
// components 
import JobCard from './JobCard';
function Jobs({jobs, loading,viewDetails, setViewDetails, setViewJob,fetchJobs}) {
    const[activeButton,setActiveButton] = useState('Internship');

    const handleButtonClick = (buttonType)=>{
        setActiveButton(buttonType);
    }
    
    {/* !!Object.keys(viewJob).length && */}
    console.log(Object.keys(jobs).length);

    const backSearch= async ()=>{
        await fetchJobs();
      }
  return (
    <div className='mx-auto w-full h-full z-0'>
        <div className='max-w-6xl flex flex-col mx-auto space-y-6 mt-20'>
            <div className='mx-auto text-3xl font-semibold text-center'>
                {activeButton === 'Internships' ? <p>Browse internships that lead to a Software Engineering career
                </p> : <p>Browse Software Engineering jobs
                </p>}
            </div>
            {loading ? (<div className="loader text-center text-xl items-center">Loading...</div>) : Object.keys(jobs).length == 0 ? <div className="loader text-center text-xl items-center bg-yellow-100 p-10">
            <div className="text-green-700">
                No Jobs offers fits your search
            </div>
            <button className='outline-none border-none bg-orange-400 px-3 py-2 text-green-700 mt-4' onClick={()=>backSearch()}>Go Back</button>
            </div> : <>
                {<div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 gap-6 z-30'>
                {jobs.map((job)=>{
                    
                return(<JobCard
                    open={()=>setViewJob(job)}
                    key={job.id}
                    {...job}
                    
                    viewDetails={viewDetails}
                    setViewDetails={setViewDetails}
                ></JobCard>)
    
                })}
            </div>}
            </> 
            }
        </div>        
    </div>
  )
}

export default Jobs