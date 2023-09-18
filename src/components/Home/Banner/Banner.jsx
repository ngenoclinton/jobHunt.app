import React, {useState} from 'react'
import './banner.css'
function Banner({fetchJobsSearch}) {

  const [jobSearch, setJobSearch] = useState({
    location:'Remote',
    type:'Full-time',
  });

  const handleSearch=(event)=>{
    event.persist();
    // const {name, value}=event.target;

    setJobSearch((prevDetails)=>({
      ...prevDetails,
      [event.target.name]:event.target.value
    }));
  }
  
  const search= async ()=>{
    await fetchJobsSearch(jobSearch);
  }

  return (
    <div  className='relative bg-[#58A36F]'>      
        <div className='h-fit flex flex-col md:flex-row py-6 max-w-2xl mx-auto'>
            <div className='left text-white  flex flex-col text-left px-6 pt-10 md:pt-16 space-y-6 md:space-y-10'>
              <h2 className="App-h2 text-xl sm:text-2xl md:text-3xl font-bold">
                CareerConnect: Job & Internship Hub
              </h2>
              <p className='text-lg sm:text-xl md:text-2xl font-semibold leading-10'>Find, apply & Land your dream remote internship or job opportunities in Software Engineering</p>
              <div className="flex flex-col sm:flex-row items-center  overflow-hidden justify-evenly space-y-5 sm:space-y-0 sm:space-x-3 w-full">
                <select onChange={handleSearch} value={jobSearch.type} name='type' defaultValue='Full-time' className="text-green-800 outline-none flex-1 py-3 px-5 w-full cursor-pointer">
                  <option value='Full-time'>Full-time</option>
                  <option value='Part Time'>Part-time</option>
                  <option value='Contract'>Contract</option>
                  <option value='Internship'>Internship</option>
                </select> 
                <select onChange={handleSearch} value={jobSearch.location} name='location' defaultValue='Remote' className="text-green-800 outline-none flex-1 py-3 px-5 w-full cursor-pointer rounded-[5px]">
                    <option value='Remote'>Remote</option>
                    <option value='In Office'>In-Office</option>
                </select>
                <button onClick={()=>search()} className="flex-1 w-full py-3 px-3  bg-orange-400 border-[1px] text-green-800 hover:text-white hover:bg-gre-600 rounded-[5px]">Search</button>
              </div>
            </div>
        </div>             
    </div>
  )
}

export default Banner