
import React from 'react'
import timesOfIndia from "../../assests/images/PressMedia/timesOfIndia.webp"
import topStory from "../../assests/images/PressMedia/topStory.jpg"
import TheIndianExpress from "../../assests/images/PressMedia/TheIndianExpress.avif"
import theEducationDairy from "../../assests/images/PressMedia/theEducationDairy.jpg"
import democraticAccent from "../../assests/images/PressMedia/TopSTory-2.webp"
import unitedNation from "../../assests/images/PressMedia/unitedNation.svg"
import hindustanTimes from "../../assests/images/PressMedia/hindustanTimes.avif"
import theQuint from "../../assests/images/PressMedia/theQuint.avif"
import prNewsWire from "../../assests/images/PressMedia/pr-NewsWire.jpg"
import PressMedia from './PressMedia'

type Props = {}
const printMediaGallery=[
    {
    link:`https://timesofindia.indiatimes.com/city/delhi/malnutrition-10k-govt-school-students-to-be-assessed-at-blood-test-camp-in-ph-i/articleshow/103456438.cms`,
    imageUrl:timesOfIndia,
    title:"Malnutrition: 10k govt school students to be assessed at blood test..",
    date:"Sep 07, 2023",
    media:"Times of India"

},
{
    link:`https://www.epaper.topstory.online/epaper/edition/1731/feb/page/2`,
    imageUrl:topStory,
    title:"Delhi Education Department and Ladli Foundation media join hands to fight malnutrition and Anaemia",
    date:"Feb 05, 2023",
    media:"Top Story"

},
{
    link:`https://indianexpress.com/article/cities/delhi/orphans-minus-parents-after-covid-pandemic-deaths-8265176/`,
    imageUrl:TheIndianExpress,
    title:"The story of Kajal, Muskaan and Sumit — Covid orphans who have no one but themselves",
    date:"Nov 13, 2022",
    media:"The Indian Express"

},
{
    link:`https://indianexpress.com/article/cities/delhi/orphans-minus-parents-after-covid-pandemic-deaths-8265176/`,
    imageUrl:theEducationDairy,
    title:`"Union Minister Of Youth Affairs And Sports Shri Anurag Singh Thakur Confers The National Youth Awards 2017-18 And 2018-19 To 22 Awardees On International Youth Day Today"`,
    date:"Sug 21, 2021",
    media:"India Education Diary"

},
{
    link:`https://indianexpress.com/article/cities/delhi/orphans-minus-parents-after-covid-pandemic-deaths-8265176/`,
    imageUrl:topStory,
    title:"Delhi govt appreciates Ladli Foundation for enabling 1L marginalised students with digital education",
    date:"Top Story",
    media:"Dec 18, 2022"

},
{
    link:`https://www.democraticaccent.com/delhi-govt-appreciates-ladli-foundation-for-enabling-1l-marginalised-students-with-digital-education/`,
    imageUrl:democraticAccent,
    title:"Delhi govt appreciates Ladli Foundation for enabling 1L marginalised students with digital education",
    date:"Dec 15, 2022",
    media:"Democratic Accent"

},
{
    link:`https://www.unodc.org/res/human-trafficking/TIP_GPA_appraisal_html/Written_Contributions.pdf`,
    imageUrl:unitedNation,
    title:"Written Contribution Document: 76th session of the United Nations General Assembly (UNGA)",
    date:"2021",
    media:"United Nations Office on Drugs and Crime"

},
{
    link:`https://www.epaper.topstory.online/epaper/edition/1731/feb/page/2`,
    imageUrl:topStory,
    title:"Delhi govt appreciates Ladli Foundation for enabling 1L marginalised students with digital education",
    date:"Top Story",
    media:"Dec 18, 2022"

},
{
    link:`https://www.democraticaccent.com/delhi-govt-appreciates-ladli-foundation-for-enabling-1l-marginalised-students-with-digital-education/`,
    imageUrl:democraticAccent,
    title:"Delhi govt appreciates Ladli Foundation for enabling 1L marginalised students with digital education",
    date:"Dec 15, 2022",
    media:"Democratic Accent"

},
{
    link:`https://www.hindustantimes.com/delhi-news/run-for-laadli-a-marathon-where-participants-will-pledge-for-women-safety/story-bdnE6fjn8OIBZrn0w8gL8H.html#:~:text=To%20put%20an%20end%20to,%E2%80%94%20a%20Delhi%2Dbased%20NGO`,
    imageUrl:hindustanTimes,
    title:"Run For Laadli: A marathon where participants will pledge for women safety",
    date:"Dec 16, 2017",
    media:"Hindustan Times"

},
{
    link:`https://www.thequint.com/news/india/run-for-laadli-a-marathon-that-portrayed-the-true-spirit-of-delhi`,
    imageUrl:theQuint,
    title:"Run for Laadli: A Marathon That Portrayed the True Spirit of Delhi",
    date:"Dec 17, 2017",
    media:"The Quint"

},
{
    link:`https://www.thequint.com/news/india/run-for-laadli-a-marathon-that-portrayed-the-true-spirit-of-delhi`,
    imageUrl:prNewsWire,
    title:"IndiaOnline.in Joins Hands With Delhi Police and Ladli Foundation for Half Marathon to Raise Awareness on Women's Safety",
    date:"Dec 15, 2017",
    media:"PRNewswire"

},

]
const PressMediaWrapper = (props: Props) => {
  return (
    <div>
        <PressMedia pressGallery={printMediaGallery}/>
    </div>
  )
}

export default PressMediaWrapper