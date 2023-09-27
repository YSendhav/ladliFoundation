import React from 'react'
import ATMFlippableCard from '../../atoms/ATMFlippableCard/ATMFlippableCard'

type Props = {
    testimonialName: string;
    testimonialPositon: string;
    testimonialImage: string;
    testimonialDescription: string
}
type TestimonialProps = {
    testimonialData: Props[]
}
const TestimonialCards = ({ testimonialData }: TestimonialProps) => {
    return (
        <div className='flex gap-10'  >
            {
                testimonialData.map((testimonial) => {
                    return (
                        <div >
                            <ATMFlippableCard
                                children1={<>
                                    <>
                                        <div className="p-3 custom-shadow text-center">
                                            <img src={testimonial.testimonialImage} alt="" className='p-2' />
                                            <div className='py-2'>
                                                <h1 className="font-medium text-black ">{testimonial.testimonialName}</h1>
                                                <p className="text-gray-600 text-[12px] font-medium">
                                                    {testimonial.testimonialPositon}
                                                </p>
                                            </div>
                                        </div>
                                    </>

                                </>}
                                children2={<>
                                    <div className="p-2">
                                        <div className="flex gap-4 py-2"  >
                                            <img src={testimonial.testimonialImage} alt="" className='w-[65px] h-[65px] rounded-full' />
                                            <div className="flex-1">
                                                <h1 className="font-medium text-black text-[14px]">{testimonial.testimonialName}</h1>
                                                <p className="text-gray-600 text-[10px] font-medium">
                                                    {testimonial.testimonialPositon}
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" p-4 text-justify text-[#333] text-[16px]">
                                            {testimonial.testimonialDescription}
                                        </div>
                                    </div>


                                </>}

                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TestimonialCards