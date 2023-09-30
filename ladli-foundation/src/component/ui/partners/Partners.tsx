import React from 'react'

type Props = {
    psuImages:string[]
    internationalPartners:string[]
    corporatesPartners:string[]
}

const Partners = ({psuImages,internationalPartners,corporatesPartners}: Props) => {
  return (
    <div className='flex flex-col gap-7'>
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="uppercase font-bold text-center inline-block bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent text-[20px] sm:text-[24px]  md:text-[31px] lgtext-[35px] ">
        OUR PARTNERS, OUR STRENGTH
        </h1>
      </div>
        <div className='flex flex-col gap-3 '>
            <div className='text-[14px] text-[18px] py-2 margin-auto w-full text-center  bg-[#ea248f] text-white font-bold'>
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
            <div className='text-[14px] text-[18px] text-center py-2 bg-[#ea248f] text-white font-bold'>
            INTERNATIONAL AGENCIES & ORGANIZATIONAL PARTNERS
            </div>
          
          <div className='grid grid-cols-4 justify-center sm:grid-cols-6  md:grid-cols-8 gap-3 margin-auto '>
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
            <div className='text-[14px] text-[18px] text-center py-2 bg-[#ea248f] text-white font-bold'>
            CORPORATES
            </div>
          
          <div className='grid grid-cols-4 justify-center sm:grid-cols-6  md:grid-cols-8 gap-3 margin-auto '>
          {corporatesPartners?.map((image)=>{
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