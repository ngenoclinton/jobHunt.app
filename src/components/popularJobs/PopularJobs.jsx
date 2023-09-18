import React from 'react'

function PopularJobs() {
  return (
    <div className="my-16">
        <div className='max-w-6xl bg-green-600 p-14 mx-auto items-center'>
            <span className='text-2xl md:text-3xl font-semibold text-center items-center flex justify-center text-white'>Here are the most popular jobs for college students in the industry</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8 max-w-3xl mx-auto justify-center">
                <div className='rounded-lg bg-white p-6'>
                    <span className="font-bold text-xl sm:text-2xl">Front-End Engineer</span>
                    <p className="text-base mt-2">Use programming to develop the front-end elements of an application or website that users interact with.</p>
                </div>
                <div className='rounded-lg bg-white p-6'>
                    <span className="font-bold text-xl sm:text-2xl">Back-End Engineer</span>
                    <p className="text-base mt-2">Develop the back-end structure and systems that power an application or website.</p>
                </div>
                <div className='rounded-lg bg-white p-6'>
                    <span className="font-bold text-xl sm:text-2xl">Mobile Developer</span>
                    <p className="text-base mt-2">Use software development skills to build applications specifically designed for use on smartphones and other mobile devices.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopularJobs