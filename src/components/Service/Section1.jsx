import React from "react";

const Section1 = () => {
  return (
    <div className="w-full h-fit text-desc-custom">
      <div className="h-fit w-[92%] mx-auto  rounded-[30px] bg-bottom bg-cover bg-[url('https://res.cloudinary.com/dfwvu60ef/image/upload/v1686145258/earth_horizontal_adqh3a.jpg')] py-8 px-12 md:mt-[10%] mt-[20%] text-white">
        <div className="h-[60%] font-satoshi-bold text-right mb-10 text-title-custom">
          <p>Agency Partners</p>
        </div>
        <div className="text-left flex-col justify-end gap-12">
          <p className="mt-6">
            Our adverstising agency companies throughbred e-commerce Advertising
            Experts who can create <br />
            conversion focused ad campaigns and strategies that resonate with
            the e-commerce target <br />
            audience. They work with highly efficient customer behaviour
            patterns, buyers mind mapping and <br />
            decision influencing tools to deliver gold-standard ROI.
          </p>
        </div>
      </div>

      <div className="w-full flex items-center justify-center text-desc-custom px-[10%]  my-10">
        <div className=" w-full  text-right">
          <h1 className="md:text-title-custom text-title-custom-mv font-satoshi-bold mb-8 uppercase">
            Your Ads managed by indegenous <br /> e commerce advertisers.
          </h1>

          <div className=" mb-8">
            <p>
              A team of ex-Amazon, Google and Meta executives, who know the
              machinery and balance of <br />
              e-commerce and advertising. Indigenous and thoroughbred
              advertising specialist drive your <br /> brand with tailored
              strategies and effective tech stack.
            </p>
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

export default Section1;
