import React from "react";
import founderImage01 from "./../../assests/images/founderImages/founderImage01.jpg";
import founderImage02 from "./../../assests/images/founderImages/founderImage02.jpg";
import founderImage03 from "./../../assests/images/founderImages/founderImage03.jpg";

const Images = () => {
  return (
    <div className="">
      <div className="relative ">
        <img src={founderImage03} alt="" className="absolute w-[300px]" />
        <img src={founderImage02} alt="" className="absolute right-0 top-[13%] w-[300px]" />
        <div className="  h-screen flex items-center justify-center ">
          <img src={founderImage01} alt="" className="absolute top-[20%] w-[300px]" />
        </div>

      </div>
    </div>
  );
};

export default Images;
