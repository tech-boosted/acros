import React from "react";
import img1 from "../../assests/tech-media/product platform fit light.png";
import img2 from "../../assests/tech-media/product platform fit dark.png";
const PlatformProductFit = () => {
  return (
    <div className="w-screen px-[10%] text-desc-custom py-10 text-center">
      <h2 className="uppercase font-satoshi-bold md:text-title-custom text-title-custom-mv">
        platform-product fit
      </h2>
      <p className="md:w-[30%] w-full mx-auto mt-4">
        {" "}
        Uncover which platform is driving the highest ROI for a product and
        double up on your spends and conversions.
      </p>

      <div className="my-10 flex md:flex-row flex-col md:gap-4  gap-8 justify-between w-full px-4">
        <img
          src={img1}
          className="drop-shadow-3xl md:w-[45%] w-full object-contain"
          alt="platform product fit light"
        />
        <img
          src={img2}
          className="drop-shadow-3xl md:w-[45%] w-full object-contain"
          alt="platform product fit dark"
        />
      </div>

      <div className="my-10 m-auto">
        {/* <button className="rounded-md mr-4 border-2 bg-brand-500 border-brand-500 px-5 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Get started now
        </button> */}
        <button className="rounded-md border-2 bg-white text-blue-500 border-brand-500 px-5 py-2 text-base font-medium transition duration-200 hover:bg-brand-600/5 active:bg-brand-700/5 ">
          Schedule a Demo
        </button>
      </div>
    </div>
  );
};

export default PlatformProductFit;
