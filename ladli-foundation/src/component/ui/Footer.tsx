
import React from 'react'
import { MdEmail } from 'react-icons/md'
import {FaLocationDot} from "react-icons/fa6"
import logoImage from "../../assests/images/logo.png"

const Footer = () => {
  return (
    <div className='bg-[#F8F9FA]flex flex-col gap-3'>
      <div className="grid grid-cols-1  p-10  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl-grid-cols-4 gap-5 ">
        <div className=''>
          <img src={logoImage} alt="Logo" className='w-[20rem]' />
        </div>
       <div className='col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl-grid-cols-4 '>
       <div className="flex flex-col gap-3">
          <h1 className="text-[1.6rem] font-bold">Important Links </h1>
          <ul className="flex flex-col gap-3 text-[#696969] text-[15px] cursor-pointer">
            <li>About Us</li>
            <li>Our Founder</li>
            <li>Contribute</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
        <h1 className="text-[1.6rem] font-bold">Headquarter Details </h1>
        <div className='flex flex-col gap-3'>
            <p className="text-[#696969] text-[15px] flex gap-2 items-center"><span><FaLocationDot/></span>Ladli Foundation Trust - First Floor, C-3, Block C, Qutab Institutional Area, New Delhi, Delhi 110016</p>
            <p className="text-[#696969] text-[15px]  flex gap-2 items-center hover:text-black cursor-pointer"><span><MdEmail/></span>Email Us</p>
            </div>  
        </div>
       </div>
      
      </div>
      <div className='text-[#696969] text-[15px] py-2 flex justify-center border-t border-gray-300'>© 2023 Ladli Foundation Trust</div>
    </div>
  )
}

export default Footer
