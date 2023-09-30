import React from "react";
import ATMEventMediaSynopsis from "../../component/atoms/ATMEventMediaSynopsis/ATMEventMediaSynopsis";
import ImageGallery from "../../component/ui/ImageGallery";
import image01 from "./../../assests/images/socialProgram/glimpse/1.jpg";
import image02 from "./../../assests/images/socialProgram/glimpse/2.jpg";
import image03 from "./../../assests/images/socialProgram/glimpse/3.jpg";
import image04 from "./../../assests/images/socialProgram/glimpse/4.jpg";
import image05 from "./../../assests/images/socialProgram/glimpse/5.jpg";
import image06 from "./../../assests/images/socialProgram/glimpse/6.jpg";
import image07 from "./../../assests/images/socialProgram/glimpse/7.jpg";
import image08 from "./../../assests/images/socialProgram/glimpse/8.jpg";
import image09 from "./../../assests/images/socialProgram/glimpse/9.jpg";
import image10 from "./../../assests/images/socialProgram/glimpse/10.jpg";
import programsKeyImage from "./../../assests/images/socialProgram/social_internship_key_interventions (1).svg";

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

const InternshipProgram = () => {
    return (
        <div>
            <div>
                <ATMEventMediaSynopsis imagePosition="left">
                    <div className="p-6">
                        <h1 className="font-medium text-[#6c757d]">DESCRIPTION</h1>
                        <div className="text-[#6c757d]">
                            The Directorate of Education has signed a Memorandum of
                            Understanding with Ladli foundation trust, a National award
                            winning organization in Special Consultative status with the UN,
                            for facilitating effective strategies to implement and monitor
                            suitable interventions to overcome malnutrition.
                        </div>
                        <div className="text-[#6c757d]">
                            An exclusive Action Research Based Social Internship program has
                            been framed by Ladli Foundation for the Students of 11 th standard
                            studying in Government schools, Government-aided schools,private
                            schools of Delhi, on voluntary basis All participating Students
                            are allotted some tasks, to do in phases. These tasks are centered
                            around the topic nutrition, importance of nutrition in humans,
                            malnutrition, and volunteering. These tasks are mainly focussed to
                            develop leadership skills, time-management skills, administrative
                            skills, confidence, along with giving them wisdom on the
                            importance of nutrition and healthy living. These tasks also aim
                            to digitally equip the students which is the need of the hour, in
                            the current technology driven world. This approach provides
                            students with a practical and theoretical understanding of the
                            topic, promoting experiential learning.
                        </div>
                    </div>
                </ATMEventMediaSynopsis>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center">
                    <div className="font-bold text-[35px] inline-block text-center bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent">
                        KEY INTERVENTIONS
                    </div>
                </div>
                <img src={programsKeyImage} alt="" />
            </div>
            <div>
                <div className="flex flex-col items-center justify-center">
                    <div className="font-bold text-[35px] inline-block text-center bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent">
                        OUR IMPACT
                    </div>
                </div>
                <ul className="list-disc list-outside text-[#6c757d] text-left">
                    <li>
                        More than 760 schools of Delhi have participated in this action
                        research based social internship program
                    </li>
                    <li>
                        More than 3700 students are a part of this program. In terms of
                        impact, all these 3700+ participating students, their fellow mates,
                        and their families have been positively impacted by this internship
                    </li>
                    <li>
                        Everybody has been sensitized on the importance of nutrition, issue
                        of malnutrition, and effects of malnutrition on the human
                        body.(SENSITIZED ON MALNUTRITION)
                    </li>
                    <li>
                        By assigning tasks like writing articles on malnutrition and
                        creating posters, students are made aware of the impact of
                        malnutrition and how it can be addressed through simple dietary
                        interventions. (AWARENESS ON MALNUTRITION)
                    </li>
                    <li>
                        The tasks assigned to students, such as conducting a workshop on
                        malnutrition in their school, provide them with an opportunity to
                        develop skills like leadership, administration, communication, and
                        confidence.(INSTILLED LEADERSHIP QUALITIES)
                    </li>
                    <li>
                        Tasks like creating and posting slogans and posters on LinkedIn and
                        Twitter accounts emphasize the need for students to be
                        technologically updated in this fast-growing digital world.(EXPANDED
                        THE CREATIVE FIELD OF STUDENTS)
                    </li>
                    <li>
                        By carrying out a volunteer activity of their choice, students are
                        encouraged to reflect on the social challenges in their community
                        and take the first step towards addressing them.
                    </li>
                    <li>
                        A perfect amalgamation of theoretical and practical works in this
                        social internship aims to build up their knowledge, personality and
                        various other skills as well as defeat malnutrition. (HOLISTIC
                        GROWTH OF THE INDIVIDUAL)
                    </li>

                </ul>
            </div>
            <div>
                <ImageGallery imageUrls={glimpses} />
            </div>
        </div>
    );
};

export default InternshipProgram;
