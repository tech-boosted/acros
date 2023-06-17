import React, { useState } from "react";
import { agencySpecificationsArr } from "../../utils/Variable";
import { BsArrowRight } from "react-icons/bs";

const Specialization = () => {
  const [data, setData] = useState(0);
  const [specificationsIndex, setSpecificationsIndex] = useState(0);
  const [arr, setArr] = useState(agencySpecificationsArr[0]);

  const [showSection, setShowSection] = useState(false);

  const clickHandler = (index) => {
    setArr(agencySpecificationsArr[index]);

    if (showSection === true && agencySpecificationsArr[index] === arr) {
      setShowSection(false);
    } else {
      setData(0);
      setShowSection(true);
    }
  };

  return (
    <div className="w-screen text-center text-desc-custom bg-[#e2e2e2] my-10 ">
      <div className="px-[5%] pt-20 pb-24">
        <h2 className="md:text-title-large text-title-custom-mv mb-4 font-satoshi-bold">
          Specialization
        </h2>
        <p className="mb-12 font-satoshi-medium">
          Unleashing your brand potential
          <br />
          Our team has extensive experience in building and optimizing
          e-commerce
          <br /> advertising to drive sales and increase revenue.
        </p>

        <div className=" grid md:grid-cols-4 grid-cols-1 gap-8 text-white">
          <div
            className="  cursor-pointer bg-black bg-[url('https://www.charle.co.uk/work/billionaire-boys-club/images/thumbnail.jpg')] backdrop-opacity-70 bg-cover  rounded-[15px] h-[450px]  flex flex-col justify-end hover:transition-all ease-in-out hover:scale-105 duration-150  text-left hover:bg-opacity-90"
            onClick={() => clickHandler(0)}
          >
            <div className="text-title-basic font-satoshi-bold px-10 text-left pt-[150px] bg-[#222f33b5] backdrop:blur-[55px] h-full w-[100%] rounded-[15px]">
              PPC Ads
              <p className="leading 10 tracking-wider text-desc-custom  mt-4">
                Subject matter experts to have leverage in marketplace and D2C
                PPC Ads.
              </p>
            </div>
          </div>

          <div
            className="  cursor-pointer bg-black bg-[url('https://www.charle.co.uk/work/candy-kittens/images/thumbnail.jpg')] backdrop-opacity-70 bg-cover  rounded-[15px] h-[450px] md:mt-24 flex flex-col justify-end hover:transition-all ease-in-out hover:scale-105 duration-150  text-left hover:bg-opacity-90"
            onClick={() => clickHandler(1)}
          >
            <div className="text-title-basic font-satoshi-bold px-10 text-left pt-[150px] bg-[#222f33b5] backdrop:blur-[55px] h-full w-[100%] rounded-[15px]">
              Paid Social Ads
              <p className="leading 10 tracking-wider text-desc-custom  mt-4">
                Skilled advertisers to leverage social media platforms to
                increase sales and profitability.
              </p>
            </div>
          </div>

          <div
            className="  cursor-pointer bg-black bg-[url('https://www.charle.co.uk/work/hippeas/images/thumbnail.jpg')] bg-cover rounded-[15px] h-[450px] md:mt-14 flex flex-col justify-end hover:transition-all ease-in-out hover:scale-105 duration-150  text-left"
            onClick={() => clickHandler(2)}
          >
            <div className="text-title-basic font-satoshi-bold px-10 text-left pt-[150px] bg-[#222f33b5] backdrop:blur-[55px] h-full w-[100%] rounded-[15px]">
              DSP Ads
              <p className="leading 10 tracking-wider text-desc-custom  mt-4">
                Seasoned advertisers with in-depth knowledge and proven results
                of DSP Ads for e-commerce.
              </p>
            </div>
          </div>
          <div
            className="  cursor-pointer bg-black bg-[url('https://www.charle.co.uk/work/au-depart/images/thumbnail.jpg')] bg-cover rounded-[15px] h-[450px]  flex flex-col justify-end hover:transition-all ease-in-out hover:scale-105 duration-150  text-left"
            onClick={() => clickHandler(3)}
          >
            <div className="text-title-basic font-satoshi-bold px-10 text-left pt-[150px] bg-[#222f33b5] backdrop:blur-[55px] h-full w-[100%] rounded-[15px]">
              Native Ads
              <p className="leading 10 tracking-wider text-desc-custom  mt-4">
                Proficient media buyers to build synergy with PPC, Social, and
                DSP to maximize RO
              </p>
            </div>
          </div>
        </div>
      </div>

      {showSection && (
        <div className="w-full h-fit text-desc-custom pb-20 ">
          <div>
            <p className="text-title-large font-satoshi-bold mb-4">
              {" "}
              {arr.key}
            </p>
            <div className="flex md:flex-row flex-col-reverse w-full justify-between ">
              <div className="md:w-[45%] w-full h-fit md:mx-auto bg-gradient-to-br from-cyan-400 via-red-400 to-gray-700 py-8 mt-10 px-12 rounded-[30px]">
                <p className="text-white font-satoshi-bold">
                  {arr.capabilities[data].desc}
                </p>
              </div>
              <div className="md:w-[50%] w-full  flex flex-col justify-start items-center">
                {arr.capabilities.map((item, index) => (
                  <div
                    key={index}
                    className="cursor-pointer flex md:w-[80%] w-full py-3   px-5   border-blue-700 border-b-[2px] items-center justify-between"
                    onClick={() => setData(index)}
                  >
                    <p className="font-satoshi-bold">{item.key}</p>
                    <BsArrowRight className="transform hover:translate-x-2 transition-all delay-2 font-bold text-blue-700 text-[23px]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Specialization;
