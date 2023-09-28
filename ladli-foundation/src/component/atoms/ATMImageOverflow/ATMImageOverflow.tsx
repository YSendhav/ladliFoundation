import React from "react";
import outreach01 from "./../../../assests/images/ourExpertise/outreach-1.jpg";
import outreach02 from "./../../../assests/images/ourExpertise/outreach-2.jpg";
import outreach03 from "./../../../assests/images/ourExpertise/outreach-3.jpg";
type Props = {
    title?: string;
    children?: React.ReactNode;
    extraClass?: string;
};

const ATMImageOverflow = ({ extraClass }: Props) => {
    return (
        <div>
            <div className="w-full relative rounded-md main transition duration-500 ">
                <div className="bg-[#fde8f3] shadow-lg rounded-full  text-[#750a42] p-20 custom-shadow w-[70%] " >
                    <h1 className={`capitalize ${extraClass} font-bold text-[24px]`}>Misson</h1>
                    <p className="text-[20px]">
                        At Ladli Foundation, our mission is to catalyze impactful and
                        innovative social initiatives that provide equitable healthcare,
                        education, and life skills to empower vulnerable women. With an
                        unwavering commitment to driving change by building ld a safe,
                        gender-neutral, and inclusive society.
                    </p>
                </div>
                <div className=" overflow " >
                    <div className="relative ">
                        <img src={outreach01} alt="" className="absolute w-[350px] hover:z-40 rounded-full p-2 custom-shadow bg-white" />
                        <img src={outreach02} alt="" className=" absolute z-10 hover:z-30 top-[100px] left-[80px] w-[350px] bg-white rounded-full p-2 custom-shadow" />
                        <img src={outreach03} alt="" className="absolute z-20  top-[220px] w-[350px] rounded-full p-2 custom-shadow bg-white" />
                    </div>
                </div>
            </div>
            {/* <div className="square1"></div>
            <div className="square2"></div> */}
        </div>
    );
};

export default ATMImageOverflow;
