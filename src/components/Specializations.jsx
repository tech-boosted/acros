import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
const Specializations = () => {
  return (
    <div className="md:w-[70vw] w-[90vw] m-auto block text-[19px] mt-20 mb-10">
      <h2 className="text-[45px] font-bold mb-4">Specialization</h2>
      <p className="mb-4">Unleashing your brand potential</p>
      <p className="">
        Our team has extensive experience in building and optimizing e- <br />{" "}
        commerce advertising to drive sales and increase revenue.
      </p>
      <div className="flex-col mt-8">
        <div className="flex-col">
          <div className="flex my-10 items-center">
            <h2 className="w-[40%] text-[32px] font-bold">PPC Ads</h2>
            <p className="w-[50%] text-[18px]">
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
            <h2 className="w-[40%] text-[32px] font-bold">Paid Social Ads</h2>
            <p className="w-[50%] text-[18px]">
              Skilled advertisers to leverage social media platforms <br /> to
              increase sales and profitability.
            </p>
            <div className="w-[10%] text-blue-700  text-[22px]">
              <BsArrowUpRight />
            </div>
          </div>
          <div className="w-full bg-gradient-to-r from-blue-400 via-blue-700 to-green-400 h-[2px]"></div>
        </div>
        <div className="flex-col">
          <div className="flex my-10 items-center">
            <h2 className="w-[40%] text-[32px] font-bold">DSP Ads</h2>
            <p className="w-[50%] text-[18px]">
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
            <h2 className="w-[40%] text-[32px] font-bold">Native Ads</h2>
            <p className="w-[50%] text-[18px]">
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
