import React from "react";
import Header from "../../component/ui/Header";
import Footer from "../../component/ui/Footer";
import ATMEventMediaSynopsis from "../../component/atoms/ATMEventMediaSynopsis/ATMEventMediaSynopsis";

// RAHAT SEVA DESCRIPTION IMAGES
import description1 from "../../assests/images/shagun/description/description1.jpg";
import description2 from "../../assests/images/shagun/description/description2.jpg";
import description3 from "../../assests/images/shagun/description/description3.jpg";

//  RAHAT SEVA GLIPSES IMAGES DATA---------------------------
import glimpses1 from "../../assests/images/RahatSeva/glimpses/glimpses1.jpg";
import glimpses2 from "../../assests/images/RahatSeva/glimpses/glimpses2.jpg";
import glimpses3 from "../../assests/images/RahatSeva/glimpses/glimpses3.jpg";
import glimpses4 from "../../assests/images/RahatSeva/glimpses/glimpses4.jpg";
import glimpses5 from "../../assests/images/RahatSeva/glimpses/glimpses5.jpg";
import glimpses6 from "../../assests/images/RahatSeva/glimpses/glimpses6.jpg";
import glimpses7 from "../../assests/images/RahatSeva/glimpses/glimpses7.jpg";
import glimpses8 from "../../assests/images/RahatSeva/glimpses/glimpses8.jpg";
import glimpses9 from "../../assests/images/RahatSeva/glimpses/glimpses9.jpg";
import glimpses10 from "../../assests/images/RahatSeva/glimpses/glimpses10.jpg";
import ImageGallery from "../../component/ui/ImageGallery";

//  SHAGUN GLIPSES IMAGES DATA---------------------------
const rahatSeva = [
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

const RahatSeva = () => {
  return (
    <div>
      <Header title="RAHAT SEVA" />
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
                  Ladli Foundation has been consistently working at a grassroots
                  level through our relief activities by providing Dry Ration,
                  Milk Supply, Sanitary Kits, Masks & Hand Wash to the Domestic
                  & Migrants Laborers in the different slums of Delhi NCR. We
                  have benefitted more than 1 lakh families and are continuously
                  working in the field with the support of local police to
                  identify the people in extreme need. Ladli Foundation Trust
                  has launched PROJECT RAHAT SEWA for the marginalized
                  communities.
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
          <div className="grid grid grid-cols-1 md:grid-cols-5 gap-10">
            <div className="flex flex-col gap-6 items-center">
              <h1 className="text-[28px] md:text-[31.5px] font-bold">
                2.5 Lakhs
              </h1>
              <p className="text-black text-[16px] md:text-[18px] text-center font-medium">
                Served more than 2.5 Lakhs migrant laborers, daily wage workers,
                Domestic Workers and Refugees.
              </p>
            </div>
            <div className="flex flex-col gap-6 items-center">
              <h1 className="text-[28px] md:text-[31.5px] font-bold">20000</h1>
              <p className="text-black text-[16px] md:text-[18px] text-center font-medium">
                20 thousand families were provided a monthly supply of essential
                Dry Ration.
              </p>
            </div>
            <div className="flex flex-col gap-6 items-center">
              <h1 className="text-[28px] md:text-[31.5px] font-bold">
                1.5 Lakh
              </h1>
              <p className="text-black text-[16px] md:text-[18px] text-center font-medium">
                1.5 Lakh underprivileged females were provided sanitary napkins
                & personal Hygiene Kits
              </p>
            </div>
            <div className="flex flex-col gap-6 items-center">
              <h1 className="text-[28px] md:text-[31.5px] font-bold">
                2.5 Lakhs
              </h1>
              <p className="text-black text-[16px] md:text-[18px] text-center font-medium">
                2.5 Lakhs people were provided Covid protection kits containing
                masks, soaps & sanitizers
              </p>
            </div>
            <div className="flex flex-col gap-6 items-center">
              <h1 className="text-[28px] md:text-[31.5px] font-bold">6000</h1>
              <p className="text-black text-[16px] md:text-[18px] text-center font-medium">
                More than 6000 mothers were provided milk to feed their newborn
                babies.
              </p>
            </div>
          </div>
        </div>
        <ImageGallery imageUrls={rahatSeva} />
      </div>
      <Footer />
    </div>
  );
};

export default RahatSeva;
