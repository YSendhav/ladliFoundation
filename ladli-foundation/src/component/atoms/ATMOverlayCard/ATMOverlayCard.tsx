import React from "react";
import ATMButton from "../ATMButton/ATMButton";
type Props = {
  image: string;
  name: string;
  position: string;
  place?: string;
  description?: string;
};

const ATMOverlayCard = ({
  image,
  name,
  position,
  place,
  description,
}: Props) => {
  return (
    <div className="">
      <div className="w-full relative rounded-lg main_container flex flex-col items-center justify-center +">
        <div className="text-center shadow-lg p-2  flex flex-col items-center justify-center ">
          <div>
            {" "}
            <img src={image} alt="" className=" p-4" />
          </div>
          <div className="">
            <h1 className="font-bold text-black md:text-[18px]  text-[22px] capitalize leading-1">
              {name}
            </h1>
            <p className="md:text-[14px] text-[17px] font-normal text-[#777]">
              {position}{" "}
            </p>
            <strong className="text-[#777] md:text-[14px] text-[18px] font-medium">
              {place}{" "}
            </strong>
          </div>
        </div>
        <div className="overlay w-[94%] h-screen  md:ml-[12px] ml-[10px] my-[10px] md:my-[7px] rounded-md">
          <div className=" flex flex-col gap-2 ">
            {description ? (
              <div className=" md:px-[20px] px-4 w-full h-[50vh] h-element sm:h-[150vh] md:h-[350px] lg:h-[460px] lg:gap-4  grow overflow-auto flex flex-col gap-2 items-center justify-center ">
                <p className="text-white md:text-[12px] text-[13px] md:leading-[15px] text-left font-medium ">
                  {description}
                </p>
                <div className="">
                  <ATMButton
                    title="Know More"
                    className="uppercase p-button py-[10px] px-10 sm:px-[140px] md:text-[10px]  lg:text-[13px] lg:px-[80px] md:px-10 bg-white text-black w-full text-[18px] text-[#777]  hover:text-black "
                  />
                </div>
              </div>
            ) : (
              <div className="md:pb-10">
                <div className="flex flex-col items-center justify-center h-[360px] ">
                  <ATMButton
                    title="Know More"
                    className="capitalize py-[10px] bg-white text-black w-full text-[18px] text-[#777] px-10 hover:text-black "
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATMOverlayCard;
