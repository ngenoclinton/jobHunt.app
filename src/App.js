import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// styling css
import './App.css';
// firebase methods
import {db } from './utils/firebase/firebase.utils';
import { collection, getDocs, addDoc,query, orderBy,where ,serverTimestamp } from "firebase/firestore"; 
import { getBooks } from './components/redux/actions';

//components
import Home from './components/Home/Home';
import NewJobPost from './components/jobPostForm/NewJobPost';
import Jobs from './components/Jobs/Jobs';
import ViewJob from './components/Jobs/ViewJob';
import Navbar from './components/Nav/Navbar';
import SignIn from './components/user/SignIn/SignIn';
import CreateAccount from './components/user/create-account/CreateAccount';
import Account from './components/user/Account';

  // selectors => are functions used to extract specific pieces of data from the stores state
  import SearchJob from './components/BrowseJobs/SearchJob';
import BrowseJobs from './components/BrowseJobs/BrowseJobs';
import ViewJobDetails from './components/BrowseJobs/Jobs/ViewJobDetails';
import SavedJobs from './components/SavedJobs/SavedJobs';
  // 
  function App() {
  const dispatch = useDispatch();
  // selectors are functions used to extract specific pieces of data from the stores state

  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(true);
  
  const [viewDetails, setViewDetails]=useState(false);
  const [viewJob, setViewJob] = useState({});


    const initialState = {
      companyName:"",
      companyUrl:"",
      companyHQ:"",
      description:"",
      jobLink:"",
      jobTitle:"",
      location:"",
      type:"",
      skills:[]
    }
  // 
  const [jobDetails, setJobDetails] =useState(initialState);

  const fetchJobs =async()=>{
    try {
      setCustomSearch(true);
      const req = await getDocs(collection(db, "jobs"), orderBy("postedOn", "desc"));
      const tempJobs = req.docs.map((job) => ({...job.data(), id:job.id, postedOn:job.data().postedOn.toDate()}));
      setJobs(tempJobs);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setLoading(true);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const postJob =async (postJobDetails, e)=>{
    
      try {
        const docRef = await addDoc(collection(db, "jobs"), {
          ...postJobDetails,
          jobTitle:postJobDetails.jobTitle.toLowerCase(),
          postedOn: serverTimestamp() // Use serverTimestamp() to set the timestamp
        });

        console.log("Document written with ID: ", docRef.id);
        fetchJobs();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

  const closeForm =()=>{
    setJobDetails(initialState);
    setShowForm(!showForm);
  }
  const closeView = () => {
    setViewJob({});
  };

  // JobsSearch function 
  const fetchJobsSearch =async (jobSearch) =>{
    try {
      // let results=[];
      const collectionRef = collection(db, "jobs")    
    
      const querySnap = await getDocs(query(collectionRef, 
        where("type", "==", jobSearch.type),
        where("location", "==", jobSearch.location)));

        let results = querySnap.docs.map((job) => ({
          ...job.data(), id:job.id, 
          postedOn:job.data().postedOn.toDate()}));

        console.log(results);
      setJobs(results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error.message);
      setLoading(false);
    }
  }

  return (

    <div className="App relative h-full">
        {!!Object.keys(viewJob).length &&  <div className='absolute bg-slate-950 bg-opacity-20 items-center justify-center top-0 bottom-0 left-0 right-0 h-full my-0 w-full z-40 overflow-y-auto'>
          <ViewJob
          job={viewJob}
          closeView={()=>setViewJob({})}
        />
      </div>}

      {showForm&&<div className='job-form absolute bg-gray-900 bg-opacity-20 items-center justify-center top-0 left-0 h-full w-full z-[300]'>
          <NewJobPost
            setShowForm={setShowForm}
            showForm={showForm}
            closeForm={closeForm}
            jobDetails={jobDetails}
            setJobDetails={setJobDetails}
            postJob={postJob}
          />
      </div>}

      {/* Routes  */}
      <Routes>    
        <Route path='/' element={<Navbar 
          setShowForm={setShowForm}
           showForm={showForm}
        />}>
          <Route index element={<Home 
            //  
           jobs={jobs}
           setJobs={setJobs}
          //  
           loading={loading}
           fetchJobsSearch={fetchJobsSearch}
          //  
           customSearch={customSearch} 
           setCustomSearch={setCustomSearch}
          //  
           setViewJob={setViewJob}
          //  
           viewDetails={viewDetails}
           setViewDetails={setViewDetails}
           fetchJobs ={fetchJobs}
          />} />
          <Route path='jobs' element={<Jobs/>} />          
          <Route path='job/:id' element={<ViewJob
            jobDetails={jobs}
           />} />
           <Route path='browse-jobs' element={<BrowseJobs />} />
           <Route path='browse-jobs/:jobId' element={<ViewJobDetails/>}></Route>
           <Route path='favorites' element={<SavedJobs />} />
        </Route>
        
        <Route path='sign-in' element={<SignIn/>} />
        <Route path='create-account' element={<CreateAccount/>} />
        <Route path='account' element={<Account/>}></Route>
        {/* <Route path='job' element={<JobDetails/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
