import React from "react";
import Header from "../../component/ui/Header";
import ATMEventMediaSynopsis from "../../component/atoms/ATMEventMediaSynopsis/ATMEventMediaSynopsis";
import ATMEventSummery from "../../component/atoms/ATMEventSummery/ATMEventSummery";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import founderImage from "./../../assests/images/homePage/founder.png";
import Footer from "../../component/ui/Footer";

type Props = {
    image: string;
};
type imageProps = {
    image01: string;
    image02: string;
    image03: string;
    image04: string;
    image05: string;
    image06: string;
    image07: string;
    image08: string;
    image09: string;
    image10: string;
};
type founderResponse = {
    founderData: Props[];
    founderDataImage: imageProps[];
};
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4, // Show 4 slides on super large desktop
        slidesToSlide: 5, // Move 4 slides at a time
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4, // Show 4 slides on desktop.
        slidesToSlide: 5, // Move 4 slides at a time
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2, // Show 2 slides on tablet
        slidesToSlide: 2, // Move 2 slides at a time
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1, // Show 1 slide on mobile
        slidesToSlide: 1, // Move 1 slide at a time
        itemClass: "p-[5px]",
    },
};
const Founder = ({ founderData, founderDataImage }: founderResponse) => {
    return (
        <div className="">
            <div>
                <Header title="OUR FOUNDER" />
            </div>

            <div className="p-6 sm:px-20 md:px-16 lg:px-32">
                <div>
                    <Carousel
                        arrows={false}
                        responsive={responsive}
                        autoPlaySpeed={1000}
                        autoPlay={true}
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        infinite={true}
                        partialVisible={false}
                        rewindWithAnimation={true}
                    >
                        {founderData.map((imageUrl, index) => {
                            return (
                                <div className=" p-4" key={index}>
                                    <img
                                        src={imageUrl.image}
                                        alt="movie"
                                        className="border-[8px] p-4 border-[#750a42] rounded-md"
                                    />
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
                <div>
                    {founderDataImage?.map((founder) => {
                        return (
                            <>
                                <div className="flex flex-col gap-10 pt-6">
                                    <div>
                                        {" "}
                                        <ATMEventMediaSynopsis
                                            founderImage1={founder.image02}
                                            founderImage2={founder.image03}
                                            founderImage3={founder.image01}
                                            imagePosition="left"
                                        >
                                            <div className="text-[#7F7F7F]">
                                                Devendra Kumar, a young self-made social reformer, was
                                                born in a high crime-prone slum where his parents
                                                abandoned him at the age of 2 years with his 3-dayinfant
                                                sister. Grown amidst poverty, at the age of 8, he
                                                started working as a child laborer. During his
                                                balloon-selling, he was snatched & brutally beaten by a
                                                group of delinquents & drug addicts. Many mishaps &
                                                miseries at a very young age coerced him to find a safe
                                                space for him which encouraged him to join a
                                                volunteering group with Indian Red Cross & St. John
                                                Ambulance.
                                                <span className="font-medium">
                                                    In 2010 his struggle to save his sister from child
                                                    marriage and dowry by surviving amidst vulnerability
                                                    motivated him to work for most vulnerable population
                                                    for which he established the “Ladli Foundation.”s
                                                </span>
                                            </div>
                                        </ATMEventMediaSynopsis>
                                    </div>
                                    <div className="pt-20 md:pt-10">
                                        <ATMEventSummery
                                            image1={founder.image04}
                                            image2={founder.image05}
                                            imagePosition="right"
                                        >
                                            <div>
                                                <div className=" text-[#7F7F7F] pt-1 ">
                                                    He has been honoured with two national award by the
                                                    Government of India and has been praised by four
                                                    successive Presidents of India late Sh. APJ Abdul
                                                    Kalam, Late. Sh. Pranab Mukharjee, Sh. Ram Nath Kovind
                                                    & Smt. Draupadi Murmu, respectively.
                                                </div>
                                                <div className="text-[#7F7F7F]  font-medium py-6">
                                                    Presently he is working to address most pressing
                                                    social issues for the advancement of Hon’ble Prime
                                                    Minister’ Initiatives for sustainable development in
                                                    India by managing the force of over 1 Lac Youth
                                                    Interns & Volunteers through his innovative Social
                                                    Internship Program.
                                                </div>
                                                <div className="text-[#7F7F7F]  font-medium">
                                                    Under his visionary leadership and successful
                                                    community engagement, Devendra has made a profound
                                                    impact, positively affecting over 2.5 million direct
                                                    beneficiaries. Notably, his exceptional contributions
                                                    encompass providing digital education access to more
                                                    than 157,000 marginalized students, resulting in a
                                                    significant impact valued at approximately INR 600
                                                    Crore (equivalent to 75 million USD). Remarkably, all
                                                    these achievements have been realized independently,
                                                    without relying on external financial assistance or
                                                    grants. Additionally, as the Exclusive NGO Partner of
                                                    the Government of Delhi, the organization is actively
                                                    implementing its innovative solutions to combat
                                                    malnutrition among 800,000 marginalized students,
                                                    forging a sustainable path towards positive change.
                                                </div>
                                            </div>
                                        </ATMEventSummery>
                                    </div>
                                    <div>
                                        <ATMEventMediaSynopsis
                                            founderImage1={founder.image06}
                                            founderImage2={founder.image07}
                                            founderImage3={founder.image08}
                                            imagePosition="left"
                                        >
                                            <div className="text-[#7F7F7F]">
                                                <div>
                                                    In 2019, His contribution to the welfare of the lower
                                                    section of society was commended by the Union Ministry
                                                    of Social Justice, Government of India and{" "}
                                                    <span className="font-medium">
                                                        nominated him for the prestigious Padma Shri Award
                                                        2020 (4th Highest Civilian Award of India)
                                                    </span>
                                                    . His grassroots-level initiatives assisted in the
                                                    liberation of thousands of women and young girls from
                                                    sexual abuse and exploitation and subsequently
                                                    empowered them to become self-reliant, for which he
                                                    was titled as “True Hero” by Mr. Amitabh Bachchan
                                                </div>
                                                <div className="py-4">
                                                    In 2017, His most significant gender sensitization
                                                    initiative for gathering twenty thousand of male
                                                    populations in Run for Laadli Half Marathon at JLN
                                                    Stadium, Delhi to uphold the idea of Gender Equality
                                                    was witnessed and deeply praised by the union Home
                                                    minister, Social Justice Minister & Numbers of
                                                    International Diplomats and Notable Dignitaries &
                                                    Govt. Officials.
                                                </div>
                                            </div>
                                        </ATMEventMediaSynopsis>
                                    </div>
                                    <div className="pt-20 md:pt-10">
                                        <ATMEventSummery
                                            image1={founder.image09}
                                            image2={founder.image10}
                                            imagePosition="right"
                                        >
                                            <div>
                                                <div className="  text-[#7F7F7F] pt-1 ">
                                                    His 23 years continuous actions and innovative
                                                    initiatives for empowering the oppressed and
                                                    disadvantaged has also drawn attention on a global
                                                    scale at the United Nations, where His suggestions
                                                    have been published twice in high-level political
                                                    forums of the United Nations. Also In the Preliminary
                                                    session of the 65th Commission on the Status of Women
                                                    at the United Nations on March 15, 2021, The UN
                                                    Secretary-General, Mr. António Guterres, praised his
                                                    work and well acknowledged his influential advocacy
                                                    for prioritizing women's health and effective efforts
                                                    to prevent child marriage in developing countries
                                                </div>
                                                <div className="text-[#7F7F7F]  py-6">
                                                    Devendra is an emerging global leader, notable speaker
                                                    and policy analyst, boasts extensive expertise in
                                                    international relations and development sector. He is
                                                    also the founder of the South and East Asia Foundation
                                                    in India and Ladli Foundation USA, a 501(c)(3)
                                                    nonprofit organization in the United States, serving
                                                    as an international think tank has successfully
                                                    orchestrated prestigious conferences like INDIA &
                                                    BRICS, INDO-US SUMMIT, INDO-CHINA SUMMIT, CLIMATE
                                                    CONCLAVE, and NATIONAL DEMOCRACY SUMMIT, uniting
                                                    global leaders, diplomats, and policymakers to address
                                                    India's challenges. Beyond diplomacy, Devendra is
                                                    committed to gender- sensitive societal reform,
                                                    fostering a network of change-makers dedicated to
                                                    advancing gender equality.
                                                </div>
                                                <div className="text-[#7F7F7F]  font-medium">
                                                    His words of wisdom ,"Society is like a Canvas, It's
                                                    you who need to paint it beautifully" serves as the
                                                    driving force behind his transformative leadership
                                                    initiatives aimed at creating a more inclusive world.
                                                </div>
                                            </div>
                                        </ATMEventSummery>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>

            <div className="section-founder">
                <div className="grid grid-cols-2 place-items-center">
                    <div className="text-white px-4">
                        <h2 className="md:text-[35px] sm:[28px] lg:[40px]  font-medium ">
                            "A society is like a canvas, <br />
                            It's you who needs to paint it beautifully."
                        </h2>
                        <p className="">- Devendra Kumar</p>
                    </div>
                    <div>
                        <img src={founderImage} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Founder;
