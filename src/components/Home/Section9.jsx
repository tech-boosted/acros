import React from "react";

import EcommerceLogo1 from "../../assests/acros-media/E-Commerce-Platform-Expertise-1.png";
import EcommerceLogo2 from "../../assests/acros-media/E-Commerce-Platform-Expertise-2.png";
import EcommerceLogo3 from "../../assests/acros-media/E-Commerce-Platform-Expertise-3.png";
import EcommerceLogo4 from "../../assests/acros-media/E-Commerce-Platform-Expertise-4.png";
import EcommerceLogo5 from "../../assests/acros-media/E-Commerce-Platform-Expertise-5.png";
import EcommerceLogo6 from "../../assests/acros-media/E-Commerce-Platform-Expertise-6.png";

import Trustedlogo1 from "../../assests/acros-media/Trusted-By-1.png";
import Trustedlogo2 from "../../assests/acros-media/Trusted-By-2.png";
import Trustedlogo3 from "../../assests/acros-media/Trusted-By-3.png";
import Trustedlogo4 from "../../assests/acros-media/Trusted-By-4.png";
import Trustedlogo5 from "../../assests/acros-media/Trusted-By-5.png";
import Trustedlogo6 from "../../assests/acros-media/Trusted-By-6.png";

import TechStackLogo1 from "../../assests/acros-media/TechStack-1.png";
import TechStackLogo2 from "../../assests/acros-media/TechStack-2.png";
import TechStackLogo3 from "../../assests/acros-media/TechStack-3.png";
import TechStackLogo4 from "../../assests/acros-media/TechStack-4.png";
import TechStackLogo5 from "../../assests/acros-media/TechStack-5.png";
import TechStackLogo6 from "../../assests/acros-media/TechStack-6.png";
import TechStackLogo7 from "../../assests/acros-media/TechStack-7.png";
import strings from "../../strings";

const Section9 = () => {
  return (
    <div className="flex flex-col md:w-[50%] mx-auto w-[90%] md:pl-[1%] md:pr-[4%] gap-10 mb-10">
      <div className="shadow-3xl w-full text-white rounded-[30px] h-fit bg-gradient-to-br from-[#1de5e2] from-40% via-[#6196e8] via-60% to-[#955aec] md:px-10 px-4  py-10">
        <div className="md:w-fit w-full grid grid-cols-3 gap-4 gap-y-4 mx-auto">
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black bg-opacity-40 rounded-[200px] flex items-center justify-center px-[10px]">
            <img
              src={EcommerceLogo1}
              alt="clever click 360"
              className=" block m-auto"
            />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black bg-opacity-40 rounded-[200px] flex items-center justify-center px-[10px]">
            <img
              src={EcommerceLogo2}
              alt="clever click 360"
              className=" block m-auto"
            />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black bg-opacity-40 rounded-[200px] flex items-center justify-center px-[10px]">
            <img
              src={EcommerceLogo3}
              alt="clever click 360"
              className=" block m-auto"
            />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black bg-opacity-40 rounded-[200px] flex items-center justify-center px-[10px]">
            <img
              src={EcommerceLogo4}
              alt="clever click 360"
              className=" block m-auto"
            />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black bg-opacity-40 rounded-[200px] flex items-center justify-center px-[10px]">
            <img
              src={EcommerceLogo5}
              alt="clever click 360"
              className=" block m-auto"
            />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black bg-opacity-40 rounded-[200px] flex items-center justify-center px-[10px]">
            <img
              src={EcommerceLogo6}
              alt="clever click 360"
              className=" block m-auto"
            />
          </div>
        </div>
        <h2 className="text-left text-title-large font-satoshi-bold mt-10 mb-6">
          {strings.HOME_SECTION_7_TITLE_2}
        </h2>
        <p className="text-left text-desc-custom ">
          {strings.HOME_SECTION_7_DESCRIPTION_2}
        </p>
        <button className="my-4 bg-black  text-white rounded-lg py-2 px-3">
          Learn More.
        </button>
      </div>

      <div className="shadow-3xl text-white rounded-[30px] h-fit bg-gradient-to-br from-[#1de5e2] from-40% via-[#6196e8] via-60% to-[#955aec] md:px-10 px-4   py-10">
        <div className="md:w-fit w-full grid grid-cols-3 gap-4 gap-y-4 mx-auto">
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black bg-opacity-40 rounded-[200px] flex items-center justify-center px-[10px]">
            <img
              src={TechStackLogo1}
              alt="clever click 360"
              className=" block m-auto"
            />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black bg-opacity-40 rounded-[200px] flex items-center justify-center px-[10px]">
            <img
              src={TechStackLogo2}
              alt="clever click 360"
              className=" block m-auto"
            />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black bg-opacity-40 rounded-[200px] flex items-center justify-center px-[10px]">
            <img
              src={TechStackLogo3}
              alt="clever click 360"
              className=" block m-auto"
            />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black bg-opacity-40 rounded-[200px] flex items-center justify-center px-[10px]">
            <img
              src={TechStackLogo4}
              alt="clever click 360"
              className=" block m-auto"
            />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black bg-opacity-40 rounded-[200px] flex items-center justify-center px-[10px]">
            <img
              src={TechStackLogo5}
              alt="clever click 360"
              className=" block m-auto"
            />
          </div>
          <div className="md:w-[140px] md:h-[140px] w-[100px] h-[100px] bg-black bg-opacity-40 rounded-[200px] flex items-center justify-center px-[10px]">
            <img
              src={TechStackLogo6}
              alt="clever click 360"
              className=" block m-auto"
            />
          </div>
        </div>
        <h2 className="text-left text-title-large font-satoshi-bold mt-10 mb-6">
          {strings.HOME_SECTION_7_TITLE_4}
        </h2>
        <p className="text-left text-desc-custom ">
          {strings.HOME_SECTION_7_DESCRIPTION_4}{" "}
        </p>
        <button className="my-4 bg-black  text-white rounded-lg py-2 px-3">
          Learn More.
        </button>
      </div>
    </div>
  );
};

export default Section9;
