import React from 'react'

type Props = {
    title?: string;
}

const ATMPageHeader = (props: Props) => {
    return (
        <div>
            <h1 className='uppercase py-10 headerImage px-10 text-left text-[30px] sm:text-[50px] 
            font-normal text-white sm:px-[160px] sm:py-20 w-full h-full'>our founder</h1>
        </div>
    )
}

export default ATMPageHeader