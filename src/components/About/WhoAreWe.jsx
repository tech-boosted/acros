import React from "react";

const WhoAreWe = () => {
  return (
    <div className="w-fullm-auto block text-desc-custom">
      <div className="md:my-[80px] my-[50px]">
        <h2 className="text-title-custom font-satoshi-bold">We are Acros</h2>
        <p className="">
          We are a team of ex-Amazon, Google and Meta executives who make a
          bigger impact in the e- <br /> commerce industry via thought
          leadership and client servicing. A proven leader in the industry that{" "}
          <br /> believes in providing end-to-end advertising solutions for your
          business growth across multiple channels.
        </p>
      </div>
      <div className="h-fit py-[90px] ">
        <div className="h-[60%] flex md:flex-row flex-col">
          <div className="text-title-custom-mv md:text-title-custom  font-satoshi-bold w-[50%]">
            About Us
          </div>
          <div className="md:w-[50%] w-full mb-10 flex items-center">
            We’re passionate about helping businesses succeed in the fast <br />{" "}
            -paced world of e-commerce. Our team of experts is dedicated to{" "}
            <br /> providing personalized, end-to-end advertising solutions that{" "}
            <br /> deliver measurable results and drive growth for your brand.
          </div>
        </div>

        <div className=" grid md:grid-cols-4 grid-cols-1 gap-12 text-center">
          <div className="flex-col ">
            <p className="text-title-custom-mv md:text-title-custom font-satoshi-bold">
              10+
            </p>
            <p className="font-satoshi-medium">
              Diverse Mastery of Advertising & Marketing Disciplines
            </p>
          </div>
          <div className="flex-col ">
            <p className="text-title-custom-mv md:text-title-custom font-satoshi-bold">
              12+
            </p>
            <p className="font-satoshi-medium">
              Backed by over a Decade of Expertise in the E-commerce Industry
            </p>
          </div>
          <div className="flex-col ">
            <p className="text-title-custom-mv md:text-title-custom font-satoshi-bold">
              70+
            </p>
            <p className="font-satoshi-medium">
              Evergrowing Talent Pool of Advertisers who are Thoroughbreds in
              E-commerce Advertising.
            </p>
          </div>
          <div className="flex-col ">
            <p className="text-title-custom-mv md:text-title-custom font-satoshi-bold">
              $12B
            </p>
            <p className="font-satoshi-medium">Revenue Generation Across Multiple Channels</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
