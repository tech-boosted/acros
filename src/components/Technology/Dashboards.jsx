import React from "react";
import img1 from "../../assests/tech-media/second page light-1.png";
import img2 from "../../assests/tech-media/page 2 dark -2.png";
import img3 from "../../assests/tech-media/second page light-3.png";
import img4 from "../../assests/tech-media/dedicated view.png";
import Slider from "./Slider";

const Dashboards = () => {
  return (
    <div className="w-full text-desc-custom">
      {/* 🌻🌻 unified dashboard */}
      <div className="text-center text-desc-custom mt-0">
        <h2 className="uppercase font-satoshi-bold text-title-custom-mv md:text-title-custom ">
          Unified Dashboard.
        </h2>
        <p className="">
          Track your catalog perfomance across various advertising platforms in
          one view.
        </p>
        <p className="">
          Take a deeper look into your business with our Business Intelligence
          Overview to improve conversions.
        </p>

        <div className="flex relative w-full mt-28 mb-10  justify-between">
          <img
            src={img1}
            className="drop-shadow-3xl relative w-[40%] object-contain"
            alt="Acros Ads"
          />
          <img
            src={img2}
            className="drop-shadow-3xl absolute w-[45%] z-[10] left-[25%] object-contain -top-[50px] shadow-2xl"
            alt="Acros ads dark"
          />
          <img
            src={img3}
            className="drop-shadow-3xl relative w-[40%] object-contain shadow-xl"
            alt="Overview Across ads"
          />
        </div>
      </div>

      {/* 🌻🌻 grid view */}
     <Slider/>

      {/* 🌻🌻 dedicated view */}
      <div className="w-full flex md:flex-row flex-col-reverse items-center md:h-[80vh] h-fit">
        <div className="md:w-[35%] w-full text-center p-4">
          <h2 className="md:text-title-custom text-title-custom-mv uppercase mb-10 font-satoshi-bold">
            Dedicated view
          </h2>
          <p className="">
            {" "}
            View your PPC, Social, DSP and Native ADs performance and take quick
            and effective business decisions.
          </p>
          <div className="my-10 m-autof flex justify-center ">
            {/* <button className="rounded-md mr-4 border-2 bg-brand-500 border-brand-500 px-5 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
              Get started now
            </button> */}
            <button className="rounded-md border-2 bg-white text-blue-500 border-brand-500 px-5 py-2 text-base font-medium transition duration-200 hover:bg-brand-600/5 active:bg-brand-700/5 ">
              Schedule a Demo
            </button>
          </div>
        </div>
        <div className="md:w-[65%] w-full ">
          <img src={img4} alt="Dedicated view" className="drop-shadow-3xl"/>
        </div>
      </div>

      {/* 🌻🌻 sku view */}
      <div className="w-full flex md:flex-row flex-col items-center md:h-[80vh] h-fit">
        <div className="md:w-[65%] w-full">
          <img src={img4} alt="SKU view" className="drop-shadow-3xl" />
        </div>

        <div className="md:w-[35%] w-full text-center p-4">
          <h2 className="md:text-title-custom text-title-custom-mv uppercase mb-10 font-satoshi-bold">
            SKU view
          </h2>
          <p className="">
            {" "}
            Track individual SKU and identify platform level insights to drive
            conversions and descrease waste spends.
          </p>
          <div className="my-10 m-auto flex justify-center">
            {/* <button className="rounded-md mr-4 border-2 bg-brand-500 border-brand-500 px-5 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
              Get started now
            </button> */}
            <button className="rounded-md border-2 bg-white text-blue-500 border-brand-500 px-5 py-2 text-base font-medium transition duration-200 hover:bg-brand-600/5 active:bg-brand-700/5 ">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
