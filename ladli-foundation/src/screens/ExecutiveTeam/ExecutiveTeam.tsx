import React from 'react'
import ATMOverlayCard from '../../component/atoms/ATMOverlayCard/ATMOverlayCard';
import Header from '../../component/ui/Header';

type Props = {
  teamImage: string;
  teamName: string;
  teamPositon: string;
  teamDescription: string;
}
type ExecutiveProps = {
  executiveData: Props[]
}
const ExecutiveTeam = ({ executiveData }: ExecutiveProps) => {
  return (
    <div className='flex flex-col gap-10'>

      <div>
        <Header title='ADVISORY & EXPERT COUNCIL' />
      </div>
      <div className='grid md:grid-cols-3 gap-4'>
        {executiveData.map((executive) => {
          return (
            <>
              <div>
                <ATMOverlayCard
                  button={false}
                  name={executive.teamName}
                  image={executive.teamImage}
                  position={executive.teamPositon}
                  description={executive.teamDescription}
                />
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default ExecutiveTeam