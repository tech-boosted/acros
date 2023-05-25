import React from "react";

const Section = () => {
  return (
    <div>
      <div className="pt-10">
        <h2 className="text-center text-[37px] font-semibold mb-20">
          Scale your E-Commerce Advertising with Trusted Partners
        </h2>
        <div className="rounded-[30px] p-[50px] m-auto block h-fit text-white w-[90vw] bg-gradient-to-r from-[#A422E5] to-[#A422E5] md:w-[70vw] md:h-fit">
          <section className="flex justify-between items-center">
            <div>
              <p className="md:text-[45px] text-[22px] font-bold ">Multi-Channel Advertising Partners</p>
            </div>
            <button className="rounded-full bg-white px-2 w-[150px] md:w-[200px] md:px-8 h-[42px] text-base font-medium text-black transition duration-200 hover:bg-gray-200 active:bg-gray-300">
              <p className=" text-slate-950 md:text-[18px] text-[12px]">Read More</p>
            </button>
          </section>
          <div>
            <p className="text-[19px] mb-7 mt-10">
              We offer Managed Advertising-Operations Services for brands and
              agencies.
            </p>
            <div className="mb-5">
              <p className="text-[19px]">
                Seasoned partners with 12+ years of experience and $10 billion
                advertising
              </p>
              <p className="text-[19px]">revenue generation across channels.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 grid-cols-1 md:text-start text-center ">
            <div className="flex-col">
              <div className="text-[80px]">100+</div>
              <div className="text-[19px]">
                Agency Partners to 100+ Successful E-commerce Brands
              </div>
            </div>

            <div className="flex-col">
              <div className="text-[80px]">50+</div>
              <div className="text-[19px]">
                Advertising Partners of 50+ Leading E-commerce Agencies
                Worldwide
              </div>
            </div>

            <div className="flex-col">
              <div className="text-[80px]">15+</div>
              <div className="text-[19px]">
                Proficient in 15+ E- commerce Marketplaces.
              </div>
            </div>

            <div className="flex-col">
              <div className="text-[80px]">10+</div>
              <div className="text-[19px]">
                Highly Skilled in 10+ Advertising and Marketing Disciplines
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center  ">
        <div className="my-[120px] md:w-[70vw] w-[90vw]  text-right">
          <h1 className="text-[45px] font-semibold mb-8">Our Impact</h1>
          <p className="text-[24px] mb-4">
            Empowering your success with our passion
          </p>
          <div className="text-[19px] mb-8">
            <p>Expertise and dedication led to unparalleled success in 2022.</p>
            <p>Expand your brand with accelerated growth strategies.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4  grid-cols-1 text-center">
            <div>
              <h1 className="text-[80px] font-extrabold">$2B</h1>
              <p className="text-[19px]">
                Managed Portfolio Worth $2 Billion in 2022
              </p>
            </div>
            <div>
              <h1 className="text-[80px] font-extrabold">14x</h1>
              <p className="text-[19px]">
                Achieved Average ROAS of 14x in 2022
              </p>
            </div>
            <div>
              <h1 className="text-[80px] font-extrabold">50+</h1>
              <p className="text-[19px]">
                Proficient in 50+ Retail and Wholesale Categories
              </p>
            </div>
            <div>
              <h1 className="text-[80px] font-extrabold">45%</h1>
              <p className="text-[19px]">45% Increase in Profitability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
