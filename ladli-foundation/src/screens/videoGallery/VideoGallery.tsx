import React from 'react'
import VideoGalleryCard from '../../component/molecule/VideoGalleryCard'
import Header from '../../component/ui/Header'
import Footer from '../../component/ui/Footer'

type VideoGallleryTypes ={
  videoUrl: string
  title: string
  date: string
  trust: string
}

type Props = {
  videoGallery:VideoGallleryTypes[]
}

const VideoGallery = ({videoGallery}: Props) => {
  return (
    <div className='flex flex-col gap-5'>
      <Header
      title='VIDEO GALLERY'
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-10 gap-10 md:px-[130px] '>
{videoGallery?.map((video)=>{
  return <>
  <VideoGalleryCard
  videoUrl={video?.videoUrl}
  title={video?.title}
  trust={video?.trust}
  date={video?.date}
  />
  </>
})}
      </div>
  <Footer/>
    </div>
  )
}

export default VideoGallery