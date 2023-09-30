import React from 'react'
import Header from '../../component/ui/Header'
import Footer from '../../component/ui/Footer'
import PrintMediaGallery from '../../component/molecule/PrintMediaGallery'

type VideoGallleryTypes ={
  imageUrl: string
  link:string
  title: string
  date: string
  media: string
 
}

type Props = {
  pressGallery:VideoGallleryTypes[]
}

const PressMedia = ({pressGallery}: Props) => {
  return (
    <div className='flex flex-col gap-5'>
      <Header
      title='LADLI IN MEDIA'
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-10 gap-10 md:px-[130px] '>
{pressGallery?.map((image)=>{
  return <>
  <PrintMediaGallery
 link={image?.link}
  imageUrl={image?.imageUrl}
  title={image?.title}
  media={image?.media}
  date={image?.date}
  />
  </>
})}
      </div>
  <Footer/>
    </div>
  )
}

export default PressMedia