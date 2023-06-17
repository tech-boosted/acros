import React from "react";

const Section2 = () => {
  return (
    <div className="w-screen">
      <div className="h-fit py-[90px] bg-[#e2e2e2] md:px-[15%] px-10">

        <div className="w-full mb-10 flex items-center font-satoshi-bold text-title-basic tracking-tight leading-snug">
          We’re passionate about helping businesses succeed in the fast-paced world of e-commerce. Our team of experts is dedicated to
          providing personalized, end-to-end advertising solutions that
          deliver measurable results and drive growth for your brand.
        </div>

        <div className=" grid md:grid-cols-4 grid-cols-1 gap-12 text-center">
          <div className="flex-col ">
            <p className="text-title-custom-mv md:text-title-custom font-satoshi-bold">
              10+
            </p>
            <p className="font-satoshi-medium leading-snug text-desc-custom">
              Diverse Mastery of Advertising & Marketing Disciplines
            </p>
          </div>
          <div className="flex-col ">
            <p className="text-title-custom-mv md:text-title-custom font-satoshi-bold">
              12+
            </p>
            <p className="font-satoshi-medium leading-snug text-desc-custom">
              Backed by over a Decade of Expertise in the E-commerce Industry
            </p>
          </div>
          <div className="flex-col ">
            <p className="text-title-custom-mv md:text-title-custom font-satoshi-bold">
              70+
            </p>
            <p className="font-satoshi-medium leading-snug text-desc-custom">
              Evergrowing Talent Pool of Advertisers who are Thoroughbreds in
              E-commerce Advertising.
            </p>
          </div>
          <div className="flex-col ">
            <p className="text-title-custom-mv md:text-title-custom font-satoshi-bold">
              $12B
            </p>
            <p className="font-satoshi-medium leading-snug text-desc-custom">
              Revenue Generation Across Multiple Channels
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
