import React from 'react'
import { twMerge } from 'tailwind-merge'



type Props = {
  imageUrl: string
  link:string
  title: string
  date: string
  media: string
  extraClass?:string
}

const PrintMediaGallery = ({ imageUrl,
    link,
  extraClass,
  title,
  date,
  media,}: Props) => {
  return (
    <div className=''>
      <a href={link}>
      <div className='flex flex-col gap-1 shadow-lg h-[100%]'>
       <div >
        <img src={imageUrl} alt="printMedia" className=''/>
        </div>
        <div className='flex flex-col gap-5 p-3'>
        <h1 className='text-[12px] font-medium'>{title}</h1>
      <div className={twMerge(`text-[14px] text-[#2F71D2] flex justify-between ${extraClass}`)}>
        <div>{media}</div>
        <div>{date}</div>
      </div>
       </div> 
       </div>   
      </a>
    </div>
  )
}

export default PrintMediaGallery