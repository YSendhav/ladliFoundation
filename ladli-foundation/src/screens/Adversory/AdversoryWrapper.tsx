import React from "react";
import Image01 from "./../../assests/images/adversoryCouncil/mr-nixon-joseph.jpg";
import Image02 from "./../../assests/images/adversoryCouncil/mr-kuldeep-kumar-ips.jpg";
import Image03 from "./../../assests/images/adversoryCouncil/mr-sd-patnaik.jpg";
import Image04 from "./../../assests/images/adversoryCouncil/adv-vivek-narayan-sharma.jpg";
import Image05 from "./../../assests/images/adversoryCouncil/dr-alok-yadav.jpg";
import Image06 from "./../../assests/images/adversoryCouncil/dr-adesh-chaturvedi.jpg";
import Image07 from "./../../assests/images/adversoryCouncil/dr-amit-gupta.jpg";
import Image08 from "./../../assests/images/adversoryCouncil/dr-santosh-kumar.jpg";
import Image09 from "./../../assests/images/adversoryCouncil/ms-amisha-choudhary.jpg";
import Image10 from "./../../assests/images/adversoryCouncil/mr-kk-varma.jpg";
import Image11 from "./../../assests/images/adversoryCouncil/dr-surbhi-singh.jpg";
import Image12 from "./../../assests/images/adversoryCouncil/ca-pankaj-jain.jpg";
import Image13 from "./../../assests/images/adversoryCouncil/mr-rajeev-singh.jpg";
import Image14 from "./../../assests/images/adversoryCouncil/ms-vinita-yadav.jpg";
import Image15 from "./../../assests/images/adversoryCouncil/ms-archana-mittal.jpg";
import Image16 from "./../../assests/images/adversoryCouncil/dr-gyanendra.jpg";
import Image17 from "./../../assests/images/adversoryCouncil/mr-dheeraj-agrawal.jpg";
import Image18 from "./../../assests/images/adversoryCouncil/nikhil.jpg";
import Image19 from "./../../assests/images/adversoryCouncil/pradeep.jpg";
import Advisory from "./Adversory";

type Props = {};

const advisoryData = [
  {
    advisoryImage: Image01,
    advisoryName: "Mr. Nixon Joseph",
    advisoryPosition: "Stakeholder Engagements ",
    advisoryPlace: " Former President - SBI Foundation",
    advisoryDescription:
      "Nixon Joseph is a banker and accomplished CSR professional with a wealth of experience spanning various areas, including Investments, Risk Management, Corporate Finance, Retail Banking, Credit Analysis, and syndication. With a strong educational background and multiple certifications, he has established himself as a highly proficient and respected individual in the banking industry.",
  },

  {
    advisoryImage: Image02,
    advisoryName: "Mr. Kuldeep Kumar, IPS",
    advisoryPosition: "Govt. Relations ",
    advisoryPlace: " Ex. ADGP, Tripura Police",
    advisoryDescription:
      "Kuldeep Kumar, is an IPS Officer, brings a wealth of experience and expertise to the field of  intelligence work. Hailing from the esteemed 1985 batch, he has dedicated his career to upholding law and order, and has made significant contributions  efforts in the state of Tripura. His diverse background, field of law enforcement",
  },
  {
    advisoryImage: Image03,
    advisoryName: "Mr. Satyadarshi Patnaik",
    advisoryPosition: "Logistics & Supply Chain management ",
    advisoryPlace: " Ex. Director, Care India",
    advisoryDescription:
      "Satyadarshi Patnaik is a highly accomplished and multifaceted individual who has excelled in various fields throughout his career. With expertise in office administration, IT, legal services, and managerial roles in programs, finance, supply chain, and process optimizations, he possesses a staggering 31 years of experience in these domains. Currently, he serves as an independent consultant, offering his valuable insights and guidance to organizations seeking his expertise",
  },
  {
    advisoryImage: Image04,
    advisoryName: "Adv. Vivek Narayan Sharma",
    advisoryPosition: "Policy Advocacy ",
    advisoryPlace: " Ex. Joint Secretary, Supreme court AOR Association",
    advisoryDescription:
      "Vivek Narayan Sharma is an eminent legal professional who holds the esteemed position of Joint Secretary at the Supreme Court Advocates-On-Record Association. With his extensive expertise and exceptional legal acumen, he has made significant contributions to the field of law in India. Mr. Sharma is widely recognized as the President of the Society for Criminal Justice, further demonstrating his commitment to promoting justice and upholding the principles of the legal system",
  },
  {
    advisoryImage: Image05,
    advisoryName: "Dr. Alok Yadav",
    advisoryPosition: "TB & Community Health ",
    advisoryPlace: " CMO, National Institute of TB",
    advisoryDescription:
      "Dr. Alok Yadav is an esteemed pediatrician, renowned for his expertise in pediatric tuberculosis and lung diseases. With a distinguished career spanning several years, he has made significant contributions to the field of pediatrics, both in terms of clinical practice and academic pursuits",
  },
  {
    advisoryImage: Image06,
    advisoryName: "Dr. Adesh Chaturvedi",
    advisoryPosition: " Public Health ",
    advisoryPlace: " Professor- Public Health and Epidemiology",
    advisoryDescription:
      "Dr. Adesh Chaturvedi has around 27 years of  experience working in development sector. Proven track record of conceiving and managing large  programs & projects on Health, HIV, Nutrition and Local Governance. He has worked with several prestigious organisations i.e.  The World Bank, United Nations Development Program (UNDP), United Nations Office for Project Services (UNOPS), European Commission,IIHMR etc. He taught Health Care Management in Goa Institute of Management, Goa a Associate Professor, Public Health and Epidemiology.",
  },
  {
    advisoryImage: Image07,
    advisoryName: "Dr. Amit Gupta",
    advisoryPosition: "Health ",
    advisoryPlace: " Chairman Seema Dental College, Rishikesh ",
    advisoryDescription:
      "Dr. Amit Gupta, an esteemed professional in the field of dentistry, has been serving as the Chairman of Seema Dental College & Hospital since 2008. With a distinguished career spanning over several decades, Dr. Gupta has made significant contributions to the field and has garnered recognition for his outstanding leadership and commitment to public welfare. ",
  },
  {
    advisoryImage: Image08,
    advisoryName: "Dr. Santosh Kumar",
    advisoryPosition: "Commmunity Health ",
    advisoryPlace: " Addl. Professor , AIIMS Rishikesh",
    advisoryDescription:
      "Dr. Santosh Kumar, a widely esteemed and renowned Family Physician, currently holds the position of Additional Professor at AIIMS Rishikesh. His expertise and reputation in the field have earned him great respect among his peers and patients alike. With over 10 years of experience in the field, he has established himself as a trusted healthcare provider, having provided primary care to more than 30,000 patients throughout his career.    ",
  },
  {
    advisoryImage: Image09,
    advisoryName: "Ms. Amisha Choudhary",
    advisoryPosition: "Gender & Development ",
    advisoryPlace: " Miss United Nations - 2017",
    advisoryDescription:
      "Ms. Amisha Chaudhary is an inspiring figure, making history as the first Indian to be crowned Ms. United Nations 2017 in a prestigious private pageant held at the United Nations. Hailing from Faridabad, she has achieved remarkable success in various fields while also making significant contributions to society.",
  },
  {
    advisoryImage: Image10,
    advisoryName: "Mr. Krishna Kumar Varma",
    advisoryPosition: "Monitoring & Evaluation ",
    advisoryPlace: " Ex. UNDP",
    advisoryDescription:
      "Mr. Krishna Kumar Varma is a distinguished professional with a wealth of expertise in grant application writing, program development, appraisal and management, and networking and partnership. With an impressive career spanning various sectors, Mr. Varma has amassed extensive experience in the realms of social and population research. His contributions have been invaluable to organizations such as the Government of India, national and international charities, and the United Nations Population Fund.",
  },
  {
    advisoryImage: Image11,
    advisoryName: "Dr. Surbhi Singh",
    advisoryPosition: "Women & Child Health ",
    advisoryPlace: " President- Sacchi Saheli",
  },
  {
    advisoryImage: Image12,
    advisoryName: "CA Pankaj Jain",
    advisoryPosition: "Finance & Complience ",
    advisoryPlace: "Finance & Complience ",
    advisoryDescription:
      "Mr. Pankaj Jain, a Senior Chartered Accountant based in Delhi, has built a strong reputation as a highly accomplished and customer-focused professional. He is known for his exceptional skills and dedication in serving his clients.With over 20 years of experience in the field, he possesses a deep understanding of the intricacies of financial management and has consistently prioritized client engagement throughout his career.",
  },
  {
    advisoryImage: Image13,
    advisoryName: "Mr. Rajeev Singh",
    advisoryPosition: "Skill Development & Entrepreneurship",
    advisoryPlace: " Director- IACT Education Pvt Ltd",
  },
  {
    advisoryImage: Image14,
    advisoryName: "Ms. Vinita Yadav",
    advisoryPosition: "Media & Communications ",
    advisoryPlace: "Media & Communications ",
    advisoryDescription:
      "Ms. Vinita Yadav is an accomplished media professional with a career spanning over two decades in journalism, broadcasting, and media production. Her outstanding achievements and contributions to the field have earned her a well-deserved reputation as an inspirational figure.",
  },
  {
    advisoryImage: Image15,
    advisoryName: "Ms. Archana Mittal",
    advisoryPosition: "International Relations ",
    advisoryPlace: "International Relations ",
    advisoryDescription:
      "Ms. Archana Mittal is an individual of exceptional accomplishments, she set skill and dedication to social development. Her diverse range of skills and unwavering commitment to fostering positive change make her a truly remarkable . With a background in chemical engineering, she brings perspective to her work in networking and communications. Ms. Mittal has been involved in various national and international social development initiatives, demonstrating her commitment to making a positive impact on society.",
  },
  {
    advisoryImage: Image16,
    advisoryName: "Dr. Gyanendra Kumar",
    advisoryPosition: "Oral Health ",
    advisoryPlace: " Professor - Maulana Azad Dental College ",
    advisoryDescription:
      "Dr. Gyanendra Kumar is an esteemed dental professional who holds the position of Professor in the Department of Paediatric and Preventive Dentistry at the Maulana Azad Institute of Dental Sciences in New Delhi, India. With a profound passion for his field, Dr. Kumar has dedicated his career to the advancement of paediatric dentistry and has made significant contributions in this specialized area of dental care.    ",
  },
  {
    advisoryImage: Image17,
    advisoryName: "Mr. Dheeraj Agrawal",
    advisoryPosition: "Information Technology ",
    advisoryPlace: " Director- Web tycoons ",
    advisoryDescription:
      "Dheeraj is a dynamic and accomplished individual who has made a significant impact in the field of Digital Marketing. With an MBA from Symbiosis in 2005, he laid the foundation for his successful career and has been an influential figure ever since. In 2010, he took a leap of faith , Web Tycoons, which has quickly gained recognition as a renowned brand in the Indian market, particularly in Delhi. Web Tycoons specializes in providing Website and Online Marketing services to a wide range of clients.    ",
  },
  {
    advisoryImage: Image18,
    advisoryName: "Mr. Nikhil Pant",
    advisoryPosition: "Honorary Advisor",
    advisoryPlace: "Honorary Advisor",
    advisoryDescription:
      "Mr. Nikhil, a remarkable embodiment of the diligent and dynamic young generation of our beloved nation, stands as an exemplary academician of the modern era. With his innovative ideas and progressive approaches, he hopes to revolutionize the education system, leaving an indelible mark. His visionary concepts on design thinking, nurturing diverse perspectives, and fostering critical thinking are being successfully integrated into numerous educational institutions.",
  },
  {
    advisoryImage: Image19,
    advisoryName: "Mr. Pradeep Rathor",
    advisoryPosition: "Honorary Advisor",
    advisoryPlace: "CEO & Managing Partner, AllTerra India",
    advisoryDescription:
      "A first generation Entrepreneur, Leader & Mentor,accomplished professional with over 21 years of experience in Leading Management & strategy, Finance & Operations. Successfully Running & Managing IT& Geospatial Company as a CEO and MD of AllTerra India. Alletrra India is Technology company representing in India , Irrigation, Urban utilities etc. A Chartered Accountant (CA) and MBA by Qualification and having  experience working in past with Big Four ( Deloitte) and MNC's. Having International exposure and well-Travelled to USA, Europe and South Asian Countries.",
  },
];
const AdvisoryWrapper = (props: Props) => {
  return (
    <div>
      <Advisory advisoryDetail={advisoryData} />
    </div>
  );
};

export default AdvisoryWrapper;
