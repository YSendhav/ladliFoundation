import React from 'react'
import ATMAccordian from '../atoms/ATMAccordian/ATMAccordian'
import { MdPlayArrow } from 'react-icons/md'
import ATMButton from '../atoms/ATMButton/ATMButton'
import logoImage from "../../assests/images/logo.png"
type Props = {
  title?: string
}

const Header = ({ title }: Props) => {
  return (
    <div className=''>
      <nav className="bg-white text-black  show-header  p-5 flex justify-between items-center">
        <div><img src={logoImage} alt="logo" className='h-[5rem]' /></div>
        <div className="  flex items-center">
          <ul className="flex gap-1  max-h-7 w-fit font-medium  items-center py-1">
            <li><a href="/" className="hover:text-white hover:bg-[#EA248F] p-2 text-[14px] items-center flex">HOME</a></li>
            {/* ABOUT US  ---------------------------*/}
            <li>
              <ATMAccordian
                title="ABOUT US"
                className="w-[285px] "
                titleExtraClass="hover:text-white hover:bg-[#EA248F] p-2 font-medium text-[14px]"
              >
                <ul className="flex  flex-col  p-3">
                  <li ><a href="/founder" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"><span className='text-[18px] font-medium'><MdPlayArrow /> </span> OUR FOUNDER </a></li>
                  <li><a href="/about-us" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"><span className='text-[18px] font-medium'><MdPlayArrow /> </span> ABOUT US </a></li>
                  <li><a href="/advisory" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"><span className='text-[18px] font-medium'><MdPlayArrow /> </span> ADVISORY & EXPERT COUNCIL </a></li>
                  <li><a href="/executive-team" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"><span className='text-[18px] font-medium'><MdPlayArrow /> </span> EXECUTIVE TEAM  </a></li>
                  <li><a href="/" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"><span className='text-[18px] font-medium'><MdPlayArrow /> </span> OUR EXPERTISE</a></li>
                  <li><a href="/our-presence" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"><span className='text-[18px] font-medium'><MdPlayArrow /> </span> OUR PRESENCE </a></li>
                  <li><a href="/thematic-areas" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"><span className='text-[18px] font-medium'><MdPlayArrow /> </span> THEMATIC AREAS </a></li>
                </ul>
              </ATMAccordian>
            </li>
            {/* PROGRAMS----------------------------- */}
            <li>
              <ATMAccordian
                title="PROGRAMS"
                className="w-[300px] "
                titleExtraClass="hover:text-white hover:bg-[#EA248F] p-2 font-medium text-[14px]"
              >
                <ul className="flex  flex-col  py-3 px-1">
                  <li><a href="/" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"> <span className='text-[18px] font-medium'><MdPlayArrow /> </span> E-PATHANSHALA </a> </li>
                  <li><a href="/" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"> <span className='text-[18px] font-medium'><MdPlayArrow /> </span> SOCIAL INTERNSHIP PROGRAMME </a> </li>
                  <li><a href="/shagun" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"> <span className='text-[18px] font-medium'><MdPlayArrow /> </span> SHAGUN </a> </li>
                  <li><a href="/project-josh" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"> <span className='text-[18px] font-medium'><MdPlayArrow /> </span>PROJECT JOSH  </a> </li>
                  <li><a href="/rahat-seva" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"> <span className='text-[18px] font-medium'><MdPlayArrow /> </span> RAHAT SEVA </a> </li>
                  <li><a href="/" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"> <span className='text-[18px] font-medium'><MdPlayArrow /> </span> M-RITE </a> </li>
                </ul>
              </ATMAccordian>
            </li>
            {/* CSR PROJECTS------------------------------- */}
            <li>
              <ATMAccordian
                title="CSR PROJECTS"
                className="w-[300px] "
                titleExtraClass="hover:text-white hover:bg-[#EA248F] p-2 font-medium text-[14px]"
              >
                <ul className="flex  flex-col  py-3 px-1">
                  <li><a href="/saheli" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"> <span className='text-[18px] font-medium'><MdPlayArrow /> </span>SAHELI</a></li>
                  <li><a href="/" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"> <span className='text-[18px] font-medium'><MdPlayArrow /> </span>PUNAR UTHAN</a></li>
                  <li><a href="/" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"> <span className='text-[18px] font-medium'><MdPlayArrow /> </span> SHASAKT</a></li>
                  <li><a href="/" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"> <span className='text-[18px] font-medium'><MdPlayArrow /> </span>MENSTRUSHALA </a></li>
                  <li><a href="/" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"> <span className='text-[18px] font-medium'><MdPlayArrow /> </span>SAMADHAN </a></li>
                  <li><a href="/" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"> <span className='text-[18px] font-medium'><MdPlayArrow /> </span> NAVEENIKARAN</a></li>
                </ul>
              </ATMAccordian>
            </li>
            {/* MEGA EVENTS---------------------- */}
            <li>
              <ATMAccordian
                title="MEGA EVENTS"
                className="w-[300px] "
                titleExtraClass="hover:text-white hover:bg-[#EA248F] p-2 font-medium text-[14px]"
              >
                <ul className="flex  flex-col  py-3 px-1">
                  <li><a href="/" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"><span className='text-[18px] font-medium'><MdPlayArrow /> </span>RUN FOR LADLI</a> </li>
                  <li><a href="/" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"><span className='text-[18px] font-medium'><MdPlayArrow /> </span>LADLI KANYAPUJAN</a> </li>
                  <li><a href="/" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"><span className='text-[18px] font-medium'><MdPlayArrow /> </span> SHASAKT DIVYANG</a> </li>
                  <li><a href="/" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"><span className='text-[18px] font-medium'><MdPlayArrow /> </span>SHAGUN</a> </li>
                  <li><a href="/" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"><span className='text-[18px] font-medium'><MdPlayArrow /> </span>STREET PLAYS</a> </li>
                  <li><a href="/" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"><span className='text-[18px] font-medium'><MdPlayArrow /> </span> MASIK SATYA WITH DIADEM</a> </li>
                </ul>
              </ATMAccordian>
            </li>
            {/* PUBLICATIONS-------------------------------- */}
            <li>
              <ATMAccordian
                title="PUBLICATIONS"
                className="w-[300px] "
                titleExtraClass="hover:text-white hover:bg-[#EA248F] p-2 font-medium text-[14px]"
              >
                <ul className="flex  flex-col  py-3 px-1">
                  <li><a href="/" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"><span className='text-[18px] font-medium'><MdPlayArrow /> </span>BLOGS </a> </li>
                </ul>
              </ATMAccordian>
            </li>
            {/* PRESS AND MEDIA------------------ */}
            <li>
              <ATMAccordian
                title="MEDIA"
                className="w-[300px] "
                titleExtraClass="hover:text-white hover:bg-[#EA248F] p-2 font-medium text-[14px]"
              >
                <ul className="flex  flex-col  py-3 px-1">
                <li><a href="/video-gallery" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"><span className='text-[18px] font-medium'><MdPlayArrow /> </span>VIDEO GALLERY</a> </li>
                  <li><a href="/press" className="hover:text-white hover:bg-[#EA248F]  py-[6px] items-center flex gap-3"><span className='text-[18px] font-medium'><MdPlayArrow /> </span>PRESS AND MEDIA</a> </li>
                </ul>
              </ATMAccordian>
            </li>
            {/* GET INVOLVED */}
            <li><a href="/" className="hover:text-white hover:bg-[#EA248F] p-2 text-[14px] items-center flex">GET INVOLVED</a></li>
            <li><ATMButton
              title='CONTRIBUTE'
              className='font-medium px-5 py-3'></ATMButton></li>
          </ul>

        </div>
      </nav>
      {title &&
        <h1 className='uppercase py-10 headerImage px-10 text-left text-[20px] sm:text-[30px]  md:text-[40px]
        font-normal text-white sm:px-[160px] sm:py-20 w-full h-full'>{title}</h1>}

    </div>
  )
}

export default Header