import React from 'react'
import Header from '../../component/ui/Header'
import Footer from '../../component/ui/Footer'
import ourPresence from "../../assests/images/ourpresence.png"
type Props = {}

const OurPresence = (props: Props) => {
  return (
    <div className='flex flex-col gap-5'>
        <Header
        title='OUR PRESENCE'
        />
        <div className='flex justify-center px-10'>
            <img src={ourPresence} alt="prsence"/>
        </div>
        <Footer/>
    </div>
  )
}

export default OurPresence