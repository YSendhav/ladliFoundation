import React from 'react'
import ATMOverlayCard from '../../component/atoms/ATMOverlayCard/ATMOverlayCard';
import Header from '../../component/ui/Header';
import Footer from '../../component/ui/Footer';

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
      <div className='p-6 sm:px-20 md:px-16 lg:px-32'>
      <div className='grid md:grid-cols-3 gap-6'>
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
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default ExecutiveTeam