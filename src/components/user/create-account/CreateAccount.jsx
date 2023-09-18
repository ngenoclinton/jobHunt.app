import React from 'react';
import { Link } from 'react-router-dom';

function CreateAccount(handleSwitch) {
  return (
    <div className=' mx-auto items-center w-full h-screen my-auto relative z-50 pt-20 bg-gray-500'>
    <div class="bg-slate-100 mx-auto max-w-2xl p-10 px-20  w-full shadow-lg space-y-4 relative flex-col flex justify-center">      
       <h2 className='text-2xl font-semibold text-center'>Create Account</h2>
       <span className="text-sm text-center">Create your account</span>
       {/* <GrClose size={24} className='absolute top-3 right-16 lg:right-44 cursor-pointer text-orange-400' /> */}
       
       <div className='div-wrapper space-y-3 items-center flex-col' >      
           <div className='f-item2 flex flex-1 flex-col'>
           <label for="name">User Name:</label>
           <input  type="text" name="ame"  autoComplete="off" className='border-[1.5px] border-gray-200 outline-none rounded-md py-2 px-5 w-full' required/>
           </div>
           <div className='f-item3 flex-1 flex  flex-col'>
           <label for="email">Email:</label>
           <input  type="email" name="email" className='border-[1.5px] border-gray-200 outline-none rounded-md py-2 px-5 w-full' required/>
           </div>
           <div className='f-item3 flex-1 flex  flex-col'>
           <label for="password">Password:</label>
           <input  type="password" name="password" className='border-[1.5px] border-gray-200 outline-none rounded-md py-2 px-5 w-full ' required/>
           </div>
       </div>

       <button className='w-fit flex items-center justify-center bg-orange-400 hover:bg-orange-600 text-lg py-2 px-6 text-white rounded-lg'>Create Account</button>

       <span className="text-sm items-center flex justify-center">Have an account? <Link to="/sign-in"><span className='text-green-600 cursor-pointer' onClick={handleSwitch}>Sign in</span></Link></span>
    </div>
   </div>  )
}

export default CreateAccount;