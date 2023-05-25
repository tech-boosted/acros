import React from "react";

const WhoAreWe = () => {
  return (
    <div className="w-[70vw] m-auto block">
      <div className="my-[80px]">
        <h2 className="text-[130px] font-bold">We are Acros</h2>
        <p className="text-[19px] text-gray-500">
          We are a team of ex-Amazon, Google and Meta executives who make a
          bigger impact in the e- <br /> commerce industry via thought
          leadership and client servicing. A proven leader in the industry that{" "}
          <br /> believes in providing end-to-end advertising solutions for your
          business growth across multiple channels.
        </p>
      </div>
      <div className="h-screen py-[90px] ">
        <div className="h-[60%] flex">
          <div className="text-[72px]  font-bold w-[50%]">About Us</div>
          <div className="w-[50%] flex items-center">
            We’re passionate about helping businesses succeed in the fast <br />{" "}
            -paced world of e-commerce. Our team of experts is dedicated to{" "}
            <br /> providing personalized, end-to-end advertising solutions that{" "}
            <br /> deliver measurable results and drive growth for your brand.
          </div>
        </div>

        <div className=" grid grid-cols-4 gap-12">
          <div className="flex-col ">
            <p className="text-[80px] font-bold">10+</p>
            <p className="text-[18px]">
              Diverse Mastery of Advertising & Marketing Disciplines
            </p>
          </div>
          <div className="flex-col ">
            <p className="text-[80px] font-bold">12+</p>
            <p className="text-[18px]">
              Backed by over a Decade of Expertise in the E-commerce Industry
            </p>
          </div>
          <div className="flex-col ">
            <p className="text-[80px] font-bold">70+</p>
            <p className="text-[18px]">
              Evergrowing Talent Pool of Advertisers who are Thoroughbreds in
              E-commerce Advertising.
            </p>
          </div>
          <div className="flex-col ">
            <p className="text-[80px] font-bold">$12B</p>
            <p className="text-[18px]">
              Revenue Generation Across Multiple Channels
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
