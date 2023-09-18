import React from 'react'
import AccordionItem from './AccordionItem'

function Footer() {
  return (
    <div className='mt-12 px-5 lg:px-0'>
            <div className='max-w-5xl mx-auto h-full flex justify-center sm:justify-center gap-3 flex-col sm:flex-row  border-t-[0.8px] border-t-gray-600 py-5'>
            <AccordionItem title="Your Next Internship">
                        <div className='flex flex-col'>
                        <span className='text-sm group hover:border-b hover:bg-yellow-100hover:border-b hover:bg-yellow-100  cursor-pointer w-fit '>Your Next Internship</span>
                        <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Create Your Profile</span>
                        <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Browse Internships</span>
                        <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Resource Center</span>
                        <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Discover Your Options</span>
                        <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Get the Job</span>
                        </div>
            </AccordionItem>
                <div className="border-l-[0.8px] border-l-gray-600 h-full flex pl-3 flex-col gap-6">
                    <AccordionItem className="flex flex-col" title='Resume'>
                            <div className='flex flex-col'>
                            <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Resume 101</span>
                            <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Resume Samples</span>
                            </div>
                    </AccordionItem>
                    <AccordionItem className="flex flex-col" title='Cover Letter'>
                        <div className='flex flex-col'>
                        <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Cover Letter 101</span>
                        <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Cover Letter Samples</span>
                        </div>
                    </AccordionItem>
                    <AccordionItem className="flex flex-col" title='Effective Interviewing'>
                        <div className='flex flex-col'>
                        <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Interview Tips</span>
                        <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Internship Interview Questions</span>
                        <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Interview Follow-Up</span>
                        </div>
                    </AccordionItem>
                </div>
                <div className="flex flex-col border-l-[0.8px] border-l-gray-600 h-full" ></div>
                <AccordionItem className="flex flex-col border-l-[0.8px] border-l-gray-600 h-full pl-3" title='Employers'>
                        <div className='flex flex-col'>
                        <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Post an Internship or Job (for Free)</span>
                        <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Employer Resources</span>
                        <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Setting Up an Internship Program</span>
                        <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Help Center</span>
                        </div>
                </AccordionItem>
                <div className="border-l-[0.8px] border-l-gray-600 flex flex-col gap-6 pl-3">
                    <AccordionItem className="flex flex-col" title='Legal'>
                            <div className='flex flex-col'>
                            <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Terms</span>
                            <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Privacy Policy</span>
                            <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Intellectual Property Rights</span>
                            <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>DO NOT SELL MY INFO</span>
                            <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Cookie Notice</span>
                            </div>
                    </AccordionItem>
                    <AccordionItem className="flex flex-col" title='Customer Service'>
                            <div className='flex flex-col'>
                            <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Contact Us</span>
                            <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>Trust and Safety Center</span>
                            <span className='text-sm hover:border-b hover:bg-yellow-100 hover:border-b-gray-600 cursor-pointer w-fit'>About</span>
                            </div>
                    </AccordionItem>
                </div>
            </div>
    </div>
  )
}

export default Footer