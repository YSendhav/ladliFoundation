import React from "react";
import ATMFlippableCard from "../../atoms/ATMFlippableCard/ATMFlippableCard";
import ATMButton from "../../atoms/ATMButton/ATMButton";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    itemClass:"p-[5px]"
   
  },
};
type Props = {
  campaignsName: string;
  campaignsDescription: string;
  campaignsImage: string;
};
type CampaignsProps = {
  campaignsData: Props[];
};

const OurCampaigns = ({ campaignsData }: CampaignsProps) => {
  return (
    <div className="flex flex-col gap-5 gap-[25px] items-center justify-center">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="uppercase font-bold text-center inline-block bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent text-[20px] sm:text-[24px]  md:text-[31px] lgtext-[35px] ">
          OUR IMPACT SINCE INCEPTION
        </h1>
        <h3 className="text-[#405492] w-full text-[17.5px] sm:w-[500px] md:w-[680px] w-full text-center sm:text-[20px] md:text-[22px] font-bold">
          Your small contribution makes a big difference in people's lives. We
          depend on your generosity to create real change in India!
        </h3>
      </div>

      <div className="flex gap-7 h-full w-full ">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          centerMode={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          rewindWithAnimation={true}
          autoPlay={true}
          arrows={false}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="transform 400ms ease-in-out" 
        transitionDuration={400}
         rewind={true}
          sliderClass=" border-2 w-fit h-fit border-green-500"
          containerClass=" w-fit h-fit"
         itemClass="p-[25px]"
        >
          {campaignsData.map((campaings, index) => {
            const isBlue = index >= campaignsData.length - 3;
            return (
              <div className="flex gap-5 h-full w-full">
                <ATMFlippableCard
                  className=" sm:w-[100%]  h-fit sm:h-[320px]"
                  extraClass2="w-full h-full shadow-lg rounded-sm"
                  extraClass1="w-full h-full shadow-lg rounded-sm"
                  children1={
                    <div className="flex flex-col h-full w-full shadow-lg ">
                      <div className="relative flex flex-col items-center">
                        <img
                          src={campaings?.campaignsImage}
                          alt=""
                          className="card__picture  "
                        />
                        <div
                          className={`${
                            isBlue && "programCardImage-blue"
                          } programCardImage text-white p-2 w-fit absolute  bottom-0  font-medium overflow-hidden opacity-[18px] grid justify-content-center`}
                        >
                          {campaings?.campaignsName}
                        </div>
                      </div>
                      <div className="text-[#405492] p-5 font-medium">
                        {campaings?.campaignsDescription}
                      </div>
                    </div>
                  }
                  children2={
                    <div
                      className={`${
                        isBlue && "programCardImage-blue"
                      } w-full h-full flex flex-col gap-5 items-center programCardImage p-3 px-3`}
                    >
                      <div className="flex flex-col  items-center">
                        <div className="text-[1rem] text-white">
                          Know More About
                        </div>
                        <div className="text-[2rem] text-white font-medium">
                          Campaigns
                        </div>
                      </div>
                      <div className="flex flex-col gap-5 items-center">
                        <ATMButton
                          className="bg-white text-gray-500"
                          title="Contribute Now"
                        />
                        <ATMButton
                          className="bg-white text-gray-500   text-center"
                          title="Know More About The Campaign"
                        />
                      </div>
                    </div>
                  }
                />
              </div>
            );
          })}
        </Carousel>
      </div>

      <div>
        <ATMButton
          className="bg-[#00CBFF] py-[10px] px-5"
          title="VIEW ALL CAMPAIGNS"
        />
      </div>
    </div>
  );
};

export default OurCampaigns;
