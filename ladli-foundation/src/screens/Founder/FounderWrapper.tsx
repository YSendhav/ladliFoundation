import React from 'react'
import founderImage01 from './../../assests/images/founderImages/founderImage01.jpg'
import founderImage02 from './../../assests/images/founderImages/founderImage02.jpg'
import founderImage03 from './../../assests/images/founderImages/founderImage03.jpg'
import founderImage04 from './../../assests/images/founderImages/founderImage04.jpg'
import founderImage05 from './../../assests/images/founderImages/founderImage05.jpg'
import founderImage06 from './../../assests/images/founderImages/founderImage06.jpg'
import founderImage07 from './../../assests/images/founderImages/founderImage07.jpg'
import founderImage08 from './../../assests/images/founderImages/founderImage08.jpg'
import founderImage09 from './../../assests/images/founderImages/founderImage09.jpg'
import founderImage10 from './../../assests/images/founderImages/founderImage10.jpg'
import Founder from './Founder'


const founderData = [{
    image: founderImage01
},
{
    image: founderImage02
}, {
    image: founderImage03
}, {
    image: founderImage04
}, {
    image: founderImage04
}, {
    image: founderImage05
}, {
    image: founderImage06
}, {
    image: founderImage07
}, {
    image: founderImage08
}, {
    image: founderImage09
}, {
    image: founderImage10
},

]
const founderDataImage = [{
    image01: founderImage01,
    image02: founderImage02,
    image03: founderImage03,
    image04: founderImage04,
    image05: founderImage05,
    image06: founderImage06,
    image07: founderImage07,
    image08: founderImage08,
    image09: founderImage09,
    image10: founderImage10
}]
const FounderWrapper = () => {
    return (
        <div className=''>
            <Founder founderData={founderData} founderDataImage={founderDataImage} />
        </div>
    )
}

export default FounderWrapper