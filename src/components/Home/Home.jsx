import React from 'react';
import { Routes, Route, Outlet} from 'react-router-dom';

import Banner from './Banner/Banner'
import Navbar from '../Nav/Navbar'
import Jobs from '../Jobs/Jobs'
import NewJobPost from '../jobPostForm/NewJobPost'
import Companies from '../companies/Companies';
import FAQ from '../FAQ/FAQ';
import PopularJobs from '../popularJobs/PopularJobs';
import Footer from '../footer/Footer';
export default function Home({setShowForm, showForm,jobs, setJobs,loading,fetchJobsSearch,setViewJob,viewDetails, setViewDetails,fetchJobs}) {
  return (
    
    <>
      <Outlet />
    <div className='relative h-full m-0 p-0 top-0'>       
        <Banner 
          fetchJobsSearch={fetchJobsSearch}
        />
        <Jobs 
          setShowForm={setShowForm}
          showForm={showForm}
          jobs={jobs}
          setJobs={setJobs}
          loading={loading}
          fetchJobs ={fetchJobs}
          // 
          setViewJob={setViewJob}
          // 
          viewDetails={viewDetails}
          setViewDetails={setViewDetails}
        />
        <Companies />
        <FAQ/>
        <PopularJobs />      
        <Footer />
    </div>   
    </>
  )
}
