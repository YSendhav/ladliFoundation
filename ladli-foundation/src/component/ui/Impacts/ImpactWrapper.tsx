import React from "react";
import Impact from "./Impact";
import Partners from "../partners/Partners";
import PartnersWrapper from "../partners/PartnersWrapper";

const impactData = [
  {
    count: 282000,
    title: "Digital Education",
    description: "Marginalized Students were enabled with Digital Education & provided Free Digital Tabs & BYJU's Premium Subscription​",
  },
  {
    count: 78000,
    title: "​​Covid 19 Vaccination",
    description: "Men, Women & adolescents were benefitted with COVID-19 Vaccination with the Support of Rajasthan Govt. & USAID​​",
  },
  {
    count: 7500,
    title: "PWD Rights",
    description: "Persons with disabilities were sensitized about their rights & provided employment opportunities​",
  },
  {
    count: 16000,
    title: "Skill Trainings",
    description: "Girls were provided Basic Education , Vocational Training for social upliftment",
  },
  {
    count: 395000,
    title: "​​Women's Health",
    description: "Women gained in primary/repro health, anemia eradication, MHM, STD/HIV/TB awareness, mental health, and family planning",
  },
  {
    count: 250000,
    title: "​Pandemic Relief",
    description: "Migrant Laborer's were Provided Dry Ration & Covid Protection Kit during the Pandemic in Association With Delhi Police​",
  },
  {
    count: 7800,
    title: "Drug Prevention",
    description: "Young Boys and Juveniles were divert from substance abuse through Sports & YOGA​",
  },
  {
    count: 357,
    title: "Covid 19 Orphans",
    description: "Young Girls & Women who lost their bread earners during pandemic were provided Skill Training and Job Placements​",
  },
  {
    count: 875000,
    title: "Gender Sensitization & Human Rights",
    description: "Males were involved in Gender Sensitization though Street Plays, Half-Marathon & Seminars​",
  },
  {
    count: 400000,
    title: "Anemia & Malnutrition",
    description: "​Laborer Mothers were Provided Milk Supply for their Newborns during the Pandemic in Association with Delhi Police​​",
  },
  {
    count: 2100,
    title: "Rehabilitation",
    description: "Socially victimized women were saved from prostitution & rehabilitated through mass weddings​"
  },
  {
    count: 4500,
    title: "​​Social Adoption",
    description: "Adolescents girls were socially adopted for providing Health & Education​",
  }
];

const ImpactWrapper = () => {
  return (
    <div>
      <Impact impacts={impactData} />
     <PartnersWrapper/>
    </div>
  );
};

export default ImpactWrapper;
