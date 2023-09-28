import React from "react";
import outreach01 from './../../../assests/images/ourExpertise/outreach-1.jpg'
import outreach02 from './../../../assests/images/ourExpertise/outreach-2.jpg'
import outreach03 from './../../../assests/images/ourExpertise/outreach-3.jpg'
type Props = {
    title?: string;
    children?: React.ReactNode;
    extraClass?: string;
};

const ATMImageOverflow = ({ extraClass }: Props) => {
    return (
        <div>
            <div className="content-banner content-banner--left">
                <h2>Mission</h2>
                <p className="paragraph">
                    At Ladli Foundation, our mission is to catalyze impactful and
                    innovative social initiatives that provide equitable healthcare,
                    education, and life skills to empower vulnerable women. With an
                    unwavering commitment to driving change by building ld a safe,
                    gender-neutral, and inclusive society.
                </p>
                <img src={outreach01} alt="" className="content-banner--left__image content-banner--left__image--1" />
                <img src={outreach02} alt="" className="content-banner--left__image content-banner--left__image--2" />
                <img src={outreach03} alt="" className="content-banner--left__image content-banner--left__image--3" />
            </div>



            <div>
                <h1 className={`capitalize${extraClass}`}>Misson</h1>
            </div>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default ATMImageOverflow;
