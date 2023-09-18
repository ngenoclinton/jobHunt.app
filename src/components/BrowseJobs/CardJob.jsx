import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import lineClamp from 'line-clamp';
import { formatDistanceToNow } from 'date-fns';

const CardJob = (props) => {
    const {id, jobTitle, type,location, skills,companyHQ,companyName,description,postedOn}=props;


    useEffect(() => {
        const descriptions = document.querySelectorAll('.description');
        descriptions.forEach(description => {
          lineClamp(description, 2); // Show up to 3 lines for each description
        }); // Show up to 3 lines
      }, []);
    // Assuming props.postedOn is a timestamp in milliseconds
    const postedOnTimestamp = postedOn;
    
    const currentDate = new Date(); // Current date
    // Calculate the time difference in milliseconds
    const timeDifference = Date.now() - postedOnTimestamp;
    
    // Determine the appropriate format based on the time difference
    let formattedPostedOn = '';
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
    <div key ={id}>
      <Link to={`/browse-jobs/${id}`}>
          <div className="border-[1px] hover:border-[1px] hover:border-orange-400 p-4 space-y-2 cursor-pointer rel\ative" >
              <div  className='flex items-center justify-between'>
                <h3 className='job-title text-xl  md:text-xl font-semibold capitalize'>{jobTitle}</h3>
                <span className='date-posted block text-sm space-y-1'>Posted {formattedPostedOn}</span>
              </div>
              <span className='date-posted block text-xs'> {companyName} | {companyHQ} </span>
              <span className='skills text-sm flex flex-wrap'>{skills.map(skill=>
              (<span className='flex flex-row px-[1px]'> {skill} | </span>))}</span>                    
              <div className=' location text-lg font-semibold opacity-80'>
                  <span className='block'></span>
              </div>
              
              {/* <p className='about-title text-base font-semibold'>About the Role</p> */}
              <p className='description text-base leading-8'>{description}</p>
              <div className='text-sm font-semibold opacity-80 flex space-x-2 mb-1'>
                  <span className='block bg-teal-100 rounded-3xl px-1 py-[1px]'> {type} </span>
                  <span className='block bg-teal-200 rounded-3xl px-2 py-[1px]'>  {location}</span>
              </div>             
              
              <button className=" see-more-btn w-fit bg-orange-400 text-base text-white py-1 px-4 rounded-2xl items-end flex justify-end  ">
                  See Details
              </button>
          </div>
      </Link>
  </div>
  )
}

export default CardJob
