import React, {useState, Fragment} from 'react';
import { Outlet,Link } from 'react-router-dom';
import { AiOutlineMenuUnfold, AiOutlineCloseCircle } from "react-icons/ai";

import './Navbar.css';

function Navbar({setShowForm, showForm}) {
  const [searchItem, setSearch] = useState("");
  const [showMenu, setShowMenu]=useState(false);
  const [showMyJobs, setShowMyJobs]=useState(false);

  const toggleMenu = ()=>{
    setShowMenu(!showMenu);
  } 
  const toggleMyJobs = ()=>{
    setShowMyJobs(!showMyJobs);
  } 
  
  const storedFavorites = JSON.parse(localStorage.getItem('favorites'));

  return (
    <Fragment>
      <div className='py-3 px-10 items-center border-b-[3px] border-orange-500 relative'>
          <div className='relative max-w-7xl mx-auto flex justify-between items-center  text text-lg'>
               <div className='flex justify-center items-center space-x-10'>
              <Link to="/"><h3 className='text-2xl font-bold cursor-pointer flex-1'>CareerConnect</h3> </Link>
              <div className='relative myJobs-container' onClick={toggleMyJobs}>
              <span className=' flex-1 justify-center items-center hidden md:flex cursor-pointer hover:text-orange-500 text-sm font-semibold'>MY JOBS</span>
                {showMyJobs&&<div className='my-jobs absolute top-8 transform  border-[1.5px] py-2 flex flex-col justify-center items-center bg-white rounded-lg shadow-md z-50 w-[130px] '>                      
                  <Link to ='/favorites'> <span className='hover:text-orange-500  font-semibold text-base text-center w-[130px]  py-1'>Saved ({storedFavorites.length})</span></Link>
                  {/* <Link> <span className='hover:text-orange-500  font-semibold text-base text-center py-1 w-[130px] '>Visited (0)</span></Link> */}
                  </div>}                
              </div>
              <Link to='/browse-jobs'><span className='flex-1 justify-center items-center hidden md:flex cursor-pointer hover:text-orange-500 text-sm font-semibold'>BROWSE</span></Link>
              </div>               
              <div className='flex space-x-4 uppercase text-sm'>                  
                  <span className='cursor-pointer hover:text-orange-500 lg:mr-20 bg-orange-300 hover:bg-white border group-hover:border-[1.5px] hover:border-orange-400 text-white rounded-lg px-7 lg:px-10 py-2 sm:block hidden' onClick={()=>setShowForm(!showForm)}>Post Job</span>                
                  <div className='space-x-1 justify-center items-center hidden md:flex'>
                      <Link to='/sign-in'><span className='cursor-pointer hover:text-orange-500 '>Sign In</span></Link>
                        <span className='bg-gray-950 h-[18px] w-[1px]'/>
                      <Link to="/create-account"><span className='cursor-pointer hover:text-orange-500'>Create Account</span></Link>
                  </div>
              </div>
              
          </div>
      {showMenu&& <div className='absolute nav-menu bg-gray-100 z-30 space-x-4 uppercase text-sm w-full left-0 top-0 bottom-0 h-screen flex flex-col md:hidden pb-10'>                   
                <span className='cursor-pointer hover:text-orange-500 lg:mr-20 bg-orange-300 hover:bg-white border group-hover:border-[1.5px] hover:border-orange-400 text-white rounded-lg px-7 py-2 m-2 w-fit h-fit' onClick={()=>setShowForm(!showForm)}>Post Job
                </span>
                <Link to ='/favorites'> <span className='hover:text-orange-500  font-semibold text-base text-center w-[130px]  py-1' onClick={()=>setShowMenu(!showMenu)}>SAVED ({storedFavorites.length})</span></Link>
                <div className='py-4'><Link to="/browse-jobs"><span className='text-base flex-1 cursor-pointer hover:text-orange-500 text-sm font-semibold' onClick={()=>setShowMenu(!showMenu)}>BROWSE</span></Link></div>
                <div className='flex flex-c w-full space-x-2 font-semibold'>
                      <Link to='/sign-in'><span className='cursor-pointer hover:text-orange-500 ' onClick={()=>setShowMenu(!showMenu)}>Sign In</span></Link> <div>|</div>
                      <Link to="/create-account"><span className='cursor-pointer hover:text-orange-500' onClick={()=>setShowMenu(!showMenu)}>Create Account</span></Link>
                </div>
          </div>
          }
          <div className="absolute top-3 right-10 items-center md:hidden z-40">
                  {showMenu ? <AiOutlineCloseCircle size={32} className='absolute AiOutlineMenuUnfold' onClick={toggleMenu}  />:
                  <AiOutlineMenuUnfold size={32} className='absolute AiOutlineMenuUnfold' onClick={toggleMenu} />}
          </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navbar;