import React from 'react'
// GLIMPSES IMAGES-------------------------------------
import glimpses1 from "../assests/images/homePage/glimpses/glimpses1.jpg"
import glimpses2 from "../assests/images/homePage/glimpses/glimpses2.jpg"
import glimpses3 from "../assests/images/homePage/glimpses/glimpses3.jpg"
import glimpses4 from "../assests/images/homePage/glimpses/glimpses4.jpg"
import glimpses5 from "../assests/images/homePage/glimpses/glimpses5.jpg"
import glimpses6 from "../assests/images/homePage/glimpses/glimpses6.jpg"
import glimpses7 from "../assests/images/homePage/glimpses/glimpses7.jpg"
import glimpses8 from "../assests/images/homePage/glimpses/glimpses8.jpg"
import glimpses9 from "../assests/images/homePage/glimpses/glimpses9.jpg"
import glimpses10 from "../assests/images/homePage/glimpses/glimpses10.jpg"


import Home from './Home'
type Props = {}
// GLIMPSES DATA---------------------
const glimpsesImage=[glimpses1 ,glimpses2,glimpses3,glimpses4,glimpses5,glimpses6,glimpses7,glimpses8,glimpses9,glimpses10]


const HomeWrapper = (props: Props) => {
  return (
    <div className='w-full h-full'>
        <Home 
        glimpses={glimpsesImage}
        />
    </div>
  )
}

export default HomeWrapper