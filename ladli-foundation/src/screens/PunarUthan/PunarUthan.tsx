import React from "react";
import Header from "../../component/ui/Header";
import image01 from "./../../assests/images/Csr/PunarUthan/Glimpse/punarUthan01.jpg";
import image02 from "./../../assests/images/Csr/PunarUthan/Glimpse/punarUthan02.jpg";
import image03 from "./../../assests/images/Csr/PunarUthan/Glimpse/punarUthan03.jpg";
import image04 from "./../../assests/images/Csr/PunarUthan/Glimpse/punarUthan04.jpg";
import image05 from "./../../assests/images/Csr/PunarUthan/Glimpse/punarUthan05.jpg";
import image06 from "./../../assests/images/Csr/PunarUthan/Glimpse/punarUthan06.jpg";
import image07 from "./../../assests/images/Csr/PunarUthan/Glimpse/punarUthan07.jpg";
import image08 from "./../../assests/images/Csr/PunarUthan/Glimpse/punarUthan08.jpg";
import image09 from "./../../assests/images/Csr/PunarUthan/Glimpse/punarUthan09.jpg";
import image10 from "./../../assests/images/Csr/PunarUthan/Glimpse/punarUthan10.jpg";
import punarUthanKeyImage from "./../../assests/images/Csr/punar_uthaan_key_interventions.png";
import punarUthanImage01 from "./../../assests/images/Csr/1.jpg";
import punarUthanImage02 from "./../../assests/images/Csr/2.jpg";
import punarUthanImage03 from "./../../assests/images/Csr/3.jpg";
import ATMEventMediaSynopsis from "../../component/atoms/ATMEventMediaSynopsis/ATMEventMediaSynopsis";
import ImageGallery from "../../component/ui/ImageGallery";
import Footer from "../../component/ui/Footer";
type Props = {};
const glimpses = [
  image01,
  image02,
  image03,
  image04,
  image05,
  image06,
  image07,
  image08,
  image09,
  image10,
];
const PunarUthan = (props: Props) => {
  return (
    <div>
      <div>
        <Header title="PUNAR UTHAAN" />
      </div>
      <div className="p-6 sm:px-20 md:px-24 lg:px-32">
        <div>
          <ATMEventMediaSynopsis
            imagePosition="left"
            founderImage1={punarUthanImage01}
            founderImage2={punarUthanImage02}
            founderImage3={punarUthanImage03}
          >
            <div className="p-6 ">
              <h1 className="font-medium text-[#6c757d]">DESCRIPTION</h1>
              <div className="text-[#6c757d]">
                The Ladli Foundation Trust has always worked for the upliftment
                of the underprivileged and marginalized populations; we identify
                these communities and individuals and make action-researched
                programs that would be a stepping stone in developing an
                individual. With the belief in "No one should be left behind,"
                we have been coming up with initiatives for the marginalized and
                most vulnerable populations and getting stakeholders, concerned
                authorities involved with such initiatives so that they also
                have knowledge about the situation at hand, which requires their
                attention. Many women are left behind after the death of their
                husbands, who were the sole breadwinner of the family. Widows in
                India have constantly been subjected to social injustices,
                biases and face human rights violations
              </div>
              <div className="text-[#6c757d]">
                At Ladli, we have come up with this proposed Project to uplift
                these vulnerable women by providing them with five years of free
                ration and development of their capacity building, skill
                development through various sessions and awareness programs
                which will also include sessions on financial literacy, digital
                learning, WASH, MHM, and job placement drives.
              </div>
            </div>
          </ATMEventMediaSynopsis>
        </div>

        <div className="mt-[90px] md:mt-0">
          <div className="flex flex-col items-center justify-center md:py-10 pt-4">
            <div className="font-bold md:text-[35px] text-[26px] inline-block text-center bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent">
              KEY INTERVENTIONS
            </div>
          </div >
          <div className="md:px-14 px-2">
            <img src={punarUthanKeyImage} alt="" />
          </div>
      
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="font-bold md:text-[35px] text-[26px] inline-block text-center bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent">
            OUR IMPACT
          </div>
          <div className="text-[24px] font-medium py-4">150 Families</div>
          <p className="text-[18px] text-center family-sarif">
            150 families were provided advanced computer skill training and
            employment along with training on sensitive issues like women's
            legal rights, menstrual hygiene management, financial literacy, etc.
            to the widows and young girls of the families who have lost their
            sole bread earners during the Covid-19 pandemic in Delhi along with
            employment through an exclusive job fair.
          </p>
        </div>
        <div>
          <ImageGallery imageUrls={glimpses} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PunarUthan;
