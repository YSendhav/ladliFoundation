import React from 'react'
import { twMerge } from 'tailwind-merge'



type Props = {
  videoUrl: string
  title: string
  date: string
  trust: string
  extraClass?:string
}

const VideoGalleryCard = ({ videoUrl,
  extraClass,
  title,
  date,
  trust,}: Props) => {
  return (
    <div className=''>
       <div className='flex flex-col gap-1 shadow-lg h-[100%]'>
       <div>
        <iframe
        title="RUN FOR LAADLI THE BIGGEST HALF MARATHON FOR CAUSE OF GENDER EQUALITY WITH DELHI POLICE"
        width="100%"
        height="100%"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
      >  </iframe>
        </div>
        <div className='flex flex-col gap-5 p-3'>
        <h1 className='text-[12px] font-medium'>{title}</h1>
      <div className={twMerge(`text-[14px] text-[#A3A4A5] flex justify-between ${extraClass}`)}>
        <div>{trust}</div>
        <div>{date}</div>
      </div>
       </div> 
       </div>
    </div>
  )
}

export default VideoGalleryCard