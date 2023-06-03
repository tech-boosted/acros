import React from "react";
import img1 from "../../assests/tech-media/home-light.png";
import img2 from "../../assests/tech-media/home-dark.png";
import Slider from "../Slider";

const Home = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col-reverse  w-full gap-8 my-10">
        <div className="md:w-[70%] w-full text-center flex flex-col items-center">
          <h2 className="font-satoshi-bold uppercase md:text-title-custom text-title-custom-mv ">
            Group Ad Insights Into One unified console.
          </h2>
          <p>
            Acros Ads unifies performance of multiple SKUs and <br /> various
            Advertising platforms in one dashboard view.
          </p>

          <div className="my-10 flex gap-4  ">
          {/* <button className="rounded-md mr-4 border-2 bg-brand-500 border-brand-500 px-5 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
              Get started now
            </button> */}
            <button className="rounded-md border-2 bg-white text-blue-500 border-brand-500 px-5 py-2 text-base font-medium transition duration-200 hover:bg-brand-600/5 active:bg-brand-700/5 ">
              Schedule a Demo
            </button>
          </div>
        </div>

        <div className="relative top-0 right-0  md:w-[60%] w-full  md:mt-10 mb-10">
          <img
            src={img2}
            alt="Dashboard dark"
            className="drop-shadow-3xl relative top-0 right-0 w-[100%] object-contain"
          />
          <img
            src={img1}
            alt="Dashboard light"
            className="  absolute top-[35px] left-[20px] md:top-[50px] md:-left-[50px] w-[100%] object-contain"
          />
        </div>
      </div>

      <div className="h-fit w-full md:w-[80%] mx-auto rounded-[30px] bg-gradient-to-r from-[#AA00FF] to-[#0044FF] py-8 md:px-12 px-4 mt-24 text-white">
        <div className="md:h-[60%] h-fit font-satoshi-bold text-left uppercase mb-10 md:text-title-custom text-title-custom-mv">
          <p>
            Increase sku Profitability, <br /> drive platform performance.
          </p>
        </div>
        <div className="text-right flex-col justify-end gap-12">
          <span className="">/about/</span>
          <p className="mt-6">
            With our technology, cross platform data lives within a single
            platform and is accessible <br /> with fingertips allowing them ot
            quickly visualize, analyze and optimize the Ad <br /> performance.
          </p>
        </div>
      </div>

      <Slider/> 
    </div>
  );
};

export default Home;
