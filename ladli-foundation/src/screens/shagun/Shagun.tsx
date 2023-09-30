import React from "react";
import Header from "../../component/ui/Header";
import Footer from "../../component/ui/Footer";
import ATMEventMediaSynopsis from "../../component/atoms/ATMEventMediaSynopsis/ATMEventMediaSynopsis";
import ATMEventSummery from "../../component/atoms/ATMEventSummery/ATMEventSummery";
//  SHAGUN DESCRIPTION IMAGES 
import description1 from "../../assests/images/shagun/description/description1.jpg";
import description2 from "../../assests/images/shagun/description/description2.jpg";
import description3 from "../../assests/images/shagun/description/description3.jpg";
import description4 from "../../assests/images/shagun/description/description4.jpg";
import description5 from "../../assests/images/shagun/description/description5.jpg";

//  SHAGUN KEY INTERVENTIONS IMAGES ---------------------------
import impactKeyIntervation from "../../assests/images/shagun/description/shagun_key_interventions.svg";

//  SHAGUN GLIPSES IMAGES DATA---------------------------
import glimpses1 from "../../assests/images/shagun/glimpses/1.jpg"
import glimpses2 from "../../assests/images/shagun/glimpses/2.jpg"
import glimpses3 from "../../assests/images/shagun/glimpses/3.jpg"
import glimpses4 from "../../assests/images/shagun/glimpses/4.jpg"
import glimpses5 from "../../assests/images/shagun/glimpses/5.jpg"
import glimpses6 from "../../assests/images/shagun/glimpses/6.jpg"
import glimpses7 from "../../assests/images/shagun/glimpses/7.jpg"
import glimpses8 from "../../assests/images/shagun/glimpses/8.jpg"
import glimpses9 from "../../assests/images/shagun/glimpses/9.jpg"
import glimpses10 from "../../assests/images/shagun/glimpses/10.jpg"
import ImageGallery from "../../component/ui/ImageGallery";

//  SHAGUN GLIPSES IMAGES DATA---------------------------
const shagunGlimpsesImages = [
    glimpses1,glimpses2,glimpses3,glimpses4,glimpses5,glimpses6,glimpses7,glimpses8,glimpses9,glimpses10
]
   
const Shagun = () => {
  return (
    <div>
      <Header 
      title="SHAGUN"/>
      <div className="p-6 sm:px-20 md:px-24 lg:px-32 flex flex-col gap-10">
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
                  The implementation of this program is dedicated to addressing
                  the multifaceted social and economic challenges faced by
                  daughters from disadvantaged families. The primary objective
                  is to empower adolescent girls and young women by providing
                  them with the necessary resources and support to become
                  independent and self-reliant. The program focuses on three key
                  areas: health, education, and skill development.
                </p>
                <p className="text-[#777777]">
                  Recognizing the vulnerability of girls from disadvantaged
                  backgrounds, the program prioritizes their health by providing
                  them with three years of health insurance. This ensures that
                  they have access to medical services and support when needed,
                  promoting their overall well-being. Additionally, the program
                  commemorates their wedding anniversary, encouraging social
                  support and discouraging the practice of female foeticide.
                </p>
              </div>
            }
          />
        </div>
        <div className=" mt-[100px] sm:mt-0">
          <ATMEventSummery
            image1={description4}
            image2={description5}
            imagePosition="right"
            children={
              <div className="flex flex-col gap-5 text-[#777777]">
                <p>
                  To address the issue of forced marriages, human trafficking,
                  and prostitution, community leaders and government
                  administration are actively involved in the program's
                  activities. Their participation helps ensure the safety and
                  suitability of grooms, reducing the risk of exploitative
                  practices. By engaging key stakeholders, the program creates a
                  protective environment and fosters a culture of
                  accountability.
                </p>
                <p>
                  The program also focuses on education and skill development,
                  recognizing their transformative power in breaking the cycle
                  of poverty. By providing support for girls' education, such as
                  distributing education kits and personal hygiene kits, the
                  program enhances their access to quality education and
                  improves their overall well-being. These resources contribute
                  to creating a conducive learning environment, particularly in
                  slum areas where access to educational resources may be
                  limited.
                </p>
                <p>
                  Furthermore, the program promotes social adoption by bringing
                  together affluent households and those who are less
                  privileged. This collaborative approach ensures that the needs
                  of girls, particularly in terms of health and education, are
                  met. By fostering social integration and inclusivity, the
                  program aims to break down barriers and create a more
                  equitable society.
                </p>
                <p>
                  The impact of these efforts has been significant. With the
                  successful execution of mass marriages for 1753 women, the
                  program has helped prevent dowry-related domestic violence
                  among the beneficiaries. Moreover, there have been no reported
                  instances of female infanticide, highlighting the program's
                  contribution to changing societal attitudes and reducing
                  harmful practices.
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
          <div className="grid grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-6 items-center">
              <h1 className="text-[28px] md:text-[31.5px] font-bold">1753</h1>
              <p className="text-black text-[16px] md:text-[18px] text-center font-medium">Successfully executed mass marriages of women</p>
            </div>
            <div className="text-black text-[16px] md:text-[18px] text-center font-medium">
              Based on an official police certificate, when these beneficiaries
              were later checked, not even a single person became the victim of
              dowry-related domestic violence.
            </div>
            <div className="text-black text-[16px] md:text-[18px] text-center font-medium">
              Not a single case of female infanticide has been reported.
            </div>
          </div>
        </div>
        <ImageGallery imageUrls={shagunGlimpsesImages}/>
      </div>
      <Footer />
    </div>
  );
};

export default Shagun;
