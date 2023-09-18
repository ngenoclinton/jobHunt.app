import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FaAngleDown} from "react-icons/fa";
const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((v)=> !v);
  };

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header flex justify-between items-center" onClick={toggleAccordion}>
        <span className='text-base font-semibold'>{title}</span>
        <FaAngleDown className={`accordion-icon block sm:hidden ${isOpen ? 'open' : ''}`}></FaAngleDown>
      </div>
        {isOpen&&<div className="accordion-content sm:hidden">{children}</div>}
        <div className="accordion-content hidden sm:block">{children}</div>
    </div>
  );
};

export default AccordionItem;
