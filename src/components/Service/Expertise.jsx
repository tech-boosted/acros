import React from "react";

const Expertise = () => {
  return (
    <div className="w-[92vw] mx-auto  h-fit  my-20 flex md:flex-row flex-col  items-center md:text-desc-custom text-[12px]">
      <div className="h-fit w-full rounded-[30px] bg-gradient-to-r from-[#AA00FF] to-[#0044FF] py-8 md:px-12 px-4 text-white">
        <div className="h-[60%] font-bold md:text-title-custom text-title-custom-mv font-satoshi-bold">
          <p>
            Expertise   
          </p>
        </div>
        <div className="text-right md:px-20 md:gap-12 gap-6 md:mt-0 mt-10">
          <span className="">/about/</span>
          <p className="my-10">
            Our Ad Ops services provide a seamless and cost effective solution
            to an Ad agency's <br /> needs. Our Ad Operations team handles all
            aspects of your ads, Freeing up your resources <br /> and time to
            focus on your core business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
