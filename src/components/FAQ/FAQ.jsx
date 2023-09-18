import React from 'react'
import FAQitem from './FAQitem'

function FAQ() {
  return (
    <div className='mx-auto mt-20 overflow-x-hidden'>
    <div id="faq" className='max-w-6xl mx-auto'>
    <h1 class="text-center text-darkBlue font-bold text-2xl md:text-3xl">Frequently asked questions</h1>
    <div class="max-w-2xl lg:max-w-4xl  flex flex-col  py-10 border-b-3 px-5 lg:px-0">
    <FAQitem
        question="How do I create a job listing on your platform?"
        answer="Creating a job listing is simple! Log in to your account, navigate to the 'Post a Job' section, and fill out the required details about the job. You can include the job title, description, requirements, and other relevant information."
      />
      <FAQitem
        question="Can I edit or update my job listing after it's posted?"
        answer="Yes, you can edit or update your job listing at any time. Log in to your account, go to the 'My Listings' section, find the job listing you want to modify, and make the necessary changes."
      />
      <FAQitem
        question="How do I manage applications for my job listings?"
        answer="Managing applications is easy! Whenever a candidate applies for a job, you'll receive a notification. Log in to your account, go to the 'Applications' section, and review the candidate's profile and application details."
      />
      <FAQitem
        question="Is it possible to feature my job listing for better visibility?"
        answer="Absolutely! We offer premium options to feature job listings. Featured listings are displayed prominently on the platform, increasing their visibility and attracting more candidates."
      />
    </div>
</div>
</div>
  )
}

export default FAQ