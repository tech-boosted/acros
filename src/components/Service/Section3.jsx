import React from "react";

import TechStackLogo1 from "../../assests/acros-media/TechStack-1.png";
import TechStackLogo2 from "../../assests/acros-media/TechStack-2.png";
import TechStackLogo3 from "../../assests/acros-media/TechStack-3.png";
import TechStackLogo4 from "../../assests/acros-media/TechStack-4.png";
import TechStackLogo5 from "../../assests/acros-media/TechStack-5.png";
import TechStackLogo6 from "../../assests/acros-media/TechStack-6.png";
import TechStackLogo7 from "../../assests/acros-media/TechStack-7.png";

import AdsLogo1 from "../../assests/acros-media/Advertising-Platform-Expertise-1.png";
import AdsLogo2 from "../../assests/acros-media/Advertising-Platform-Expertise-2.png";
import AdsLogo3 from "../../assests/acros-media/Advertising-Platform-Expertise-3.png";
import AdsLogo4 from "../../assests/acros-media/Advertising-Platform-Expertise-4.png";
import AdsLogo5 from "../../assests/acros-media/Advertising-Platform-Expertise-5.png";
import AdsLogo6 from "../../assests/acros-media/Advertising-Platform-Expertise-6.png";
import strings from "../../strings";

const Section3 = () => {
  return (
    <div className="w-screen">
      <div className="flex md:flex-row flex-col gap-4 justify-between h-fit my-24 px-[10%] w-full ">
        <div className="md:w-[40%] w-full">
          <p className="md:text-title-large text-title-custom-mv font-satoshi-bold leading-snug ">
{strings.AGENCY_SECTION_4_TITLE_1}          </p>
          <p className="md:text-desc-custom font-satoshi-bold mt-10 ">
            {" "}
          {strings.AGENCY_SECTION_4_DESCRIPTION_1}
          </p>
          <h2></h2>
          <p></p>
        </div>
        <div className="h-fit md:w-[40%] w-fit grid grid-cols-3 gap-4 gap-y-4 ">
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px] rounded-[18px]">
            <img src={AdsLogo1} alt="" />
           
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px] rounded-[18px]">
            <img src={AdsLogo2} alt="" />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px] rounded-[18px]">
            <img src={AdsLogo3} alt="" />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px] rounded-[18px]">
            <img src={AdsLogo4} alt="" />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px] rounded-[18px]">
            <img src={AdsLogo5} alt="" />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px] rounded-[18px]">
            <img src={AdsLogo6} alt="" />
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-4 justify-between h-fit my-28 px-[10%] w-full ">
        <div className="md:w-[40%] w-full">
          <p className="md:text-title-large text-title-custom-mv font-satoshi-bold leading-snug ">
          {strings.AGENCY_SECTION_4_TITLE_2}          
          </p>
          <p className="md:text-desc-custom font-satoshi-bold mt-10">
          {strings.AGENCY_SECTION_4_DESCRIPTION_2}

          </p>
          <h2></h2>
          <p></p>
        </div>
        <div className="h-fit md:w-[40%] w-full grid grid-cols-3 gap-4   gap-y-4">
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px] rounded-[18px]">
            <img src={TechStackLogo1} alt="" />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px] rounded-[18px]">
            <img src={TechStackLogo2} alt="" />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px] rounded-[18px]">
            <img src={TechStackLogo3} alt="" />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px] rounded-[18px]">
            <img src={TechStackLogo4} alt="" />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px] rounded-[18px]">
            <img src={TechStackLogo5} alt="" />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px] rounded-[18px]">
            <img src={TechStackLogo6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
