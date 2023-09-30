import React from "react";
import TestimonialCards from "./TestimonialCards";

// TESTONOMIAL IMAGES-----------------------------------------
import amitShah from "../../../assests/images/homePage/testomonial/amit-shah.jpg";
import amitabhBachchan from "../../../assests/images/homePage/testomonial/amitabh-bachchan.jpg";
import amulyaPatnaik from "../../../assests/images/homePage/testomonial/amulya-patnaik.jpg";
import deveshShrivastva from "../../../assests/images/homePage/testomonial/devesh-shrivastva.jpg";
import droupadiMurmu from "../../../assests/images/homePage/testomonial/droupadi-murmu.jpg";
import geetaMittal from "../../../assests/images/homePage/testomonial/geeta-mittal.jpg";
import joannaKempers from "../../../assests/images/homePage/testomonial/joanna-kempers.jpg";
import pranabmukherjee from "../../../assests/images/homePage/testomonial/pranab-mukherjee.jpg";
import priyankaSinghRawat from "../../../assests/images/homePage/testomonial/priyanka-singh-rawat.jpg";
import rajnathsingh from "../../../assests/images/homePage/testomonial/rajnath-singh.jpg";
import ramNathKovind from "../../../assests/images/homePage/testomonial/ram-nath-kovind.jpg";
import sanjayBaniwal from "../../../assests/images/homePage/testomonial/sanjay-baniwal.jpg";
import shakuntalaGamlin from "../../../assests/images/homePage/testomonial/shakuntala-gamlin.jpg";
import subrahmanyam from "../../../assests/images/homePage/testomonial/subrahmanyam.jpg";
import swamiji from "../../../assests/images/homePage/testomonial/swamiji.jpg";
import thawarchandgehlot from "../../../assests/images/homePage/testomonial/thawarchand-gehlot.jpg";

type Props = {};

// TESTONOMIAL DATA ---------------------------
const testimonialData = [
  {
    testimonialName: "Mr. Amit Shah",
    testimonialPositon: " Home Minister of India ( 2019 - till Date)",
    testimonialImage: amitShah,
    testimonialDescription: `The Ladli Foundation's dedication to providing a brighter future for orphaned females is not only commendable but also a source of The Ladli Foundation's dedication to providing a brighter futurefor orphaned females is not only commendable but also a source of
    The Ladli Foundation's dedication to providing a brighter future
    for orphaned females is not only commendable but also a source of
    The Ladli Foundation's dedication to providing a brighter future
    for orphaned females is not only commendable but also a source of`,
  },
  {
    testimonialName: "H. H.Swami Avdheshanand Giri",
    testimonialPositon:
      " International Saint, Acharya Mahamandleshwar & Junapeethadhishwar",
    testimonialImage: swamiji,
    testimonialDescription: `I sincerely appreciate the endless devotion of team Ladli for enhancing the quality of life of
    socially victimized females.
    The efforts of the Ladli Foundation present the Vedic Proclamation of preservation of a woman's
    respect and dignity promptly and realize the dream of 'Beti Bachao Beti Padhao'`,
  },
  {
    testimonialName: "Late Shri Pranab Mukherjee",
    testimonialPositon: "Hon'ble 13th President of India (Bharat Ratna)",
    testimonialImage: pranabmukherjee,
    testimonialDescription: `he grassroots initiatives of the Ladli Foundation demonstrate their unwavering commitment and
    profound impact on vulnerable communities." Their commitment to equal healthcare, education, and
    empowerment is absolutely inspirational. Their art expresses a vision that is in line with
    humanity's highest ideals`,
  },
  {
    testimonialName: "Shri Ram Nath Kovind",
    testimonialPositon: "Hon'ble 14th President of India",
    testimonialImage: ramNathKovind,
    testimonialDescription: `I Congratulate the Ladli Foundation for their commendable works and tireless efforts for the
    upliftment of the most vulnerable and oppressed population. Their initiatives are innovative,
    impactful, and inspiring. Ladli Foundation's revolutionary initiative like Run For Laadli has great
    potential to Create a Gender Neutral Society. I congratulate them for their achievements and wish
    them success in their noble mission`,
  },

  {
    testimonialName: "Smt. Droupadi Murmu",
    testimonialPositon: "Hon'ble 15th President of India",
    testimonialImage: droupadiMurmu,
    testimonialDescription: `The Ladli Foundation's dedication to providing a brighter future for orphaned females is not only
  commendable but also a source of inspiration for everyone fortunate enough to witness your efforts.
  Organizing The Mass Marriages Events for destitute females can provide social security which stands
  as a remarkable example of your unwavering commitment to our society. I would like to extend my
  heartfelt gratitude to the Ladli Foundation for your dedication to the betterment of our society.`,
  },
  {
    testimonialName: "Mr. Rajnath Singh",
    testimonialPositon: `Defence Minister of India ( 2019 - till Date)
  Ex. Home Minister of India (2014 - 2019)`,
    testimonialImage: rajnathsingh,
    testimonialDescription: `I am not here to inaugurate this mega event or to deliver any speech. But I am here to join and
  support this revolutionary
  initiative and give honor to this cause. By providing any address no one can create awareness for
  women's safety to whom we consider "DEVI" If we keep an attitude of respect towards them, then only
  the crime
  against women can stop, and this attitude we all should inculcate among ourselves. It is not just a
  matter of the safety of women. It is all about the safety of humanity. I am thankful to the Ladli
  Foundation for
  making me a part of this revolutionary initiative and would congratulate the entire team for
  organizing this commendable marathon in association with Delhi Police.`,
  },
  {
    testimonialName: "Mr.Thaawarchand Gehlot ",
    testimonialPositon: `Hon'ble Governor of Karnatake
  Ex. Union
  Minister of Social Justice &amp; Empowerment - (2014-2021)`,
    testimonialImage: thawarchandgehlot,
    testimonialDescription: `Many NGOs are working with our ministry for social welfare, out of which Ladli Foundation Trust is
  working exceptionally as
  the prominent NGO among all. I sincerely appreciate the efforts of Mr. Devendra, Founder of Ladli
  Foundation, for doing extraordinary work for empowering PwD's an uplifting Socially Victimized
  People.`,
  },
  {
    testimonialName: "Mr. Amitabh Bachchan",
    testimonialPositon: "International Celebrity & Bollywood Superstar",
    testimonialImage: amitabhBachchan,
    testimonialDescription: `I commend Mr. Devendra Kumar Gupta for founding the Ladli Foundation Trust and his commitment to
  crusade and save the
  uneducated, unprotected girls from exploitation and sexual abuse. Citizens like him are the true
  heroes!`,
  },
  {
    testimonialName: "Justice Ms. Geeta Mittal",
    testimonialPositon: "Ex. Chief Justice of High Court, Delhi",
    testimonialImage: geetaMittal,
    testimonialDescription: `This cause is very close to my heart, and Ladli Foundation is doing exemplary work for the safety
  and empowerment of women
  in the society`,
  },
  {
    testimonialName: "Mr. R Subrahmanyam, IAS   ",
    testimonialPositon: "Secretary, Social Justice & Empowerment.Govt of India",
    testimonialImage: subrahmanyam,
    testimonialDescription: `The implementation of the JOSH Initiative in Delhi by Ladli Foundation, had a very profound impact,
  wherein thousands of
  youths in different slums were successfully brought on the right path. I wholeheartedly congratulate
  team Ladli Foundation and Delhi Police for this wonderful initiative. Now this modal need to be
  replicate at
  different location.`,
  },
  {
    testimonialName: "Ms. Shakuntala D. Gamlin, IAS",
    testimonialPositon:
      "Secretary, Social Justice & Empowerment. Govt of India",
    testimonialImage: shakuntalaGamlin,
    testimonialDescription: `I appreciate the concept of Sashakt Divyang by Ladli foundation to sensitized corporates and all
  sectors about government
  Incentives for employing persons with disabilities The idea of involving MSME will defiantly
  strengthen the process of empowering PWD’s. The Huge Participation of PwD’s &amp; General People in
  this initiative is
  an indication that the awareness about rights of persons with disabilities will be helpful in
  eliminating discrimination against PwD’s.`,
  },
  {
    testimonialName: "Mr. Amulya Patnaik, IPS",
    testimonialPositon: "Police Commissioner of Delhi (2017)",
    testimonialImage: amulyaPatnaik,
    testimonialDescription: `In the last few years, crimes against women have decreased in Delhi, which is a positive result.
  Our joint venture with
  Ladli Foundation Trust will be a milestone for the cause. Ladli's awareness and sensitization
  programs can contribute a lot to society and can encourage more and more people to come forward for
  this cause.<`,
  },
  {
    testimonialName: "Sh. Sanjay Baniwal, IPS",
    testimonialPositon: "Director General of Police, Chandigarh ( 2018-2021)",
    testimonialImage: sanjayBaniwal,
    testimonialDescription: `I commend the dedication and commitment of Ladli Foundation to sensitize uneducated young females
  against sexual exploitation through sincere efforts. its innovative initiatives like Run for laadli
  , Laadli
  Rakshak and Saheli etc. will surely be effective tool to set milestone for gender equality and to
  reduce crimes against women with young girls of underprivileged sections in India, It is the need of
  hour to work
  harder to fight with this situation my support is always with you for your selfless work for Welfare
  of underprivileged women and girls.`,
  },
  {
    testimonialName: "Devesh Chandra Srivastva, IPS",
    testimonialPositon: "Director General of Police, Mizoram",
    testimonialImage: deveshShrivastva,
    testimonialDescription: `Ladli Foundation truly works for the upliftment of underprivileged youth at grassroots level,
  during my long-term
  association with the organization they have implemented number of impactful initiatives for overall
  development of vulnerable youth population, which is an essential tool in crime prevention.`,
  },
  {
    testimonialName: "Ms. Joanna Kempkers",
    testimonialPositon: "High Commissioner of New Zealand In India",
    testimonialImage: joannaKempers,
    testimonialDescription: `The thing I like about the initiatives of the Ladli Foundation, it engages both men and women. It
  is important that we
  teach our women to be strong and independent. But it is equally important that we teach our boys to
  respect women. That is why I really liked to be here`,
  },
  {
    testimonialName: "Ms. Priyanka Singh Rawat",
    testimonialPositon: `Youngest Women Parliamentarian in 16th Lok
  Sabha & Women Rights Activist`,
    testimonialImage: priyankaSinghRawat,
    testimonialDescription: `The innovative initiatives and effective implementation of the Ladli Foundation are commendable.
  It has created a visible impact in transforming the lives of the most vulnerable families in slums.
  My own
  experience while working with the organization has equipped me to understand the actual
  grassroots-level problems and create sustainable solutions for the holistic development of society.
</p>
<p>Being a nonprofit and non-political organization Ladli Foundation has built very high credentials
  and recognitions at the international level; for the same, I sincerely appreciate the endless
  efforts of the
  entire team of the organization.`,
  },
];

const TestimonialCardWrapper = (props: Props) => {
  return (
    <div className="">
     
        <TestimonialCards testimonialData={testimonialData} />
     
    </div>
  );
};

export default TestimonialCardWrapper;
