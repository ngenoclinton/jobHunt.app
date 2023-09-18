import React,{useState} from 'react'
import { AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";
function FAQitem({question, answer}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
      };
  return (
    <div>
    <div className={`faq flex flex-col py-4 cursor-pointer border-b-[1px] border-b-gray-500 border-opacity-20`}>
      <div className="question flex flex-wrap justify-between relative" onClick={toggleAccordion}>
        <p className="text-base md:text-lg font-bold">{question}</p>
        <a className={`down-arrow flex text-base ${isOpen ? 'open' : ''}`}></a>
        <div className='relative'>
            {isOpen ? <AiOutlineMinus size={24} className="absolute"/>:
            <AiOutlinePlus size={24} className="absolute"/>}
        </div>
      </div>
      {isOpen && (
        <div className="answer text-base py-3">
          <p className="text-sm md:text-base mx-auto px-4 pt-4">{answer}</p>
        </div>
      )}
    </div>
    </div>
  )
}

export default FAQitem