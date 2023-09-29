import React from "react";
import Header from "../../component/ui/Header";
import ATMEventMediaSynopsis from "../../component/atoms/ATMEventMediaSynopsis/ATMEventMediaSynopsis";
import ATMEventSummery from "../../component/atoms/ATMEventSummery/ATMEventSummery";


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
}
type founderResponse = {
    founderData: Props[];
    founderDataImage: imageProps[]
};

const Founder = ({ founderData, founderDataImage }: founderResponse) => {
    return (
        <div className="">
            <div>
                {/* <Header title="OUR FOUNDER" /> */}
            </div>
            {/* <div className="flex gap-4 p-10">
                {founderData?.map((founder) => {
                    return (
                        <div className="">
                            <img
                                className="border-[10px] p-4 border-[#750a42]"
                                src={founder.image}
                                alt="#"
                            />
                        </div>
                    );
                })}
            </div> */}
            {founderDataImage?.map((founder) => {
                return (
                    <>
                        <div className="flex flex-col md:gap-10 gap-4">
                           <div> <ATMEventMediaSynopsis
                                founderImage1={founder.image02}
                                founderImage2={founder.image03}
                                founderImage3={founder.image01}
                                imagePosition="left"
                            >
                                <div>
                                    Devendra Kumar, a young self-made social reformer, was born in a
                                    high crime-prone slum where his parents abandoned him at the age of
                                    2 years with his 3-dayinfant sister. Grown amidst poverty, at the
                                    age of 8, he started working as a child laborer. During his
                                    balloon-selling, he was snatched & brutally beaten by a group of
                                    delinquents & drug addicts. Many mishaps & miseries at a very young
                                    age coerced him to find a safe space for him which encouraged him to
                                    join a volunteering group with Indian Red Cross & St. John
                                    Ambulance, In 2010 his struggle to save his sister from child
                                    marriage and dowry by surviving amidst vulnerability motivated him
                                    to work for most vulnerable population for which he established the
                                    “Ladli Foundation.”s
                                </div>
                            </ATMEventMediaSynopsis></div>
                            <div className="">
                                <ATMEventSummery image1={founder.image04} image2={founder.image05} imagePosition="right">
                                    <div>
                                        <div className=" text-[16px] text-gray-500 pt-1 ">
                                            He has been honoured with two national award by the Government
                                            of India and has been praised by four successive Presidents of
                                            India late Sh. APJ Abdul Kalam, Late. Sh. Pranab Mukharjee, Sh.
                                            Ram Nath Kovind & Smt. Draupadi Murmu, respectively.
                                        </div>
                                        <div className="text-gray-700 text-[16px] font-medium py-6">
                                            Presently he is working to address most pressing social issues
                                            for the advancement of Hon’ble Prime Minister’ Initiatives for
                                            sustainable development in India by managing the force of over 1
                                            Lac Youth Interns & Volunteers through his innovative Social
                                            Internship Program.
                                        </div>
                                        <div className="text-gray-700 text-[16px] font-medium">
                                            Under his visionary leadership and successful community
                                            engagement, Devendra has made a profound impact, positively
                                            affecting over 2.5 million direct beneficiaries. Notably, his
                                            exceptional contributions encompass providing digital education
                                            access to more than 157,000 marginalized students, resulting in
                                            a significant impact valued at approximately INR 600 Crore
                                            (equivalent to 75 million USD). Remarkably, all these
                                            achievements have been realized independently, without relying
                                            on external financial assistance or grants. Additionally, as the
                                            Exclusive NGO Partner of the Government of Delhi, the
                                            organization is actively implementing its innovative solutions
                                            to combat malnutrition among 800,000 marginalized students,
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
                                            In 2019, His contribution to the welfare of the lower section of
                                            society was commended by the Union Ministry of Social Justice,
                                            Government of India and nominated him for the prestigious Padma
                                            Shri Award 2020 (4th Highest Civilian Award of India). His
                                            grassroots-level initiatives assisted in the liberation of
                                            thousands of women and young girls from sexual abuse and
                                            exploitation and subsequently empowered them to become
                                            self-reliant, for which he was titled as “True Hero” by Mr.
                                            Amitabh Bachchan
                                        </div>
                                        <div className="py-4">
                                            In 2017, His most significant gender sensitization initiative
                                            for gathering twenty thousand of male populations in Run for
                                            Laadli Half Marathon at JLN Stadium, Delhi to uphold the idea of
                                            Gender Equality was witnessed and deeply praised by the union
                                            Home minister, Social Justice Minister & Numbers of
                                            International Diplomats and Notable Dignitaries & Govt.
                                            Officials.
                                        </div>
                                    </div>
                                </ATMEventMediaSynopsis>
                            </div>
                            <div className="py-10">
                                <ATMEventSummery image1={founder.image09} image2={founder.image10} imagePosition="right">
                                    <div>
                                        <div className=" text-[16px] text-gray-500 pt-1 ">
                                            He has been honoured with two national award by the Government
                                            of India and has been praised by four successive Presidents of
                                            India late Sh. APJ Abdul Kalam, Late. Sh. Pranab Mukharjee, Sh.
                                            Ram Nath Kovind & Smt. Draupadi Murmu, respectively.
                                        </div>
                                        <div className="text-gray-700 text-[16px] font-medium py-6">
                                            Presently he is working to address most pressing social issues
                                            for the advancement of Hon’ble Prime Minister’ Initiatives for
                                            sustainable development in India by managing the force of over 1
                                            Lac Youth Interns & Volunteers through his innovative Social
                                            Internship Program.
                                        </div>
                                        <div className="text-gray-700 text-[16px] font-medium">
                                            Under his visionary leadership and successful community
                                            engagement, Devendra has made a profound impact, positively
                                            affecting over 2.5 million direct beneficiaries. Notably, his
                                            exceptional contributions encompass providing digital education
                                            access to more than 157,000 marginalized students, resulting in
                                            a significant impact valued at approximately INR 600 Crore
                                            (equivalent to 75 million USD). Remarkably, all these
                                            achievements have been realized independently, without relying
                                            on external financial assistance or grants. Additionally, as the
                                            Exclusive NGO Partner of the Government of Delhi, the
                                            organization is actively implementing its innovative solutions
                                            to combat malnutrition among 800,000 marginalized students,
                                            forging a sustainable path towards positive change.
                                        </div>
                                    </div>
                                </ATMEventSummery>
                            </div>
                        </div>
                    </>
                )
            })}
            {/* <div>
                <ATMEventMediaSynopsis
                    founderImage1={foundeImage3}
                    founderImage2={foundeImage2}
                    founderImage3={foundeImage1}
                    imagePosition="left"
                >
                    <div>
                        Devendra Kumar, a young self-made social reformer, was born in a
                        high crime-prone slum where his parents abandoned him at the age of
                        2 years with his 3-dayinfant sister. Grown amidst poverty, at the
                        age of 8, he started working as a child laborer. During his
                        balloon-selling, he was snatched & brutally beaten by a group of
                        delinquents & drug addicts. Many mishaps & miseries at a very young
                        age coerced him to find a safe space for him which encouraged him to
                        join a volunteering group with Indian Red Cross & St. John
                        Ambulance, In 2010 his struggle to save his sister from child
                        marriage and dowry by surviving amidst vulnerability motivated him
                        to work for most vulnerable population for which he established the
                        “Ladli Foundation.”s
                    </div>
                </ATMEventMediaSynopsis>
                <div className="py-[100px]">
                    <ATMEventSummery image1={foundeImage4} image2={foundeImage5} imagePosition="right">
                        <div>
                            <div className=" text-[16px] text-gray-500 pt-1 ">
                                He has been honoured with two national award by the Government
                                of India and has been praised by four successive Presidents of
                                India late Sh. APJ Abdul Kalam, Late. Sh. Pranab Mukharjee, Sh.
                                Ram Nath Kovind & Smt. Draupadi Murmu, respectively.
                            </div>
                            <div className="text-gray-700 text-[16px] font-medium py-6">
                                Presently he is working to address most pressing social issues
                                for the advancement of Hon’ble Prime Minister’ Initiatives for
                                sustainable development in India by managing the force of over 1
                                Lac Youth Interns & Volunteers through his innovative Social
                                Internship Program.
                            </div>
                            <div className="text-gray-700 text-[16px] font-medium">
                                Under his visionary leadership and successful community
                                engagement, Devendra has made a profound impact, positively
                                affecting over 2.5 million direct beneficiaries. Notably, his
                                exceptional contributions encompass providing digital education
                                access to more than 157,000 marginalized students, resulting in
                                a significant impact valued at approximately INR 600 Crore
                                (equivalent to 75 million USD). Remarkably, all these
                                achievements have been realized independently, without relying
                                on external financial assistance or grants. Additionally, as the
                                Exclusive NGO Partner of the Government of Delhi, the
                                organization is actively implementing its innovative solutions
                                to combat malnutrition among 800,000 marginalized students,
                                forging a sustainable path towards positive change.
                            </div>
                        </div>
                    </ATMEventSummery>
                </div>
                <div>
                    <ATMEventMediaSynopsis
                        founderImage1={foundeImage6}
                        founderImage2={foundeImage7}
                        founderImage3={foundeImage8}
                        imagePosition="left"
                    >
                        <div className="text-[#7F7F7F]">
                            <div>
                                In 2019, His contribution to the welfare of the lower section of
                                society was commended by the Union Ministry of Social Justice,
                                Government of India and nominated him for the prestigious Padma
                                Shri Award 2020 (4th Highest Civilian Award of India). His
                                grassroots-level initiatives assisted in the liberation of
                                thousands of women and young girls from sexual abuse and
                                exploitation and subsequently empowered them to become
                                self-reliant, for which he was titled as “True Hero” by Mr.
                                Amitabh Bachchan
                            </div>
                            <div className="py-4">
                                In 2017, His most significant gender sensitization initiative
                                for gathering twenty thousand of male populations in Run for
                                Laadli Half Marathon at JLN Stadium, Delhi to uphold the idea of
                                Gender Equality was witnessed and deeply praised by the union
                                Home minister, Social Justice Minister & Numbers of
                                International Diplomats and Notable Dignitaries & Govt.
                                Officials.
                            </div>
                        </div>
                    </ATMEventMediaSynopsis>
                </div>
                <div className="py-[100px]">
                    <ATMEventSummery image1={foundeImage9} image2={foundeImage10} imagePosition="right">
                        <div>
                            <div className=" text-[16px] text-gray-500 pt-1 ">
                                He has been honoured with two national award by the Government
                                of India and has been praised by four successive Presidents of
                                India late Sh. APJ Abdul Kalam, Late. Sh. Pranab Mukharjee, Sh.
                                Ram Nath Kovind & Smt. Draupadi Murmu, respectively.
                            </div>
                            <div className="text-gray-700 text-[16px] font-medium py-6">
                                Presently he is working to address most pressing social issues
                                for the advancement of Hon’ble Prime Minister’ Initiatives for
                                sustainable development in India by managing the force of over 1
                                Lac Youth Interns & Volunteers through his innovative Social
                                Internship Program.
                            </div>
                            <div className="text-gray-700 text-[16px] font-medium">
                                Under his visionary leadership and successful community
                                engagement, Devendra has made a profound impact, positively
                                affecting over 2.5 million direct beneficiaries. Notably, his
                                exceptional contributions encompass providing digital education
                                access to more than 157,000 marginalized students, resulting in
                                a significant impact valued at approximately INR 600 Crore
                                (equivalent to 75 million USD). Remarkably, all these
                                achievements have been realized independently, without relying
                                on external financial assistance or grants. Additionally, as the
                                Exclusive NGO Partner of the Government of Delhi, the
                                organization is actively implementing its innovative solutions
                                to combat malnutrition among 800,000 marginalized students,
                                forging a sustainable path towards positive change.
                            </div>
                        </div>
                    </ATMEventSummery>
                </div>
            </div> */}
        </div>
    );
};

export default Founder;
