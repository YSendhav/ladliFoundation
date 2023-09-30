import React from 'react'
import OurCampaigns from './OurCampaigns'
import silentGenocide from "../../../assests/images/homePage/ourPrograms/a-silent-genocide.jpg"
import drugPrevention from "../../../assests/images/homePage/ourPrograms/drug-prevention.jpg"
import empowerDisabled from "../../../assests/images/homePage/ourPrograms/empower-disabled.jpg"
import mhm from "../../../assests/images/homePage/ourPrograms/mhm.jpg"
import rahatSeva from "../../../assests/images/homePage/ourPrograms/rahat-seva.jpg"
import womenEmpowerment from "../../../assests/images/homePage/ourPrograms/women-empowerment.jpg"

type Props = {}
const campaignsData=[{
    campaignsName: "A SILENT GENOCIDE",
    campaignsDescription: "Saving Unwanted Girls from Planned Negligence for Tuberculosis & other Deadly Transferable Diseases",
    campaignsImage: silentGenocide
},
{
    campaignsName: "SASHKAT",
    campaignsDescription: "Empowering Women With Life Skills",
    campaignsImage: womenEmpowerment
},
{
    campaignsName: "MENSTRUSHALA",
    campaignsDescription: "Inculcating Sustainable Menstrual Practices",
    campaignsImage: mhm
},
{
    campaignsName: "JOSH",
    campaignsDescription: "Engaging Youth for Prevention of Drug Abuse & Crime",
    campaignsImage: drugPrevention
},
{
    campaignsName: "SASKHAT DIVYANG",
    campaignsDescription: "Empowering persons With Disability",
    campaignsImage: empowerDisabled
},
{
    campaignsName: "COVID-19 RAHAT SEVA",
    campaignsDescription: "Essential supplies, healthcare assistance, and financial aid areprovided to alleviate hardships",
    campaignsImage: rahatSeva
}
]
const OurCampaignsWrapper = (props: Props) => {
  return (
    <div>
        <OurCampaigns 
    campaignsData={campaignsData}
        />
    </div>
  )
}

export default OurCampaignsWrapper