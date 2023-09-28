import React from 'react'
import aaims from "../../../assests/images/partnersImages/psu/ALIMCO.jpg"
import ALIMCO from "../../../assests/images/partnersImages/psu/ALIMCO.jpg"
import NBcc from "../../../assests/images/partnersImages/psu/NBCC.jpg"
import NBCFDC from "../../../assests/images/partnersImages/psu/NBCFDC.jpg"
import anuvini from "../../../assests/images/partnersImages/psu/anuvini.jpg"
import barodaBank from "../../../assests/images/partnersImages/psu/barodaBank.jpg"
import betibachau from "../../../assests/images/partnersImages/psu/betibachau.jpg"
import bharatPetrolium from "../../../assests/images/partnersImages/psu/bharatPetrolium.jpg"
import gail from "../../../assests/images/partnersImages/psu/gail.jpg"
import indianOil from "../../../assests/images/partnersImages/psu/indianOil.jpg"
import krashak from "../../../assests/images/partnersImages/psu/krashak.jpg"
import lic from "../../../assests/images/partnersImages/psu/lic.jpg"
import ministry from "../../../assests/images/partnersImages/psu/ministry.jpg"
import mittalFoundation from "../../../assests/images/partnersImages/psu/mittalFoundation.jpg"
import nashamuktaabiyan from "../../../assests/images/partnersImages/psu/nashamuktaabiyan.jpg"
import neitezns from "../../../assests/images/partnersImages/psu/neitezns.jpg"
import nhfdc from "../../../assests/images/partnersImages/psu/nhfdc.jpg"
import nisd from "../../../assests/images/partnersImages/psu/nisd.jpg"
import nsdc from "../../../assests/images/partnersImages/psu/nsdc.jpg"
import oncg from "../../../assests/images/partnersImages/psu/oncg.jpg"
import petronet from "../../../assests/images/partnersImages/psu/petronet.jpg"
import police from "../../../assests/images/partnersImages/psu/police.jpg"
import swavlamban from "../../../assests/images/partnersImages/psu/swavlamban.jpg"
import upsacs from "../../../assests/images/partnersImages/psu/upsacs.jpg"
import Partners from './Partners'
import ashmita from "../../../assests/images/partnersImages/international/ashmitaTheater.jpg"
import MSMEFoundation from "../../../assests/images/partnersImages/international/MSMEFoundation.jpg"
import NYA from "../../../assests/images/partnersImages/international/NYA.jpg"
import NASSCOM from "../../../assests/images/partnersImages/international/NASSCOM.jpg"
import WFI from "../../../assests/images/partnersImages/international/WFI.jpg"
import byjus from "../../../assests/images/partnersImages/international/byju's.jpg"
import catfit from "../../../assests/images/partnersImages/international/catfit.jpg"
import diadem from "../../../assests/images/partnersImages/international/diadem.jpg"
import habitatIndia from "../../../assests/images/partnersImages/international/habitatIndia.jpg"
import iact from "../../../assests/images/partnersImages/international/iact.jpg"
import johnSnow from "../../../assests/images/partnersImages/international/johnSnow.jpg"
import momentum from "../../../assests/images/partnersImages/international/momentum.jpg"
import saveChildBegger from "../../../assests/images/partnersImages/international/saveChildBegger.jpg"
import sevaSanskar from "../../../assests/images/partnersImages/international/sevaSanskar.jpg"
import shivKailashF from "../../../assests/images/partnersImages/international/shivKailashF.jpg"
import stJohn from "../../../assests/images/partnersImages/international/stJohn.jpg"
import unitedAgency from "../../../assests/images/partnersImages/international/unitedAgency.jpg"
import Tarc from "../../../assests/images/partnersImages/corporates/Tarc.jpg"
import asianpaints from "../../../assests/images/partnersImages/corporates/asianpaints.jpg"
import fortis from "../../../assests/images/partnersImages/corporates/fortis.jpg"
import indiaNews from "../../../assests/images/partnersImages/corporates/indiaNews.jpg"
import jakson from "../../../assests/images/partnersImages/corporates/jakson.jpg"
import makeEasy from "../../../assests/images/partnersImages/corporates/makeEasy.jpg"
import ola from "../../../assests/images/partnersImages/corporates/ola.jpg"
import unitedNations from "../../../assests/images/partnersImages/international/unitedNations.jpg"

const psuParnters=[
ministry,police,oncg,aaims,
betibachau,upsacs,swavlamban,nashamuktaabiyan,nisd,nsdc,bharatPetrolium,gail,mittalFoundation,
petronet,krashak,nhfdc,ALIMCO,NBCFDC,neitezns,lic,indianOil,NBcc,anuvini,barodaBank,
]
const internationlPartners=[
    unitedNations,momentum,unitedAgency,habitatIndia,byjus,ashmita,catfit,WFI,
    NASSCOM,johnSnow,shivKailashF,stJohn,MSMEFoundation,sevaSanskar,saveChildBegger,iact,diadem,NYA
]
const corporatesPartners=[
  Tarc,asianpaints,fortis,indiaNews,jakson,ola,makeEasy
]
const PartnersWrapper = () => {
  return (
    <div>
       <Partners psuImages={psuParnters}
       internationalPartners={internationlPartners}
       corporatesPartners={corporatesPartners}
       />
    </div>
  )
}

export default PartnersWrapper
