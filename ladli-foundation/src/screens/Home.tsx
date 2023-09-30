import React from "react";
import OurCampaignsWrapper from "../component/ui/ourCampaigns/OurCampaignsWrapper";
import ImpactWrapper from "../component/ui/Impacts/ImpactWrapper";
import PartnersWrapper from "../component/ui/partners/PartnersWrapper";
import ImageGallery from "../component/ui/ImageGallery";
import Footer from "../component/ui/Footer";
import Header from "../component/ui/Header";
import aboutus1 from "../assests/images/homePage/aboutUs/about-us-1.jpg";
import aboutus2 from "../assests/images/homePage/aboutUs/about-us-2.jpg";
import aboutus3 from "../assests/images/homePage/aboutUs/about-us-3.jpg";
import ATMEventMediaSynopsis from "../component/atoms/ATMEventMediaSynopsis/ATMEventMediaSynopsis";
import { BsArrowRight } from "react-icons/bs";

import TestimonialCardWrapper from "../component/ui/TestimonialCard/TestimonialCardsWrapper";

type Props = {
  glimpses: string[];
};

const Home = ({ glimpses }: Props) => {

  return (
    <div className="flex flex-col gap-7 ">
      <Header />
      <ATMEventMediaSynopsis
        imagePosition="left"
        title="ABOUt US"
        founderImage1={aboutus1}
        founderImage2={aboutus2}
        founderImage3={aboutus3}
      >
        <div className="flex flex-col gap-3 ">
          <p className=" text-[12px] sm:text-[16px]">
            Ladli Foundation is a leading grassroots-level non-profit
            organization known for implementing impactful & innovative social
            initiatives to provide equitable healthcare, education & life skills
            to uplift vulnerable women. Presently the organization is directly
            working to address most pressing social issues for the advancement
            of sustainable development in India through its innovative Social
            Internship Program by leveraging the strength of over 1 Lac Youth
            Interns & Volunteers.
          </p>
          <p className=" text-[12px] sm:text-[16px] text-gray-500">
            With a resolute commitment to fostering change, we specialize in the
            effective implementation of routine immunization, prevention of
            communicable diseases and advancement of digital education &
            essential life skills in marginalized communities.
          </p>

          <button className="flex gap-1 text-[#00CBFF]  w-fit hover:bg-[#00CBFF] hover:text-white border-b-2 border-[#00CBFF] p-1 transition duration-200">
            <span> Know More</span>
            <span className="mt-2 ">
              <BsArrowRight />
            </span>
          </button>
        </div>
      </ATMEventMediaSynopsis>
      <ImpactWrapper />
      <OurCampaignsWrapper />
    
     <TestimonialCardWrapper/>
      <PartnersWrapper />
      <ImageGallery imageUrls={glimpses} />
      <Footer />
    </div>
  );
};

export default Home;
