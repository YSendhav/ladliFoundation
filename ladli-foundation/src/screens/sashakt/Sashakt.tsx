import React from "react";
import Header from "../../component/ui/Header";
import Footer from "../../component/ui/Footer";
import ATMEventMediaSynopsis from "../../component/atoms/ATMEventMediaSynopsis/ATMEventMediaSynopsis";

// RAHAT SEVA DESCRIPTION IMAGES
import description1 from "../../assests/images/thematicAreas/women1.jpg";
import description2 from "../../assests/images/thematicAreas/women2.jpg";
import description3 from "../../assests/images/thematicAreas/womwn3 (2).jpg";

//  RAHAT SEVA GLIPSES IMAGES DATA---------------------------
import glimpses1 from "../../assests/images/sashakt/glimpses/glimpses1.jpg";
import glimpses2 from "../../assests/images/sashakt/glimpses/glimpses2.jpg";
import glimpses3 from "../../assests/images/sashakt/glimpses/glimpses3.jpg";
import glimpses4 from "../../assests/images/sashakt/glimpses/glimpses4.jpg";
import glimpses5 from "../../assests/images/sashakt/glimpses/glimpses5.jpg";
import glimpses6 from "../../assests/images/sashakt/glimpses/glimpses6.jpg";
import glimpses7 from "../../assests/images/sashakt/glimpses/glimpses7.jpg";
import glimpses8 from "../../assests/images/sashakt/glimpses/glimpses8.jpg";
import glimpses9 from "../../assests/images/sashakt/glimpses/glimpses9.jpg";
import glimpses10 from "../../assests/images/sashakt/glimpses/glimpses10.jpg";
import ImageGallery from "../../component/ui/ImageGallery";

//  SHAGUN GLIPSES IMAGES DATA---------------------------
const sashaktGlimpsesImages = [
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

const Sashakt = () => {
  return (
    <div>
      <Header title="SASHAKT" />
      <div className="p-6 sm:px-20 md:px-24 lg:px-32 flex flex-col gap-[50px]">
        <div>
          <ATMEventMediaSynopsis
            title=""
            imagePosition="left"
            founderImage1={description1}
            founderImage2={description2}
            founderImage3={description3}
            children={
              <div className="flex flex-col gap-3">
                <h1 className="text-[#777777] font-bold">DESCRIPTION</h1>
                <p className="text-[#777777]">
                  Vocational training equips girls with practical skills and
                  knowledge that empower them to become economically
                  independent. It provides them with the ability to pursue
                  careers and entrepreneurial ventures, boosting their
                  self-esteem and confidence. We at Ladli strive tirelessly to
                  generate awareness in the society about education & basic
                  skills for the upliftment of the underprivileged. Our project
                  opens up a wide range of career opportunities for girls beyond
                  traditional gender roles. It enables them to explore
                  non-traditional fields and sectors, breaking barriers and
                  challenging gender stereotypes.
                </p>
              </div>
            }
          />
        </div>
        <div className="flex flex-col gap-7 p-7 mt-[50px] sm mt-0">
          <div className="flex justify-center">
            <div className="font-bold text-[35px] inline-block text-center bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent">
              OUR IMPACT
            </div>
          </div>
          <div className="grid grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-6 items-center">
              <h1 className="text-[28px] md:text-[31.5px] font-bold">
              16000
              </h1>
              <p className="text-black text-[16px] md:text-[18px] text-center font-medium">
              16000 girls to get intermediate education who had dropped out of their schools due to poverty and outdated familial beliefs.
              </p>
            </div>
            <div className="flex flex-col gap-6 items-center">
              <h1 className="text-[28px] md:text-[31.5px] font-bold">1500</h1>
              <p className="text-black text-[16px] md:text-[18px] text-center font-medium">
              Basic computer and English training classes in batches of 1500 each
              </p>
            </div>
            <div className="flex flex-col gap-6 items-center">
              <h1 className="text-[28px] md:text-[31.5px] font-bold">
              2000
              </h1>
              <p className="text-black text-[16px] md:text-[18px] text-center font-medium">
              More than 2000 girls have been able to earn employment.
              </p>
            </div>
          </div>
        </div>
        <ImageGallery imageUrls={sashaktGlimpsesImages} />
      </div>
      <Footer />
    </div>
  );
};

export default Sashakt;
