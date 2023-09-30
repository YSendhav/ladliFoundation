import React from "react";
import Header from "../../component/ui/Header";
import Footer from "../../component/ui/Footer";
import ATMEventSummery from "../../component/atoms/ATMEventSummery/ATMEventSummery";
//  SAHELI DESCRIPTION IMAGES
import description1 from "../../assests/images/thematicAreas/sachiSaheli.jpg"


//  SAHELI KEY INTERVENTIONS IMAGES ---------------------------
import impactKeyIntervation from "../../assests/images/saheli/keyIntervation/saheli_key_interventions.png";

//  SAHELI GLIPSES IMAGES DATA---------------------------
import glimpses1 from "../../assests/images/saheli/glimpses/glimpses1.jpg";
import glimpses2 from "../../assests/images/saheli/glimpses/glimpses2.jpg";
import glimpses3 from "../../assests/images/saheli/glimpses/glimpses3.jpg";
import glimpses4 from "../../assests/images/saheli/glimpses/glimpses4.jpg";
import glimpses5 from "../../assests/images/saheli/glimpses/glimpses5.jpg";
import glimpses6 from "../../assests/images/saheli/glimpses/glimpses6.jpg";
import glimpses7 from "../../assests/images/saheli/glimpses/glimpses7.jpg";
import glimpses8 from "../../assests/images/saheli/glimpses/glimpses8.jpg";
import glimpses9 from "../../assests/images/saheli/glimpses/glimpses9.jpg";
import glimpses10 from "../../assests/images/saheli/glimpses/glimpses10.jpg";
import ImageGallery from "../../component/ui/ImageGallery";

//  SHAGUN GLIPSES IMAGES DATA---------------------------
const saheliGlipmsesImages = [
  glimpses1,
  glimpses2,
  glimpses3,
  glimpses4,
  glimpses5,
  glimpses6,
  glimpses7,
  glimpses8,
  glimpses9,
  glimpses10,
];

const Saheli = () => {
  return (
    <div>
      <Header title="SAHELI" />
      <div className="p-6 sm:px-20 md:px-24 lg:px-32 flex flex-col gap-10">
        <div>
          <ATMEventSummery
            image1={description1}
            imagePosition="left"
            children={
              <div className="flex flex-col gap-5 text-[#777777]">
                <h1 className="text-[#777777] font-bold">DESCRIPTION</h1>
                <p>
                  A distinctive community outreach programme focuses on
                  vulnerable women and children in marginalized communities who
                  lack access to and/or knowledge of basic healthcare and
                  hygiene. It is intended to affect numerous groups who are
                  unaware of deadly transmissible diseases such as tuberculosis,
                  HIV, and AIDS, making them an alarming portent of the same.
                </p>
                <p>
                  We conduct Saheli Health Camps where medical screening and
                  primary healthcare services are provided to the beneficiaries
                  with prescribed IFA Supplements, Jaggery, Grams (Chana) for 90
                  days and personalized diet charts and Sanitary Kits.
                </p>
                <p>
                  Monthly Interactive workshops are conducted to educate them
                  about Menstrual Hygiene, WASH, Reproductive Health, YOGA &
                  Mental Health to inculcate sustainable living practices.
                </p>
              </div>
            }
          />
        </div>
        <div>
          <div className="flex justify-center">
            <div className="font-bold text-[35px] inline-block text-center bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent">
              KEY INTERVENTIONS
            </div>
          </div>
          <div>
            <img src={impactKeyIntervation} alt="key intervation" />
          </div>
        </div>
        <div className="flex flex-col gap-7 p-7">
          <div className="flex justify-center">
            <div className="font-bold text-[35px] inline-block text-center bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent">
              OUR IMPACT
            </div>
          </div>
          <div className="grid grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-6 items-center">
              <h1 className="text-[28px] md:text-[31.5px] font-bold text-center">
                3.75 Lakhs
              </h1>
              <p className="text-black text-[16px] md:text-[18px] text-center font-medium">
              Girls Impacted- More than 3.75 Lakhs benefited already
              </p>
            </div>
            <div className="flex flex-col gap-6 items-center">
              <h1 className="text-[28px] md:text-[31.5px] font-bold text-center">
                Uttarakhand, Haryana,Uttar Pradesh, Punjab, Telangana, Rajasthan
              </h1>
              <p className="text-black text-[16px] md:text-[18px] text-center font-medium">
              States impacted
              </p>
            </div>
          </div>
        </div>
        <ImageGallery imageUrls={saheliGlipmsesImages} />
      </div>
      <Footer />
    </div>
  );
};

export default Saheli;
