import React, { useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
import { twMerge } from 'tailwind-merge'

type AccordionProps= {
  title: string;
  children: React.ReactNode;
  className?:string
  titleExtraClass?:string
  extraClass?:string
}

const ATMAccordian: React.FC<AccordionProps> = ({ title, children,className ,titleExtraClass,extraClass}) => {
  const [isOpenAccordian, setIsOpenAccordian] = useState(false);

  const toggleAccordion = () => {
    setIsOpenAccordian(!isOpenAccordian);
  };

  return (
    <div
      className={`flex items-center w-full z-1000  ${
        isOpenAccordian ? 'max-h-screen ' : 'max-h-6  overflow-hidden'
        
      }`}
      onMouseEnter={toggleAccordion}
      onMouseLeave={toggleAccordion  }
    >
        <div className={twMerge(`flex flex-col  items-center   ${extraClass} `)}>
      <div className={twMerge(`flex gap-[2px]  items-center   ${titleExtraClass}`)}>
        {title}
         <span><TiArrowSortedDown/></span> 
      </div>
    <div className=' relative  duration-300 ease-in-out' ><div className={twMerge(`  bg-white  shadow-lg border border-gray-300 absolute transform origin-top left-5 -translate-x-1/4   transition-transform duration-300 ease-in-out z-1000 ${className}`)}>{children} </div></div>
      </div>
    </div>
  );
};

export default ATMAccordian;

