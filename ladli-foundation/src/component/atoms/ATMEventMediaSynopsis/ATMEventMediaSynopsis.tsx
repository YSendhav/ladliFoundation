import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    title?: string;
    imagePosition: "left" | "right";
    founderImage1: string;
    founderImage2: string;
    founderImage3: string;
}

const ATMEventMediaSynopsis = ({
    children,
    title,
    imagePosition,
    founderImage1,
    founderImage2,
    founderImage3,
}: Props) => {
    return (
        <div className="">
            {title && (
                <div className="flex justify-center">
                    <h1 className=" 2xl:py-10 xl:py-8 lg:py-8 md:py-8 sm:py-6 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl uppercase font-bold inline-block bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent ">
                        {title}
                    </h1>
                </div>
            )}
            {imagePosition === "left" ? (
                <div>
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-0`}>
                        <div className="font-lato font-normal leading-7 text-gray-700 text-justify">
                            {" "}
                            {children}
                        </div>
                        <div
                            className={`relative flex-col justify-center items-center lg:ml-10 `}
                        >
                            <img
                                src={founderImage1}
                                alt="#"
                                className="absolute w-full max-w-[130px] hover:p-1 shadow-lg hover:border-[5px] hover:border-[#3BBFDC]
                                hover:z-40 cursor-pointer  transition duration-300
                                sm:max-w-[245px] hover:scale-110 ease-linear 
                                md:hover:p-3  md:max-w-[240px] md:hover:border-[10px]  md:hover:border-[#3BBFDC]
                                 lg:max-w-[330px] "
                            />

                            <img
                                src={founderImage2}
                                alt="#"
                                className="absolute right-0  top-0 w-full max-w-[130px] hover:p-1 shadow-lg hover:border-[5px] 
                                    hover:border-[#3BBFDC]
                                 z-10 hover:z-30 cursor-pointer hover:scale-110 transition duration-300  ease-linear 
                                sm:max-w-[245px] md:max-w-[240px] md:hover:p-3 md:top-[40px] md:left-[160px] md:hover:border-[12px]
                                lg:hover:p-4  lg:max-w-[330px] lg:left-[200px] "
                            />

                            <img
                                src={founderImage3}
                                alt="#"
                                className="absolute left-[100px] top-[10px] w-full max-w-[130px] hover:p-1 shadow-lg hover:border-[5px]
                                     hover:border-[#3BBFDC] 
                                z-20 cursor-pointer  hover:scale-110 transition duration-300  ease-linear
                                sm:max-w-[245px] sm:top-[40px] sm:left-[200px] sm:right-0 sm:top-0 
                                md:max-w-[300px]  md:hover:border-[12px] md:hover:border-[#3BBFDC] md:hover:p-3 md:top-[80px] md:left-[50px] 
                                lg:top-[100px] lg:max-w-[330px] "
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className={`grid grid-cols-1 md:grid-cols-2 `}>
                        <div className={`relative flex-col justify-center items-center`}>
                            <img
                                src={founderImage1}
                                alt="#"
                                className="absolute max-w-[150px] 
                                    shadow-lg w-full hover:z-40 sm:max-w-[245px] md:max-w-[350px] 
                                    cursor-pointer hover:scale-110 transition duration-500 cursor-pointer
                                     object-cover hover:border-[12px] hover:border-[#3BBFDC] p-4"
                            />
                            <img
                                src={founderImage2}
                                alt="#"
                                className="absolute  shadow-lg top-[40px] hover:z-30 cursor-pointer 
                                     hover:scale-110 transition duration-500 cursor-pointer object-cover hover:border-[12px] 
                                     hover:border-[#3BBFDC] p-4 max-w-[150px] left-[121px] top-[20px] z-10 w-full left-1/4 sm:max-w-[245px] 
                                     md:max-w-[350px] md:top-[30px] md:left-[250px]"
                            />
                            <img
                                src={founderImage3}
                                alt="#"
                                className="absolute max-w-[150px] top-[60px] left-[50px] 
                                    w-full sm:max-w-[245px] md:max-w-[350px]  md:top-[100px] md:left-[50px] z-20 sm:top-0  
                                    sm:right-0 cursor-pointer shadow-lg hover:scale-110 transition duration-500 cursor-pointer 
                                    object-cover hover:border-[12px] hover:border-[#3BBFDC] p-4"
                            />
                        </div>
                        <div className="font-lato font-normal leading-7 text-gray-700 text-justify">
                            {" "}
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ATMEventMediaSynopsis;
