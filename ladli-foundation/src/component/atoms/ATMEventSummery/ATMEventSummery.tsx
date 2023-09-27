import React from 'react'
type Props = {
    children: React.ReactNode
    image1: string;
    image2: string;
}

const ATMEventSummery = ({ children, image2, image1 }: Props) => {
    return (
        <div className="">
            <div className='grid md:grid-cols-2 md:gap-4'>
                <div className='font-lato  leading-7 text-gray-700 text-justify p-4'>
                    {children}
                </div>
                <div className='flex flex-col gap-4 p-4'>
                    <img src={image1} alt="#" />
                    <img src={image2} alt="#" />
                </div>
            </div>
        </div>
    )
}

export default ATMEventSummery
