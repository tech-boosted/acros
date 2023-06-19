import React, { useState } from "react";
import { agencySpecificationsArr } from "../../utils/Variable";
import { BsArrowRight, BsChevronDoubleDown } from "react-icons/bs";
import img1 from "../../assests/acros-media/specialization1.jpg";
import img2 from "../../assests/acros-media/specialization2.jpg";
import img3 from "../../assests/acros-media/specialization3.jpg";
import img4 from "../../assests/acros-media/specialization4.jpg";

const Specialization = () => {
  const [data, setData] = useState(0);
  const [specificationsIndex, setSpecificationsIndex] = useState(0);
  const [arr, setArr] = useState(agencySpecificationsArr[0]);

  const [showArrow, setShowArrow] = useState(-1);
  const [showSection, setShowSection] = useState(false);

  const clickHandler = (index) => {
    setArr(agencySpecificationsArr[index]);

    if (showSection === true && agencySpecificationsArr[index] === arr) {
      setShowSection(false);
      setShowArrow(-1);
    } else {
      setData(0);
      setShowSection(true);
      setShowArrow(index);
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
          <div className="shadow-3xl cursor-pointer bg-black bg-[url('https://firebasestorage.googleapis.com/v0/b/acros-resources.appspot.com/o/Acros-files%2Fspecialization1.jpg?alt=media&token=709115d8-945c-46f8-b091-443cccd0cbab')] backdrop-opacity-70 bg-cover  rounded-[15px] h-[450px]  flex flex-col justify-end hover:transition-all ease-in-out hover:scale-105 duration-150  text-left hover:bg-opacity-90">
            <div className="shadow-3xl text-title-basic font-satoshi-bold px-10 text-left pt-[120px] bg-[#222f33b5] backdrop:blur-[55px] h-full w-[100%] rounded-[15px]">
              PPC Ads
              <p className="leading 10 tracking-wider text-desc-custom  mt-4">
                Subject matter experts to have leverage in marketplace and D2C
                PPC Ads.
              </p>
              <button
                onClick={() => clickHandler(0)}
                className="text-white border border-white hover:bg-white hover:text-black active:bg-white font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Click to Expand
              </button>
              {showArrow === 0 && (
                <BsChevronDoubleDown className="text-3xl  mt-8 mx-auto animate-bounce" />
              )}
            </div>
          </div>

          <div className="shadow-3xl  cursor-pointer bg-black bg-[url('https://firebasestorage.googleapis.com/v0/b/acros-resources.appspot.com/o/Acros-files%2Fspecialization2.jpg?alt=media&token=c51d0711-c52c-4d5f-95c4-045bdcd0531f')] backdrop-opacity-70 bg-cover  rounded-[15px] h-[450px] md:mt-24 flex flex-col justify-end hover:transition-all ease-in-out hover:scale-105 duration-150  text-left hover:bg-opacity-90">
            <div className="text-title-basic font-satoshi-bold px-10 text-left pt-[70px] bg-[#222f33b5] backdrop:blur-[55px] h-full w-[100%] rounded-[15px]">
              Paid Social Ads
              <p className="leading 10 tracking-wider text-desc-custom  mt-4">
                Skilled advertisers to leverage social media platforms to
                increase sales and profitability.
              </p>
              <button
                onClick={() => clickHandler(1)}
                className="text-white border border-white hover:bg-white hover:text-black active:bg-white font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Read More
              </button>
              {showArrow === 1 && (
                <BsChevronDoubleDown className="text-3xl  mt-4 mx-auto animate-bounce" />
              )}
            </div>
          </div>

          <div className=" shadow-3xl cursor-pointer bg-black bg-[url('https://firebasestorage.googleapis.com/v0/b/acros-resources.appspot.com/o/Acros-files%2Fspecialization3.jpg?alt=media&token=2eae8cd6-7152-4747-ac90-29a3e1ae08fb')] bg-cover rounded-[15px] h-[450px] md:mt-14 flex flex-col justify-end hover:transition-all ease-in-out hover:scale-105 duration-150  text-left">
            <div className="text-title-basic font-satoshi-bold px-10 text-left pt-[120px] bg-[#222f33b5] backdrop:blur-[55px] h-full w-[100%] rounded-[15px]">
              DSP Ads
              <p className="leading 10 tracking-wider text-desc-custom  mt-4">
                Seasoned advertisers with in-depth knowledge and proven results
                of DSP Ads for e-commerce.
              </p>
              <button
                onClick={() => clickHandler(2)}
                className="text-white border border-white hover:bg-white hover:text-black active:bg-white font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Read More
              </button>
              {showArrow === 2 && (
                <BsChevronDoubleDown className="text-3xl font-satoshi-bold  mt-8 mx-auto animate-bounce" />
              )}
            </div>
          </div>
          <div className="shadow-3xl  cursor-pointer bg-black bg-[url('https://firebasestorage.googleapis.com/v0/b/acros-resources.appspot.com/o/Acros-files%2Fspecialization4.jpg?alt=media&token=5643a72a-2c8f-4995-84a4-22c0b144e716')] bg-cover rounded-[15px] h-[450px]  flex flex-col justify-end hover:transition-all ease-in-out hover:scale-105 duration-150  text-left">
            <div className="text-title-basic font-satoshi-bold px-10 text-left pt-[120px] bg-[#222f33b5] backdrop:blur-[55px] h-full w-[100%] rounded-[15px]">
              Native Ads
              <p className="leading 10 tracking-wider text-desc-custom  mt-4">
                Proficient media buyers to build synergy with PPC, Social, and
                DSP to maximize RO
              </p>
              <button
                onClick={() => clickHandler(3)}
                className="text-white border border-white hover:bg-white hover:text-black active:bg-white font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Read More
              </button>
              {showArrow === 3 && (
                <BsChevronDoubleDown className="text-3xl  mt-8 mx-auto animate-bounce" />
              )}
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
            <div className="flex md:flex-row flex-col-reverse w-full justify-center ">
              {/* <div className="md:w-[45%] w-full h-fit md:mx-auto bg-gradient-to-br from-cyan-400 via-red-400 to-gray-700 py-8 mt-10 px-12 rounded-[30px]">
                <p className="text-white font-satoshi-bold">
                  {arr.capabilities[data].desc}
                </p>
              </div> */}
              <div className="md:w-[40%] w-full  flex flex-col justify-start items-center">
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
