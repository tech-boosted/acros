import React from "react";

const Section1 = () => {
  return (
    <div className="w-screen h-fit text-desc-custom">
      <div className="h-fit 
      pt-[200px]
      py-32 px-[10%] text-white
      bg-cover bg-no-repeat bg-right-bottom
       bg-[url('https://res.cloudinary.com/dfwvu60ef/image/upload/v1686145258/earth_horizontal_adqh3a.jpg')] 
      "
      >
        <div className="h-[100%] font-satoshi-bold text-left mb-8 text-title-large">
          <p>Agency Partners</p>
        </div>
        <div className="text-left flex-col justify-end gap-12 w-[50%]">
          <p className="mt-6 leading-relaxed font-satoshi-bold text-desc-custom">
            Our adverstising agency companies throughbred e-commerce Advertising
            Experts who can create
            conversion focused ad campaigns and strategies that resonate with
            the e-commerce target
            audience. They work with highly efficient customer behaviour
            patterns, buyers mind mapping and
            decision influencing tools to deliver gold-standard ROI.
          </p>
          <p className="mt-6 leading-relaxed font-satoshi-bold text-desc-custom">
            Our adverstising agency companies throughbred e-commerce Advertising
            Experts who can create
            conversion focused ad campaigns and strategies that resonate with
            the e-commerce target
            audience. They work with highly efficient customer behaviour
            patterns, buyers mind mapping and
            decision influencing tools to deliver gold-standard ROI.
          </p>
        </div>
      </div>

      <div className="w-full flex items-center justify-center text-desc-custom px-[10%]  my-24">
        <div className=" w-full text-left">
          <div className="w-[70%]">

            <p className="w-[80%] md:text-title-large text-title-custom-mv font-satoshi-bold mb-8 leading-snug tracking-tight">
              Your Ads managed by indegenous E-Commerce advertisers.
            </p>

            <div className="w-[80%] mb-20">
              <p className="font-satoshi-bold ">
                A team of ex-Amazon, Google and Meta executives, who know the
                machinery and balance of
                e-commerce and advertising. Indigenous and thoroughbred
                advertising specialist drive your brand with tailored
                strategies and effective tech stack.
                Expand your brand with accelerated growth strategies.
              </p>

            </div>
          </div>
          <div className="bg-black text-white rounded-[30px]">
            <div className="grid md:grid-row-4 gap-4  grid-cols-4 text-center px-8 flex">
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
