import React from "react";
import ATMEventMediaSynopsis from "../../component/atoms/ATMEventMediaSynopsis/ATMEventMediaSynopsis";
import Image01 from "./../../assests/images/e-pathansala/pathansalaImage01.jpg";
import Image02 from "./../../assests/images/e-pathansala/pathansalaImage02.jpg";
import Image03 from "./../../assests/images/e-pathansala/pathansalaImage03.jpg";
import pathanshalaGlimpseImage01 from "./../../assests/images/e-pathansala/glimpse/1.jpg";
import pathanshalaGlimpseImage02 from "./../../assests/images/e-pathansala/glimpse/1.jpg";
import pathanshalaGlimpseImage03 from "./../../assests/images/e-pathansala/glimpse/1.jpg";
import pathanshalaGlimpseImage04 from "./../../assests/images/e-pathansala/glimpse/1.jpg";
import pathanshalaGlimpseImage05 from "./../../assests/images/e-pathansala/glimpse/1.jpg";
import pathanshalaGlimpseImage06 from "./../../assests/images/e-pathansala/glimpse/1.jpg";
import pathanshalaGlimpseImage07 from "./../../assests/images/e-pathansala/glimpse/1.jpg";
import pathanshalaGlimpseImage08 from "./../../assests/images/e-pathansala/glimpse/1.jpg";
import pathanshalaGlimpseImage09 from "./../../assests/images/e-pathansala/glimpse/1.jpg";
import pathanshalaGlimpseImage10 from "./../../assests/images/e-pathansala/glimpse/1.jpg";
import PathansalaKeyImage from "./../../assests/images/e-pathansala/e_pathanshala_key_interventions.png";
import PathansaImage from "./../../assests/images/e-pathansala/e-pathanshala-impact (1).png";
import PathansaImage01 from "./../../assests/images/e-pathansala/pathanshala-impact.png";
import ImageGallery from "../../component/ui/ImageGallery";
import Header from "../../component/ui/Header";
import Footer from "../../component/ui/Footer";
type Props = {};
const glimpses = [
  pathanshalaGlimpseImage01,
  pathanshalaGlimpseImage02,
  pathanshalaGlimpseImage03,
  pathanshalaGlimpseImage04,
  pathanshalaGlimpseImage05,
  pathanshalaGlimpseImage06,
  pathanshalaGlimpseImage07,
  pathanshalaGlimpseImage08,
  pathanshalaGlimpseImage09,
  pathanshalaGlimpseImage10,
];
const Pathansala = (props: Props) => {
  return (
    <>
      <Header title="E-PATHANSHALA" />
      <div className="">

        <div className="py-10 p-4 sm:px-20 md:px-24 lg:px-32">
          <ATMEventMediaSynopsis
            founderImage1={Image01}
            founderImage2={Image02}
            founderImage3={Image03}
            imagePosition="left"
          >
            <div className="px-4">
              <h1 className="font-medium text-[#6c757d]">DESCRIPTION</h1>
              <div className="text-[#6c757d] ">
                The dire situation of approximately 46 million child laborers and
                beggars in India, aged 6 to 18, highlights the urgent need for
                access to quality education. These children, mostly deprived of
                schooling due to financial constraints, face even greater challenges
                when it comes to girls who are forced out of school due to early
                marriages, menstruation, and trafficking. Additionally,
                approximately 264 million slum children lack educational
                opportunities. In response to this crisis, an initiative aims to
                address the decline in education quality and protect vulnerable
                children by providing mobile classes and engaging them in productive
                activities. Amid the pandemic, digital learning has proven vital in
                bridging the gap in education, ensuring remote access to learning
                materials, interactive classes, and teacher engagement. By embracing
                digital learning, inclusivity and equal opportunities for education
                can be promoted, safeguarding children from exploitation while
                fostering their development as responsible citizens.
              </div>
            </div>
          </ATMEventMediaSynopsis>
        </div>
        <div className="pt-20 md:py-4">
          <img src={PathansalaKeyImage} alt="" />
        </div>
        <div className="p-4 sm:px-20 md:px-24 lg:px-32">
          <div className="grid grid-cols-2">
            <img src={PathansaImage01} alt="" />
            <img src={PathansaImage} alt="" />
          </div>
          <div>
            <ImageGallery imageUrls={glimpses} />
          </div>
        </div>

      </div>
      <Footer />
    </>

  );
};

export default Pathansala;
