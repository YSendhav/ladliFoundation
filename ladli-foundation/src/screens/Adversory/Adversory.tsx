import React from 'react'
import Header from '../../component/ui/Header';
import ATMOverlayCard from '../../component/atoms/ATMOverlayCard/ATMOverlayCard';

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
        <div className=''>
            <div className='flex flex-col gap-10'>
                <div>
                    <Header title='ADVISORY & EXPERT COUNCIL' />
                </div>
                <div className='grid md:grid-cols-3 gap-8'>
                    {advisoryDetail?.map((advisory) => {
                        return (
                            <>
                                <div>
                                    <ATMOverlayCard
                                        button={true}
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
        </div>
    )
}

export default Advisory