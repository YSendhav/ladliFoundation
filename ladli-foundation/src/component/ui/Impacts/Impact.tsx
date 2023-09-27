import React from "react";
import CountUp from "react-countup";

type impactProps = {
  count: number;
  title: string;
  description: string;
};
type Props = {
  impacts: impactProps[];
};

const Impact = ({ impacts }: Props) => {
  return (
    <div className="flex items-center  justify-center px-10">
      <div className="flex flex-col gap-7 justify-center items-center ">
        <h1 className="uppercase font-bold text-center inline-block bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent text-[20px] sm:text-[24px]  md:text-[31px] lgtext-[35px] ">
          OUR IMPACT SINCE INCEPTION
        </h1>
        <h3 className="text-[#405492] text-[17.5px] text-center sm:text-[20px] md:text-[22px] font-bold">
          Till Now We Have Directly Impacted{" "}
           <CountUp end={2336000} duration={5} className="text-[#9CEBFF]" /> People
        </h3>

       <div className="">
       <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-4   justify-center">
          {impacts?.map((impact) => {
            return <div className=" p-3  border-b sm:border-r sm:border-divider flex items-center ">
                <div className="  border-gray-300 flex flex-col gap-5 items-center">
                  <div className="text-[#ea248f] font-bold text-[28px]">
                    <CountUp end={impact?.count} duration={5} />
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <h4 className="text-[15px] italic text-center font-medium">
                      {impact?.title}
                    </h4>
                    <p className="text-[14px]  text-center">{impact?.description}</p>
                  </div>
                </div>
              </div>
        
          })}
        </div>
       </div>
      </div>
    </div>
  );
};

export default Impact;
