import React from 'react'

type Props = {
    psuImages:string[]
    internationalPartners:string[]
}

const Partners = ({psuImages,internationalPartners}: Props) => {
  return (
    <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-3 '>
            <div className='text-[14px] text-[18px] margin-auto w-full text-center  bg-[#ea248f] text-white font-bold'>
            GOVT. & PSU PARTNERS
            </div>
          
          <div className='grid grid-cols-4 justify-center sm:grid-cols-6  md:grid-cols-8 gap-3 margin-auto '>
          {psuImages?.map((image)=>{
            return (
                <div className='w- [100%  bg-white  border-2  border-[#fff] 
                rounded-lg shadow-lg'>
                <img src={image} alt="company" className='w-[100px]  p-2'/>
            </div>
            )
          })}
          </div>
           
        </div>
        <div className='flex flex-col gap-3 '>
            <div className='text-[14px] text-[18px] text-center  bg-[#ea248f] text-white font-bold'>
            INTERNATIONAL AGENCIES & ORGANIZATIONAL PARTNERS
            </div>
          
          <div className='grid grid-cols-8 gap-3 margin-auto '>
          {internationalPartners?.map((image)=>{
            return (
                <div className='w- [100%]  bg-white  border-2  border-[#fff] 
                rounded-lg shadow-lg'>
                <img src={image} alt="company" className='w-[100px] p-2'/>
            </div>
            )
          })}
          </div>
           
        </div>
        <div className='flex flex-col gap-3 '>
            <div className='text-[14px] text-[18px] text-center  bg-[#ea248f] text-white font-bold'>
            CORPORATES
            </div>
          
          <div className='grid grid-cols-8 gap-7 margin-auto '>
          {psuImages?.map((image)=>{
            return (
                <div className='w- [100%]  bg-white  border-2  border-[#fff] 
                rounded-lg shadow-lg'>
                <img src={image} alt="company" className='w-[100px] p-2'/>
            </div>
            )
          })}
          </div>
           
        </div>
    </div>
  )
}

export default Partners