import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home'
import Navbar from './Nav/Navbar';

function ParentIndex({setShowForm, showForm, jobs, setJobs,loading,fetchJobsSearch,setViewJob, viewDetails, setViewDetails, fetchJobs }) {
  return (
    <div className='relative'>
    <Navbar 
      setShowForm={setShowForm}
      showForm={showForm}
    />
      <Home 
        setShowForm={setShowForm}
        showForm={showForm}
        jobs={jobs}
        setJobs={setJobs}
        loading={loading}
        fetchJobsSearch={fetchJobsSearch}
        fetchJobs ={fetchJobs }
        // 
        setViewJob={setViewJob}
        // 
        viewDetails={viewDetails}
        setViewDetails={setViewDetails}
      />
    </div>
  )
}

export default ParentIndex
