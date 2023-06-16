import React from "react";

const Section6 = () => {
  return (
    <div className="w-screen">
  

      <div className=" flex items-center justify-center text-desc-custom md:w-[92%] w-[90%] px-20 rounded-[30px] mx-auto text-white  bg-gradient-to-tr from-[#ff9022] from-25% via-50%   via-[#bb65da]  to-[#7034fc] to-65%">
        <div className="my-[120px] w-full  text-right">
          <h1 className="md:text-title-custom text-title-custom-mv mb-8 font-satoshi-bold">
            Our Impact
          </h1>
          <p className="text-subtitle-custom-mv md:text-subtitle-custom mb-4">
            Empowering your success with our passion
          </p>
          <div className=" mb-8">
            <p>Expertise and dedication led to unparalleled success in 2022.</p>
            <p>Expand your brand with accelerated growth strategies.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4  grid-cols-1 text-center">
            <div>
              <h1 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                $2B
              </h1>
              <p className="font-satoshi-medium">
                Managed Portfolio Worth $2 Billion in 2022
              </p>
            </div>
            <div>
              <h1 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                14x
              </h1>
              <p className="font-satoshi-medium">
                Achieved Average ROAS of 14x in 2022
              </p>
            </div>
            <div>
              <h1 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                50+
              </h1>
              <p className="font-satoshi-medium">
                Proficient in 50+ Retail and Wholesale Categories
              </p>
            </div>
            <div>
              <h1 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                45%
              </h1>
              <p className="font-satoshi-medium">
                45% Increase in Profitability
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
