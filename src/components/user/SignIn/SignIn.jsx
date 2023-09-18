import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {GrClose} from 'react-icons/gr';

function SignIn(handleSwitch) {
 
  return (
    <div className=' mx-auto items-center w-full h-screen my-auto relative z-50 pt-20 bg-gray-500'>
     <div class="bg-slate-100 mx-auto max-w-2xl p-10 px-20  w-full shadow-lg space-y-4 relative flex-col flex justify-center">      
        <h2 className='text-2xl font-semibold text-center'>Sign In</h2>
        <span className="text-sm text-center">to your account</span>
        {/* <GrClose size={24} className='absolute top-3 right-16 lg:right-44 cursor-pointer text-orange-400' /> */}
        
        <div className='div-wrapper space-y-3 items-center flex-col' >      
            <div className='f-item3 flex-1 flex  flex-col'>
            <label for="email">Email:</label>
            <input  type="email" name="email" className='border-[1.5px] border-gray-200 outline-none rounded-md py-2 px-5 w-full' required/>
            </div>
            <div className='f-item3 flex-1 flex  flex-col'>
            <label for="password">Password:</label>
            <input  type="password" name="password" className='border-[1.5px] border-gray-200 outline-none rounded-md py-2 px-5 w-full ' required/>
            </div>
        </div>

        <button className='w-fit flex items-center justify-center bg-orange-400 hover:bg-orange-600 text-lg py-2 px-6 text-white rounded-lg'>Sign-In</button>

        <span className="text-sm items-center flex justify-center">Don't have an account? <Link to="/create-account"><span className='text-green-600 cursor-pointer' onClick={handleSwitch}>Sign up</span></Link></span>
     </div>
    </div>
  )
}

export default SignIn