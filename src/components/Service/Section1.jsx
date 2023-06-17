import React from "react";

const Section1 = () => {
  return (
    <div className="w-screen h-fit text-desc-custom">
      <div
        className="h-fit w-[92%] mx-auto  rounded-[30px] md:bg-[120%] bg-bottom bg-cover
       bg-[url('https://res.cloudinary.com/dfwvu60ef/image/upload/v1686145258/earth_horizontal_adqh3a.jpg')] 
       pt-16 pb-32 md:px-16 px-10 md:mt-[10%] mt-24 text-white"
      >
        <div className="h-[100%] font-satoshi-bold text-left mb-8 text-title-large">
          <p>Agency Partners</p>
        </div>
        <div className="text-left flex-col justify-end gap-12 md:w-[50%]">
          <p className="mt-6 leading-relaxed font-satoshi-bold text-desc-custom">
            Our adverstising agency companies throughbred e-commerce Advertising
            Experts who can create conversion focused ad campaigns and
            strategies that resonate with the e-commerce target audience. They
            work with highly efficient customer behaviour patterns, buyers mind
            mapping and decision influencing tools to deliver gold-standard ROI.
          </p>
        </div>
      </div>

      <div className="md:w-[92%] w-full mx-auto flex items-center justify-center text-desc-custom px-10  my-24">
        <div className=" w-full text-left flex md:flex-row flex-col">
          <div className="md:w-[70%] w-full">
            <p className="md:w-[80%] w-[100%] md:text-title-large text-title-custom-mv font-satoshi-bold mb-8 leading-snug tracking-tight">
              Your Ads managed by indegenous E-Commerce advertisers.
            </p>

            <div className="w-[80%] mb-8">
              <p className="font-satoshi-bold ">
                A team of ex-Amazon, Google and Meta executives, who know the
                machinery and balance of e-commerce and advertising. Indigenous
                and thoroughbred advertising specialist drive your brand with
                tailored strategies and effective tech stack. Expand your brand
                with accelerated growth strategies.
              </p>
            </div>
          </div>
          <div className="bg-black text-white rounded-[30px]">
            <div className="grid md:grid-row-4 gap-4  grid-cols-1 text-center py-8 px-4">
              <div className="text-center py-4 pb-8">
                <p className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                  $2B
                </p>
                <p className="font-satoshi-medium">
                  Managed Portfolio Worth $2 Billion in 2022
                </p>
              </div>
              <div className="text-center py-4 pb-8">
                <p className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                  14x
                </p>
                <p className="font-satoshi-medium">
                  Achieved Average ROAS of 14x in 2022
                </p>
              </div>
              <div className="text-center py-4 pb-8">
                <p className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                  50+
                </p>
                <p className="font-satoshi-medium">
                  Proficient in 50+ Retail and Wholesale Categories
                </p>
              </div>
              <div className="text-center py-4 pb-8">
                <p className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                  45%
                </p>
                <p className="font-satoshi-medium">
                  45% Increase in Profitability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
