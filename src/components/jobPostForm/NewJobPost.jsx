import React,{useState} from 'react'
import './JobPost.css';
import {GrClose} from 'react-icons/gr';

function NewJobPost({jobDetails, setJobDetails, postJob, closeForm}) {
const skills = ["Javascript","Typescript","React","Node","Vue","HTML/CSS","Tailwidcss","Python","Java","C++","SQL","Firebase","Sprongboot","R","Excel"]
const [selectedSkills, setSelectedSkills] = useState([]);

 const handleChange =(e)=>{
  e.persist();
  const { name, value } = e.target;
    setJobDetails((prevJobDetails) => ({
      ...prevJobDetails,
      [name]: value
    }));
 }

//  addRemoveSkill

  const toggleSkill = (skill) => {
    const updatedSkills = jobDetails.skills.includes(skill)
      ? jobDetails.skills.filter((skl) => skl !== skill)
      : jobDetails.skills.concat(skill);
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      skills: updatedSkills,
    }));
  };

// posting handler
const handlePostSubmit =async (e)=>{
  // e.preventDefault();
  for(const field in jobDetails){
    if(typeof jobDetails[field] === "string" && !jobDetails[field]) return
  }
  if(!jobDetails.skills.length) return;

  // Update skills array in the jobDetails object
  await postJob(jobDetails);
  closeForm()
}
  return (
    <div className=' mx-auto items-center w-full h-full my-auto relative z-[200] top-[58px] sm:top-[65px] '>
     <div class="bg-slate-200 form-container mx-auto max-w-5xl p-6  w-full shadow-xl space-y-5">      
        <h2 className='text-2xl font-semibold'>Job Post Form</h2>
        <GrClose size={24} className='absolute top-3 right-16 lg:right-44 cursor-pointer text-orange-400' onClick={()=>closeForm()}/>
        <div>
        <div className='form-wrapper space-y-5 sp' >
          <div className='f-item1 flex flex-col '>
            <label for="job-title" className='text-lg'>Job Title:</label>
            <input onChange={handleChange} type="text" id="job-title" name="jobTitle" value={jobDetails.jobTitle} autoComplete="off" placeholder="Job-title *" className='border-[1.5px] border-gray-200 outline-none rounded-md py-2 px-5' required/>
          </div>
          <div className='flex sm:space-x-8 flex-col sm:flex-row'>
              <div className='f-item2 flex flex-1 flex-col'>
                <label for="company-name">Company Name:</label>
                <input onChange={handleChange} type="text" id="company-name" name="companyName"  value={jobDetails.companyName} autoComplete="off" className='border-[1.5px] border-gray-200 outline-none rounded-md py-2 px-5' required/>
              </div>
              <div className='f-item3 flex-1 flex  flex-col'>
                <label for="company-url">Company URL:</label>
                <input onChange={handleChange} type="url" id="company-url" name="companyUrl" value={jobDetails.companyUrl} className='border-[1.5px] border-gray-200 outline-none rounded-md py-2 px-5' required/>
              </div>
          </div>
          <div className='flex sm:space-x-8 flex-col sm:flex-row flex-col sm:flex-row'>
              <div className='flex-1 f-item3 flex flex-col'>
                <label>Job Type:</label>
                <label><input onChange={handleChange} type="radio" name="type"  value='Full-time' checked={jobDetails.type === 'Full-time'}/>Full-time</label>
                <label><input onChange={handleChange} type="radio" name="type" value='Contract' checked={jobDetails.type === 'Contract'}/>Contract</label>
                <label><input onChange={handleChange} type="radio" name="type" value='Internship' checked={jobDetails.type === 'Internship'}/>Internship</label>
                <label><input onChange={handleChange} type="radio" name="type" value='Part-time' checked={jobDetails.type === 'Part-time'}/>Part-time</label>
              </div>
              <div className='flex-1 f-item4 flex flex-col'>
                <label for="job-link">Job Link:</label>
                <input onChange={handleChange} type="url" id="job-link" name="jobLink" value={jobDetails.jobLink} className='border-[1.5px] border-gray-200 outline-none rounded-md py-2 px-5' required/>
              </div>
          </div>
          <div className='flex sm:space-x-8 space-y-3 sm:space-y-0 flex-col sm:flex-row'>
              <div className='flex-1 f-item5 flex flex-col'>
                <label for="job-description">companyHQ *:</label>
                <input onChange={handleChange} type="text" name="companyHQ" value={jobDetails.companyHQ} className='border-[1.5px] border-gray-200 outline-none rounded-md py-2 px-5' required/>
              </div>
              <div className='flex-1 f-item6 flex flex-col'>
                <label for="category">Location:</label>
                <select id="category" onChange={handleChange} name="location" value={jobDetails.location} defaultValue='Remote' className='border-[1.5px] border-gray-200 outline-none rounded-md py-2 px-5'>
                    <option value="Remote">Remote</option>
                    <option value="In Office">In-Office</option>
                </select>
              </div>
          </div>
          <div className='flex-1 f-item5 flex flex-col'>
                <label for="job-description">Job Description:</label>
                <textarea id="job-description" name="description" value={jobDetails.description} rows={9} className='border-[1.5px] border-gray-200 outline-none rounded-md py-2 px-5' onChange={handleChange}  required></textarea>
          </div>
          <div className='flex space-x-8 mb-3'>
              <div className='flex-1 f-item7 flex flex-col'>
                <label for="skills">Skills Required:</label>
                <div className='space-y-1'>{skills.map((skill)=>
                <button key={skill} className={`border-[1.5px] border-gray-300 bg-gray-800 text-lg text-white py-1 px-4 mx-1 rounded-md ${jobDetails.skills.includes(skill) && 'bg-orange-100 text-gray-950'}` } 
                 onClick={() =>toggleSkill(skill)}>{skill}</button>)}
                </div>
              </div>
          </div>
        <div className='flex justify-between pt-6'>
          <p className='text-red-700 text-base'>* Required Fields</p>
          <button type="submit" className='w-fit flex items-center justify-center bg-green-400 hover:bg-green-700 text-lg py-2 px-6 text-white text-center rounded-lg' onClick={()=>handlePostSubmit()}>Post Job</button>
        </div>
        </div>
        </div>
     </div>
    </div>

  )
}

export default NewJobPost;