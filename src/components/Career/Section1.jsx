import React from "react";
import banner from "../../assests/acros-media/Group-114.png";

const Section1 = () => {
  return (
    <div className="w-screen h-fit p-5 flex flex-col items-center justify-center text-desc-custom pt-[200px]">
      <h2 className="font-bold text-title-large mb-10 font-satoshi-bold">
        Get Acquainted With Our Company Ethos
      </h2>
      <img src={banner} alt="Office" />
    </div>
  );
};

export default Section1;
