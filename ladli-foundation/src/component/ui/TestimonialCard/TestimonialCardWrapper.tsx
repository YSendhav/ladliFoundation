import React from 'react'
import TestimonialCards from './TestimonialCards'
import AmitShahIamge from './../../../assests/images/amit-shah.jpg'
type Props = {}
const testimonialData = [{
    testimonialName: "Mr. Amit Shah",
    testimonialPositon: " Home Minister of India ( 2019 - till Date)",
    testimonialImage: AmitShahIamge,
    testimonialDescription: `The Ladli Foundation's dedication to providing a brighter future for orphaned females is not only commendable but also a source of The Ladli Foundation's dedication to providing a brighter futurefor orphaned females is not only commendable but also a source of
    The Ladli Foundation's dedication to providing a brighter future
    for orphaned females is not only commendable but also a source of
    The Ladli Foundation's dedication to providing a brighter future
    for orphaned females is not only commendable but also a source of`,

},
{
    testimonialName: "Mr. Amit Shah",
    testimonialPositon: " Home Minister of India ( 2019 - till Date)",
    testimonialImage: AmitShahIamge,
    testimonialDescription: `The Ladli Foundation's dedication to providing a brighter future for orphaned females is not only commendable but also a source of The Ladli Foundation's dedication to providing a brighter futurefor orphaned females is not only commendable but also a source of
    The Ladli Foundation's dedication to providing a brighter future
    for orphaned females is not only commendable but also a source of
    The Ladli Foundation's dedication to providing a brighter future
    for orphaned females is not only commendable but also a source of`,

},
{
    testimonialName: "Mr. Amit Shah",
    testimonialPositon: " Home Minister of India ( 2019 - till Date)",
    testimonialImage: AmitShahIamge,
    testimonialDescription: `The Ladli Foundation's dedication to providing a brighter future for orphaned females is not only commendable but also a source of The Ladli Foundation's dedication to providing a brighter futurefor orphaned females is not only commendable but also a source of
    The Ladli Foundation's dedication to providing a brighter future
    for orphaned females is not only commendable but also a source of
    The Ladli Foundation's dedication to providing a brighter future
    for orphaned females is not only commendable but also a source of`,

},
{
    testimonialName: "Mr. Amit Shah",
    testimonialPositon: " Home Minister of India ( 2019 - till Date)",
    testimonialImage: AmitShahIamge,
    testimonialDescription: `The Ladli Foundation's dedication to providing a brighter future for orphaned females is not only commendable but also a source of The Ladli Foundation's dedication to providing a brighter futurefor orphaned females is not only commendable but also a source of
    The Ladli Foundation's dedication to providing a brighter future
    for orphaned females is not only commendable but also a source of
    The Ladli Foundation's dedication to providing a brighter future
    for orphaned females is not only commendable but also a source of`,

}


]



const TestimonialCardWrapper = (props: Props) => {
    return (
        <div className='flex gap-4' >
            <TestimonialCards testimonialData={testimonialData} />
        </div>
    )
}

export default TestimonialCardWrapper