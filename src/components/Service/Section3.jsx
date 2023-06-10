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

const Section3 = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col gap-4 justify-between h-fit my-10 px-[10%] w-full ">
        <div className="md:w-[40%] w-full">
          <h2 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
            We work with leading Advertising Platform Expertise.
          </h2>
          <p className="md:text-desc-custom font-satoshi-medium mt-10">
            {" "}
            With a reputation for excellence, we’re the trusted
            <br /> e-commerce operations partner for businesses of all sizes.
           
          </p>
          <h2></h2>
          <p></p>
        </div>
        <div className="h-fit md:w-[40%] w-full grid grid-cols-3 gap-4 gap-y-4 ">
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px]">
            <img src={TechStackLogo1} alt="" />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px]">
            <img src={TechStackLogo2} alt="" />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px]">
            <img src={TechStackLogo3} alt="" />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px]">
            <img src={TechStackLogo4} alt="" />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px]">
            <img src={TechStackLogo5} alt="" />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px]">
            <img src={TechStackLogo6} alt="" />
          </div>
         
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-4 justify-between h-fit my-10 px-[10%] w-full ">
        <div className="md:w-[40%] w-full">
          <h2 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
            We work with well
            maintained Tech Stack.
          </h2>
          <p className="md:text-desc-custom font-satoshi-medium mt-10">
            {" "}
           
            <br />A group of technologies that marketers leverage to conduct{" "}
            <br />
            and improve their marketing activities.
          </p>
          <h2></h2>
          <p></p>
        </div>
        <div className="h-fit md:w-[40%] w-full grid grid-cols-3 gap-4   gap-y-4">
         
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px]">
            <img src={AdsLogo1} alt="" />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px]">
            <img src={AdsLogo2} alt="" />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px]">
            <img src={AdsLogo3} alt="" />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px]">
            <img src={AdsLogo4} alt="" />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px]">
            <img src={AdsLogo5} alt="" />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black flex items-center justify-center px-[10px]">
            <img src={AdsLogo6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
