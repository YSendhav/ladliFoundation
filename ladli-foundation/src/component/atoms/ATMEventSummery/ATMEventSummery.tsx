import React from 'react'
type Props = {
    children: React.ReactNode
    image1: string;
    image2: string;
    imagePosition: "left" | "right";
}

const ATMEventSummery = ({ children, image2, image1, imagePosition, }: Props) => {
    return (
        <div className="">
            {
                imagePosition === "left" ? (
                    <div className='grid md:grid-cols-2 md:gap-4'>
                        <div className='font-lato  leading-7 text-gray-700 text-justify p-4'>
                            {children}
                        </div>
                        <div className='flex flex-col gap-10'>
                            <img src={image1} alt="#" className='shadow-2xl  p-4' />
                            <img src={image2} alt="#" className='shadow-2xl bg-white p-4' />
                        </div>
                    </div>
                ) : (
                    <div className='grid md:grid-cols-2 md:gap-4'>
                        <div className='flex flex-col gap-10'>
                            <img src={image1} alt="#" className='shadow-2xl  p-4' />
                            <img src={image2} alt="#" className='shadow-2xl bg-white p-4' />
                        </div>
                        <div className='font-lato  leading-7 text-gray-700 text-justify p-4'>
                            {children}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ATMEventSummery
