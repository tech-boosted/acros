import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
const Specializations = () => {
  return (
    <div className="w-full text-desc-custom mt-20 mb-10">
      <h2 className="md:text-title-custom text-title-custom-mv mb-4 font-satoshi-bold">Specialization</h2>
      <p className="mb-4">Unleashing your brand potential</p>
      <p className="">
        Our team has extensive experience in building and optimizing e- <br />{" "}
        commerce advertising to drive sales and increase revenue.
      </p>
      <div className="flex-col mt-8">
        <div className="flex-col">
          <div className="flex my-10 items-center">
            <h2 className="w-[40%] text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-bold">PPC Ads</h2>
            <p className="w-[50%] ">
              Subject matter experts in marketplace & D2C PPC <br /> Ads.
            </p>
            <div className="w-[10%] text-blue-700  text-[22px]">
              <BsArrowUpRight />
            </div>
          </div>
          <div className="w-full bg-gradient-to-r from-blue-400 via-blue-700 to-green-400 h-[2px]"></div>
        </div>
        <div className="flex-col">
          <div className="flex my-10 items-center">
            <h2 className="w-[40%] text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-bold">
              Paid Social Ads
            </h2>
            <p className="w-[50%] ">
              Skilled advertisers to leverage social media platforms <br /> to
              increase sales and profitability.
            </p>
            <div className="w-[10%] text-blue-700  text-[22px]">
              <BsArrowUpRight />
            </div>
          </div>
          <div className="w-full bg-gradient-to-r from-blue-400 to-green-400 h-[2px]"></div>
        </div>
        <div className="flex-col">
          <div className="flex my-10 items-center">
            <h2 className="w-[40%] text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-bold">DSP Ads</h2>
            <p className="w-[50%] ">
              Seasoned advertisers with in-depth knowledge and <br /> proven
              results of DSP Ads for e-commerce.
            </p>
            <div className="w-[10%] text-blue-700  text-[22px]">
              <BsArrowUpRight />
            </div>
          </div>
          <div className="w-full bg-gradient-to-r from-blue-400 via-blue-700 to-green-400 h-[2px]"></div>
        </div>
        <div className="flex-col">
          <div className="flex my-10 items-center">
            <h2 className="w-[40%] text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-bold">
              Native Ads
            </h2>
            <p className="w-[50%] ">
              Proficient media buyers to build synergy with PPC, <br /> Social,
              and DSP to maximize ROI
            </p>
            <div className="w-[10%] text-blue-700  text-[22px]">
              <BsArrowUpRight />
            </div>
          </div>
          <div className="w-full bg-gradient-to-r from-blue-400 via-blue-700 to-green-400 h-[2px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Specializations;
