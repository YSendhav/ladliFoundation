import React from 'react'
import ATMOverlayCard from '../../component/atoms/ATMOverlayCard/ATMOverlayCard';
import Header from '../../component/ui/Header';

type Props = {
    advisoryImage: string;
    advisoryName: string;
    advisoryPosition: string;
    advisoryPlace?: string;
    advisoryDescription?: string
}
type AdvisoryResponse = {
    advisoryDetail: Props[]
}

const Advisory = ({ advisoryDetail }: AdvisoryResponse) => {
    return (
        <div className='px-[100px]'>
            <Header title='ADVISORY & EXPERT COUNCIL'/>
            <div className='grid md:grid-cols-3 gap-8'>
                {advisoryDetail?.map((advisory) => {
                    return (
                        <>
                            <div>
                                <ATMOverlayCard
                                    name={advisory?.advisoryName}
                                    image={advisory?.advisoryImage}
                                    position={advisory?.advisoryPosition}
                                    place={advisory?.advisoryPlace}
                                    description={advisory?.advisoryDescription}
                                />
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Advisory