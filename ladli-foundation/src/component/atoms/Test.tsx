import React from "react";
import { BsArrowRight } from "react-icons/bs";
import image003 from "./../../assests/images/images003.jpg";
import ATMEventMediaSynopsis from "./ATMEventMediaSynopsis/ATMEventMediaSynopsis";
import ATMEventSummery from "./ATMEventSummery/ATMEventSummery";
import TestimonialCardWrapper from "../ui/TestimonialCard/TestimonialCardWrapper";
import FounderWrapper from "../../screens/Founder/FounderWrapper";
import AdvisoryWrapper from "../../screens/Adversory/AdversoryWrapper";
type Props = {};

const Test = (props: Props) => {
    return (
        <div className="">
            {/* <Header /> */}
            <AdvisoryWrapper/>
            <FounderWrapper />
            <TestimonialCardWrapper />
            <div className="mt-20">
                <ATMEventSummery image1={image003} image2={image003} imagePosition="left">
                    <div className=" text-[16px] text-gray-500 pt-1">
                        He has been honoured with two national award by the Government of
                        India and has been praised by four successive Presidents of India
                        late Sh. APJ Abdul Kalam, Late. Sh. Pranab Mukharjee, Sh. Ram Nath
                        Kovind & Smt. Draupadi Murmu, respectively.
                    </div>
                    <div className="text-gray-700 text-[16px] font-medium py-6">
                        Presently he is working to address most pressing social issues for
                        the advancement of Hon’ble Prime Minister’ Initiatives for
                        sustainable development in India by managing the force of over 1 Lac
                        Youth Interns & Volunteers through his innovative Social Internship
                        Program.
                    </div>
                    <div className="text-gray-700 text-[16px] font-medium">
                        Under his visionary leadership and successful community engagement,
                        Devendra has made a profound impact, positively affecting over 2.5
                        million direct beneficiaries. Notably, his exceptional contributions
                        encompass providing digital education access to more than 157,000
                        marginalized students, resulting in a significant impact valued at
                        approximately INR 600 Crore (equivalent to 75 million USD).
                        Remarkably, all these achievements have been realized independently,
                        without relying on external financial assistance or grants.
                        Additionally, as the Exclusive NGO Partner of the Government of
                        Delhi, the organization is actively implementing its innovative
                        solutions to combat malnutrition among 800,000 marginalized
                        students, forging a sustainable path towards positive change
                    </div>
                </ATMEventSummery>
            </div>

            <ATMEventMediaSynopsis
                title="ABOUT US"
                imagePosition="left"
                founderImage1={image003}
                founderImage2={image003}
                founderImage3={image003}
            >
                <div className="text-[#7F7F7F]">
                    <div>
                        Ladli Foundation is a leading grassroots-level non-profit
                        organization known for implementing impactful & innovative social
                        initiatives to provide equitable healthcare, education & life skills
                        to uplift vulnerable women. Presently the organization is directly
                        working to address most pressing social issues for the advancement
                        of sustainable development in India through its innovative Social
                        Internship Program by leveraging the strength of over 1 Lac Youth
                        Interns & Volunteers.
                    </div>
                    <div className="py-4">
                        With a resolute commitment to fostering change, we specialize in the
                        effective implementation of routine immunization, prevention of
                        communicable diseases and advancement of digital education &
                        essential life skills in marginalized communities.
                    </div>
                    <button className="flex gap-1 text-[#00CBFF] inline-block hover:bg-[#00CBFF] hover:text-white border-b-2 border-[#00CBFF] p-1 transition duration-200">
                        <span> Know More</span>
                        <span className="mt-2 ">
                            <BsArrowRight />
                        </span>
                    </button>
                </div>
            </ATMEventMediaSynopsis>
        </div>
    );
};

export default Test;
