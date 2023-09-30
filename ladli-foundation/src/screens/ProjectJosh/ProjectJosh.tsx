import React from "react";
import Header from "../../component/ui/Header";
import Footer from "../../component/ui/Footer";
import ATMEventMediaSynopsis from "../../component/atoms/ATMEventMediaSynopsis/ATMEventMediaSynopsis";
//  PROJECT JOSH DESCRIPTION IMAGES
import description1 from "../../assests/images/shagun/description/description1.jpg";
import description2 from "../../assests/images/shagun/description/description2.jpg";
import description3 from "../../assests/images/shagun/description/description3.jpg";

//  PROJECT JOSH KEY INTERVENTIONS IMAGES ---------------------------
import impactKeyIntervation from "../../assests/images/projectJosh/description/project_josh_key_interventions.png";

//  PROJECT JOSH GLIPSES IMAGES DATA---------------------------
import glimpses1 from "../../assests/images/projectJosh/glimpses/glimpses1.jpg";
import glimpses2 from "../../assests/images/projectJosh/glimpses/glimpses2.jpg";
import glimpses3 from "../../assests/images/projectJosh/glimpses/glimpses3.jpg";
import glimpses4 from "../../assests/images/projectJosh/glimpses/glimpses4.jpg";
import glimpses5 from "../../assests/images/projectJosh/glimpses/glimpses5.jpg";
import glimpses6 from "../../assests/images/projectJosh/glimpses/glimpses6.jpg";
import glimpses7 from "../../assests/images/projectJosh/glimpses/glimpses7.jpg";
import glimpses8 from "../../assests/images/projectJosh/glimpses/glimpses8.jpg";
import glimpses9 from "../../assests/images/projectJosh/glimpses/glimpses9.jpg";
import glimpses10 from "../../assests/images/projectJosh/glimpses/glimpses10.jpg";
import ImageGallery from "../../component/ui/ImageGallery";

//  SHAGUN GLIPSES IMAGES DATA---------------------------
const projectJosh = [
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

const ProjectJosh = () => {
  return (
    <div>
      <Header title="PROJECT JOSH" />
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
                  Substance Abuse is one of the most serious social ills that
                  India is attempting to eradicate. It has a significant impact
                  on young minds, which is beneficial to the nation. But what
                  exactly motivates them to engage in this heinous drug-abusing
                  behavior? Among the possible causes are societal pressure and
                  environment, health, family, abuse, neglect, vengeance,
                  poverty, unemployment, and mental stress. The situation in
                  India's slums is deplorable and unpleasant, owing to the
                  widespread prevalence of poverty and illiteracy in these
                  areas. Unable to cope with the harsh and ruthless realities of
                  life, slum youth, particularly the male population, engage in
                  heavy drug use.The program targeted young boys residing in
                  slums and underdeveloped areas of Delhi due to an ever-growing
                  increase in substance use and crime.
                </p>
              </div>
            }
          />
        </div>
        
        <div className="mt-[50px] sm:md-0">
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
              <h1 className="text-[28px] md:text-[31.5px] font-bold">3000+</h1>
              <p className="text-black text-[16px] md:text-[18px] text-center font-medium">
              No of boys who got the training
              </p>
            </div>
            <div className="flex flex-col gap-6 items-center">
              <h1 className="text-[28px] md:text-[31.5px] font-bold">1057</h1>
              <p className="text-black text-[16px] md:text-[18px] text-center font-medium">
              Number of boys who got the job opportunity
              </p>
            </div>
            <div className="flex flex-col gap-6 items-center">
              <h1 className="text-[28px] md:text-[31.5px] font-bold">Delhi</h1>
              <p className="text-black text-[16px] md:text-[18px] text-center font-medium">
              State Impacted
              </p>
            </div>
          </div>
        </div>
        <ImageGallery imageUrls={projectJosh} />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectJosh;
