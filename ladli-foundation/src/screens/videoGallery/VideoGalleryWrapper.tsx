import React from 'react'
import VideoGallery from './VideoGallery'

type Props = {}
const VideoGalleryData=[{
    videoUrl:"https://www.youtube.com/watch?v=iTmRDDTveLs",
    title:"RUN FOR LAADLI THE BIGGEST HALF MARATHON FOR CAUSE OF GENDER EQUALITY WITH DELHI POLICE",
    date:"Nov 26, 2020",
    trust:"Ladli Foundation Trust"

},
{
    videoUrl:"https://www.youtube.com/watch?v=XjXcThqWMqM",
    title:"COVID RELIEF WITH DELHI POLICE",
    date:"Aug 7, 2020",
    trust:"Ladli Foundation Trust"

},
{
    videoUrl:"https://www.youtube.com/watch?v=qFvxSwBw2OQ",
    title:"LADLI FOUNDATION UNFORGETTABLE MOMENTS",
    date:"July 17, 2021",
    trust:"Ladli Foundation Trust"

},
{
    videoUrl:"https://www.youtube.com/watch?v=D5F8a6KNPd4",
    title:"BASELINE OF EMBASSY AREA OF CHANAKAYA PURI SLUM, NEW DELHI",
    date:"July 27, 2023",
    trust:"Ladli Foundation Trust"

},
{
    videoUrl:"https://www.youtube.com/watch?v=-hUk0qLxOt4",
    title:"INDIA'S BIGGEST SOCIAL INTERNSHIP PROGRAM TO OVERCOME MALNUTRITION WITH DIRECTORATE OF EDUCATION",
    date:"",
    trust:""

},
{
    videoUrl:"https://www.youtube.com/watch?v=7kRnE8n9rsc",
    title:"DEVENDRA ON ETNOW ABOUT NO TABACCO DAY 23",
    date:"June 1, 2023",
    trust:"Ladli Foundation Trust"

},
]
const VideoGalleryWrapper = (props: Props) => {
  return (
    <div>
        
        <VideoGallery videoGallery={VideoGalleryData}/>
    </div>
  )
}

export default VideoGalleryWrapper