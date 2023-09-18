import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import lineClamp from 'line-clamp';
import { format, differenceInDays, differenceInMonths, differenceInMinutes, formatDistanceToNow} from 'date-fns';

function JobCard(props) {
  const {jobTitle, type,location, skills,companyHQ,companyName,description,id, setViewDetails, viewDetails, open}=props;
  
  useEffect(() => {
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach(description => {
      lineClamp(description, 3); // Show up to 3 lines for each description
    }); // Show up to 3 lines
  }, []);

// Assuming props.postedOn is a timestamp in milliseconds
const postedOnTimestamp = props.postedOn;
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
    <div>
        <div className='card flex flex-col shadow-2xl p-5 space-y-2 h-fit rounded-lg cursor-pointer flex-nowrap z-0'>
            <h3 className='job-title text-xl  md:text-2xl font-semibold capitalize'>{jobTitle}</h3>
            <span className='date-posted block text-xs'>Posted {formattedPostedOn} | {type} | {location}</span>
            <span className='skills text-sm flex flex-wrap'>{skills.map(skill=>
            (<span className='flex flex-row px-[1px]'> {skill} | </span>))}</span>                    
            <div className=' location text-lg font-semibold opacity-80'>
                <span className='block'>{companyHQ}</span>
            </div>
            <div className='company-name text-lg font-semibold opacity-80'>
                <span className='block'>{companyName}</span>
            </div>
            <p className='about-title text-base font-semibold'>About the Role</p>
            <p className='description text-base leading-8'>{description}</p>
            <Link >
            {/* to={`/job/${id}`}  */}
              <button className="w-full bg-orange-400 text-base text-white py-2 rounded-lg" onClick={open}>
                See Details
              </button>
            </Link>
        </div>
    </div>
  )
}

export default JobCard;