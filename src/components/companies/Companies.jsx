import React from 'react'

function Companies() {
  return (
    <div className='bg mx-auto mt-20 overflow-hidden'> 
    <div className='max-w-6xl mx-auto bg-gray-200 p-10'  >
        <span className='text-xl md:text-3xl font-semibold md:text-center items-center flex justify-center'>Students with these skills are getting hired by top employers like</span>
            <div className='flex flex-wrap space-x-6 lg:space-x-8 space-y-5 sm:space-y-0 items-center justify-center mt-5'>  
                <img src='https://www.internships.com/wp-content/themes/IDC-theme/assets/typeform/employers/meta.png' className='transform'></img>
                <img src='https://www.internships.com/wp-content/themes/IDC-theme/assets/typeform/employers/pwc.png'></img>
                <img src='https://www.internships.com/wp-content/themes/IDC-theme/assets/typeform/employers/pwc.png'></img>
                <img src='https://www.internships.com/wp-content/themes/IDC-theme/assets/typeform/employers/spotify.png'></img>
                <img src='https://www.internships.com/wp-content/themes/IDC-theme/assets/typeform/employers/google.png'></img>
                <img src='https://www.internships.com/wp-content/themes/IDC-theme/assets/typeform/employers/cisco.png'></img>
            </div>
    </div> 
    </div>
  )
}

export default Companies