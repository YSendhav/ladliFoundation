import React from "react";
import ATMEventMediaSynopsis from "../../component/atoms/ATMEventMediaSynopsis/ATMEventMediaSynopsis";
import Image01 from './../../assests/images/e-pathansala/pathansalaImage01.jpg'
import Image02 from './../../assests/images/e-pathansala/pathansalaImage02.jpg'
import Image03 from './../../assests/images/e-pathansala/pathansalaImage03.jpg'
import PathansalaKeyImage from './../../assests/images/e-pathansala/e_pathanshala_key_interventions.png'
import PathansaImage from './../../assests/images/e-pathansala/e-pathanshala-impact (1).png'

type Props = {};

const Pathansala = (props: Props) => {
  return (
    <div>
      <div>
        <ATMEventMediaSynopsis
          founderImage1={Image01}
          founderImage2={Image02}
          founderImage3={Image03}
          imagePosition="left"
        >
          <h1 className="font-medium text-[#343a40]">DESCRIPTION</h1>
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
        </ATMEventMediaSynopsis>
      </div>
      <div>
        <img src={PathansalaKeyImage} alt="" />
        <img src={PathansaImage} alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default Pathansala;
