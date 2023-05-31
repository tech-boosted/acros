import React from "react";

const Section = () => {
  return (
    <div>
      <div className="pt-10 my-10">
        <h2 className="text-center md:text-title-custom text-title-custom-mv font-semibold mb-20">
          Scale your E-Commerce Advertising with Trusted Partners
        </h2>
        <div className="rounded-[30px] md:p-[50px] p-[30px] h-fit text-white w-full bg-gradient-to-r from-[#A422E5] to-[#A422E5] text-desc-custom">
          <section className="flex justify-between items-center">
            <div>
              <p className=" md:text-title-custom text-title-custom-mv font-satoshi-bold">
                Multi-Channel Advertising Partners
              </p>
            </div>
            <button className="rounded-full bg-white px-2 w-[200px] md:w-[200px] md:px-8 h-[42px] text-base font-medium text-black transition duration-200 hover:bg-gray-200 active:bg-gray-300">
              <p className=" text-primary md:text-[18px] text-[12px]">
                Read More
              </p>
            </button>
          </section>
          <div>
            <p className="mb-7 mt-10">
              We offer Managed Advertising-Operations Services for brands and
              agencies.
            </p>
            <div className="mb-5">
              <p className="">
                Seasoned partners with 12+ years of experience and $10 billion
                advertising
              </p>
              <p className="">revenue generation across channels.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 grid-cols-1 md:text-start text-center ">
            <div className="flex-col">
              <div className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                100+
              </div>
              <div className="">
                Agency Partners to 100+ Successful E-commerce Brands
              </div>
            </div>

            <div className="flex-col">
              <div className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                50+
              </div>
              <div className="">
                Advertising Partners of 50+ Leading E-commerce Agencies
                Worldwide
              </div>
            </div>

            <div className="flex-col">
              <div className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                15+
              </div>
              <div className="">
                Proficient in 15+ E- commerce Marketplaces.
              </div>
            </div>

            <div className="flex-col">
              <div className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                10+
              </div>
              <div className="">
                Highly Skilled in 10+ Advertising and Marketing Disciplines
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center text-desc-custom ">
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

export default Section;
