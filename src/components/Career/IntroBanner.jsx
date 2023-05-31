import React from "react";
import banner from "../../assests/acros-media/Group-114.png";

const IntroBanner = () => {
  return ( 
    <div className="w-full h-fit p-5 flex flex-col items-center justify-center text-desc-custom">
      <h2 className="font-bold text-title-custom-mv md:text-title-custom mb-10 font-satoshi-bold">
        Get Acquainted With Our Company Ethos
      </h2>
      <img src={banner} alt="Office"/>
    </div>
  );
};

export default IntroBanner;
