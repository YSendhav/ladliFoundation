import React from 'react'
import Header from '../../component/ui/Header'
import Footer from '../../component/ui/Footer'
import ATMEventMediaSynopsis from '../../component/atoms/ATMEventMediaSynopsis/ATMEventMediaSynopsis'

type ThematicDataProps={
  title: string,
  description:string
   images:string[],
}
type Props = {
  themeticAreas:ThematicDataProps[]
}

const ThematicArea = ({themeticAreas}: Props) => {
  return (
    <div className='flex flex-col gap-7'>
      <Header
      title='THEMATIC AREAS'
      />
      <div className='p-8 sm:px-20 md:px-24 lg:px-32'>
      <div className='flex flex-col  gap-[40px]'>
{themeticAreas?.map((area,index)=>{
     const imagePosition = index % 2 === 1 ? "right" : "left";
  return <div className='flex flex-col gap-10'>
    <ATMEventMediaSynopsis
    title={area?.title}
    founderImage1={area?.images[0]}
    founderImage2={area?.images[1]}
    founderImage3={area?.images[2]}
    children={
      <div className='text-[#777777]'>
        {area?.description}
      </div>
    }
   imagePosition={imagePosition}
    />
    </div>
})}
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ThematicArea