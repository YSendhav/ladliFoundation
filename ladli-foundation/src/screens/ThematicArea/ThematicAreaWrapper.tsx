import React from "react";
import sachiSaheli from "../../assests/images/thematicAreas/sachiSaheli.jpg";
import hygine2 from "../../assests/images/thematicAreas/2.jpg";
import hygine3 from "../../assests/images/thematicAreas/2 (1).jpg";
import healthImage1 from "../../assests/images/thematicAreas/healthImage(1).jpg";
import healthImage2 from "../../assests/images/thematicAreas/healthImage2.jpg";
import healthImage3 from "../../assests/images/thematicAreas/healthImage3.jpg";
import educationImage1 from "../../assests/images/thematicAreas/educationImage1.jpg";
import educationImage2 from "../../assests/images/thematicAreas/2education(2).jpg";
import educationImage3 from "../../assests/images/thematicAreas/education(3).jpg";
import humanRights1 from "../../assests/images/thematicAreas/humanRights1.jpg";
import humanRights2 from "../../assests/images/thematicAreas/humanRights (2).jpg";
import humanrights3 from "../../assests/images/thematicAreas/humanrights3.jpg";
import women1 from "../../assests/images/thematicAreas/women1.jpg";
import women2 from "../../assests/images/thematicAreas/women2.jpg";
import drugPrevention1 from "../../assests/images/thematicAreas/drugPrevention1.jpg";
import drugPrevention2 from "../../assests/images/thematicAreas/drugPrevention2.jpg";
import drugPrevention3 from "../../assests/images/thematicAreas/drugPrevention3.jpg";
import ThematicArea from "./ThematicArea";

type Props = {};
const thematicAreaData = [
  {
    title: "HYGIENE AND SANITATION",
   description:`In India, inadequate sanitation and menstrual hygiene facilities result in over 23 million female students dropping out of school annually. This, coupled with limited awareness MHM, WASH, etc. put millions of girls at risk of infectious, deadly diseases. Addressing this critical situation, the organization has impacted over 5 lakh Indian females studying in different government schools or colleges and living in slums, by sensitizing them about sustainable menstrual practices and distributing free sanitary kits. Additionally, it has constructed more than 500+ sanitary pad vending machines and incinerators in schools to improve their access to these products and constructed toilets to promote sustainable water conservation and sanitation.`,
    images: [sachiSaheli,hygine2,hygine3],
  },
  {
    title: "HEALTH AND WELLBEING",
   description:`The health status of marginalized populations in India is relatively poor due to issues like poverty, access to quality healthcare services, discrimination, lack of awareness, etc. The situation worsens in case of women, children, and persons with disabilities who belong to low socio-economic, tribal/ethnic, lower-caste, and other minority groups. With the onset of the COVID-19 pandemic and weakening of the existing health system, the health and wellbeing of these vulnerable groups have further deteriorated. The organization seeks to uplift them through provisioning of free health camps and services, nutritional support, and counseling sessions.`,
    images: [healthImage1,healthImage2,healthImage3],
  },
  {
    title: "EDUCATION AND SKILL DEVELOPMENT",
   description:`The state of education in India is a complex and multifaceted issue. While significant progress has been made to expand and improve access to education, especially at the primary level, several challenges persist. Enrollment rates remain lower for girls and children from low-income families and certain disadvantaged groups. Socioeconomic disparities, gender bias, and caste-based discrimination continue to affect educational opportunities. Marginalized groups, including tribal communities and children with disabilities, face barriers in accessing quality education. This initiative takes a comprehensive approach that recognizes the important role parents play in their children's education and future. We aim to provide basic education to street children, ragpickers & child beggars at Red-Light Crossings & Slums and for providing vocational training to uplift uneducated women. The Protection of Children from Sexual Offences (POCSO) Act is addressed in interactive sessions with parents to ensure that they are aware of their kids' rights and how to protect them. These sessions also serve to inspire parents and help them realize the importance of education in ensuring a bright and secure future for their kids.`,
    images: [educationImage1,educationImage2,educationImage3],
  },
  {
    title: "HUMAN RIGHTS AND GENDER",
   description:`Human rights are fundamental rights and freedoms that are inherent to all individuals, irrespective of their race, gender, nationality, religion, or any other characteristic. They are based on the principles of dignity, equality, and non-discrimination. Gender plays a significant role in the framework of human rights as it pertains to the rights and experiences of individuals based on their gender identity and the social and cultural expectations associated with gender roles. Our framework aims to build a gender inclusive society by eradicating child marriages, preventing gender-based violence, and sensitizing and encouraging men to become supporters of gender equality.`,
    images: [humanRights1,humanRights2,humanrights3],
  },
  {
    title: "WOMEN EMPOWERMENT AND LIVELIHOOD",
   description:`We at Ladli, aim to provide women with the knowledge, skills, resources, and opportunities to participate completely and equitably in all spheres of life. It is essential for attaining gender equality and creating a more inclusive and just society. Giving women access to economic opportunities and financial security is a significant aspect of empowerment. Women who have access to jobs, business opportunities, and financial resources may take care of their family, support themselves, and contribute to the economy. Empowering women includes ensuring their access to quality healthcare services, reproductive rights, and addressing health issues specific to women. Through our projects we aim to promote women's health, providing healthcare facilities, and addressing gender-based violence and discrimination. Ladli is a believer of dismantling cultural practices, stereotypes, and social conventions that obstruct women's prospects and rights.`,
    images: [healthImage2,women1,women2],
  },
  {
    title: "DRUG PREVENTION AND YOUTH DEVELOPMENT",
   description:`Drug addiction can have serious adverse effects on an individual’s life. Substance abuse can impede one’s educational and professional growth, affecting academic performance, employment opportunities, and overall life prospects. Drug prevention plays a crucial role in personal and social development. Individuals can focus on personal growth, pursue their goals, and contribute positively to their communities. We designed a project to divert young minds & delinquents from substance abuse & crimes in slums by involving them in intensive physical activities, sports training, yoga and orientation sessions also to make them an asset for the society by enabling them with skill training and providing employment opportunities.`,
    images: [drugPrevention1,drugPrevention2,drugPrevention3],
  },
];

const ThematicAreaWrapper = (props: Props) => {
  return(
    <div>
    <ThematicArea themeticAreas={thematicAreaData}/>
  </div>
  )
  };

export default ThematicAreaWrapper;
