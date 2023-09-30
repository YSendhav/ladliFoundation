import React from "react";
import ATMEventMediaSynopsis from "../../component/atoms/ATMEventMediaSynopsis/ATMEventMediaSynopsis";
import Image01 from "./../../assests/images/M-Rite/1.jpg";
import Image02 from "./../../assests/images/M-Rite/2.jpg";
import Image03 from "./../../assests/images/M-Rite/3.jpg";
import MRiteKeyImage from "./../../assests/images/M-Rite/m_rite_key_interventions.svg";
import ImageGallery from "../../component/ui/ImageGallery";
import glimpseImage01 from "./../../assests/images/M-Rite/glimpse/1 (1).jpg";
import glimpseImage02 from "./../../assests/images/M-Rite/glimpse/2.jpg";
import glimpseImage03 from "./../../assests/images/M-Rite/glimpse/3.jpg";
import glimpseImage04 from "./../../assests/images/M-Rite/glimpse/4.jpg";
import glimpseImage05 from "./../../assests/images/M-Rite/glimpse/5.jpg";
import glimpseImage06 from "./../../assests/images/M-Rite/glimpse/6.jpg";
import glimpseImage07 from "./../../assests/images/M-Rite/glimpse/7.jpg";
import glimpseImage08 from "./../../assests/images/M-Rite/glimpse/8.jpg";
import glimpseImage09 from "./../../assests/images/M-Rite/glimpse/9.jpg";
import glimpseImage10 from "./../../assests/images/M-Rite/glimpse/10.jpg";
import Footer from "../../component/ui/Footer";
import Header from "../../component/ui/Header";
const glimpse = [
  glimpseImage01,
  glimpseImage02,
  glimpseImage03,
  glimpseImage04,
  glimpseImage05,
  glimpseImage06,
  glimpseImage07,
  glimpseImage08,
  glimpseImage09,
  glimpseImage10,
];

type Props = {};

const MRite = (props: Props) => {
  return (
    <div>
      <Header title="M-RITE" />
      <div className="p-6 sm:px-20 md:px-24 lg:px-32">
        <div className="">
          <ATMEventMediaSynopsis
            founderImage1={Image01}
            founderImage2={Image02}
            founderImage3={Image03}
            imagePosition="left"
          >
            <div className="">
              <h1 className="font-medium text-[#6c757d]">DESCRIPTION</h1>
              <div className="text-[#6c757d] ">
                <div>
                  In India, the COVID-19 pandemic has resulted in an increased
                  caseload, hospitalization, and death surges, significantly
                  affecting countless individuals, families, and communities and
                  putting the public health system under tremendous strain.
                </div>
                <div className="py-4">
                  In response, the Government of India launched the world’s
                  largest COVID-19 vaccination program in January 2021. Initial
                  results were impressive, but challenges to equitable coverage
                  with the COVID-19 vaccine persist,including low coverage among
                  vulnerable, marginalized, and hard-to-reach populations;
                  supply of vaccine exceeding demand; procurement and
                  distribution barriers; vaccine hesitancy; and inequitable
                  human resource coverage.
                </div>
                <div>
                  To accelerate vaccination uptake among vulnerable and
                  hard-to-reach populations, the MOMENTUM Routine Immunization
                  Transformation and Equity project is providing technical
                  assistance to the Ministry of Health and Family Welfare
                  (MOHFW) to improve availability of vaccine doses and increase
                  trust in and demand for COVID-19 vaccination.
                </div>
              </div>
            </div>
          </ATMEventMediaSynopsis>
        </div>

        <div className="mt-[90px] md:mt-0">
          <div className="flex flex-col items-center justify-center md:py-10 pt-4">
            <div className="font-bold md:text-[35px] text-[26px] inline-block text-center bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent">
              KEY INTERVENTIONS
            </div>
          </div>
          <div className="md:px-14 px-2">
            <img src={MRiteKeyImage} alt="" />
          </div>
        </div>

        <div className="md:py-10 py-6">
          <ImageGallery imageUrls={glimpse} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MRite;
