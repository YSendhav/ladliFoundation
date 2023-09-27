import React from "react";

type Props = {
    children1: React.ReactNode;
    children2: React.ReactNode;
    extraClass1?: string;
    extraClass2?: string;
};

const ATMFlippableCard = ({
    children1,
    children2,
    extraClass1,
    extraClass2,
}: Props) => {
    return (
        <>
            <div className="relative w-[330px] h-[340px]  ">
                <div className="absolute w-full h-full transform-style-preserve-3d  transition-all duration-700 ease rotate-y">
                    <div
                        className={`w-full h-full  absolute backface-visibility  text-white ${extraClass1}`}
                    >
                        {children1}{" "}
                    </div>
                    <div
                        className={`w-full shadow-lg h-[383px] absolute backface-visibility overflow-auto rotate-y-scal ${extraClass2}`}
                    >
                        {children2}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ATMFlippableCard;
