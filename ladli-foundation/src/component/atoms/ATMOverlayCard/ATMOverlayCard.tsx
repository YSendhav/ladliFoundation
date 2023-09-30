import React from "react";
import ATMButton from "../ATMButton/ATMButton";
type Props = {
  image: string;
  name: string;
  position: string;
  place?: string;
  description?: string
  button: boolean
};

const ATMOverlayCard = ({ image, name, position, place, description, button }: Props) => {
  return (
    <div className="p-4">
      <div className="w-full h-full relative rounded-md main_container">
        <div className="flex flex-col items-center justify-center text-center shadow-lg p-4 ">
          <div>
            {" "}
            <img src={image} alt="" className="p-4" />
          </div>
          <div className="">
            <h1 className="font-medium text-black text-[20px] capitalize leading-1">
              {name}
            </h1>
            <p className="text-[14px] font-normal text-[#777]">{position} </p>
            <strong className="text-[#777] text-[15px] font-medium">{place} </strong>
          </div>
        </div>
        <div className=" overlay w-[94%] ml-[10px] my-[10px] h-screen flex flex-col items-center justify-center">
          <div className=" flex flex-col gap-4 overflow-auto ">
            <p className="text-white text-[16px] leading-[15px] text-left p-4">
              {description}
            </p>
            {button === true && (
              <div className="px-4 py-2">
                <ATMButton
                  title="Know More"
                  className="capitalize py-3 bg-white text-black w-full text-[18px]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATMOverlayCard;