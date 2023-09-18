import React,{useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import {GrClose} from 'react-icons/gr';
import { db } from '../../utils/firebase/firebase.utils';
import { collection, getDocs,doc,getDoc ,addDoc,query, orderBy,where ,serverTimestamp } from "firebase/firestore"; 
import {formatDistanceToNow} from 'date-fns';

import './Jobs.css';

function ViewJob({job, closeView}) {
  let {id}=useParams();
  console.log(job)
  // Timme stamp
  const postedOnTimestamp = job.postedOn;
  const timeDifference = Date.now() - postedOnTimestamp;

  let formattedPostedOn =''
  if (timeDifference < 3600000) { // Less than 1 hour (in milliseconds)
    formattedPostedOn = formatDistanceToNow(postedOnTimestamp, { addSuffix: true, includeSeconds: true });
  } else if (timeDifference < 86400000) { // Less than 24 hours
    formattedPostedOn = formatDistanceToNow(postedOnTimestamp, { addSuffix: true });
  } else if (timeDifference < 604800000) { // Less than 7 days
    formattedPostedOn = formatDistanceToNow(postedOnTimestamp, { addSuffix: true });
  } else if (timeDifference < 2419200000) { // Less than 4 weeks (28 days)
    formattedPostedOn = formatDistanceToNow(postedOnTimestamp, { addSuffix: true });
  } else { // More than 4 weeks
    formattedPostedOn = formatDistanceToNow(postedOnTimestamp, { addSuffix: true, month: 'long' });
  }

  // Remove the "about" prefix
formattedPostedOn = formattedPostedOn.replace('about ', '');
  return (
    <div className="viewJob w-full z-50 flex items-center justify-center">
      {!!Object.keys(job).length && <div className='mx-auto w-[80%] h-fit rounded-md  z-50 bg-gray-100  relative top-auto md:top-80 bottom-0 ' open={Object.keys(job).length}>
            
          <div className=' relative overflow-y-auto p-12 justify-evenly space-y-10 flex flex-col'>
          <GrClose size={24} className='absolute top-3 right-3 cursor-pointer' onClick={()=>closeView()}/>

              <div className="flex flex-col sm:flex-row justify-between flex-1 space-y-4">
              <div className='space-y-3'>
                  <h3 className='job-title font-semibold text-xl'>{job.jobTitle}</h3>
                  <div className='text-lg'>{job.companyName} |{job.companyHQ}</div>
                  <div className='rounded-2xl py-[2px] px-4 bg-blue-100 w-fit'>{job.type}</div>
              </div>
              <div className='flex flex-col sm:items-center sm:text-center space-y-3'>
                <Link to="account"><button className='py-2 px-5 bg-orange-400 rounded-md w-fit text-white' onClick={()=>closeView()}>Apply Now</button></Link>
                <span>{formattedPostedOn}</span>
              </div>            
              </div>
              <div className='space-y-5 flex-1'>
                  <div className='font-semibold text-lg'>Description</div>
                  <span>{job.description}</span>
              </div>
              <div className='space-y-5 flex-1'>
                  <div className='font-semibold text-lg'>Skills Required:</div>
                  <div className='grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5'>{job.skills&&
                    job.skills.map((skill)=>
                      (<div key={skill} className='grid grid-cols-5 py-1 px-4'>{skill}</div>)
                    )}</div>
              </div>
          </div>
      </div>}
    </div> 
  )
}

export default ViewJob;