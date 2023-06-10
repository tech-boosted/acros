import React from "react";

const Section3 = () => {
  return (
    <div className="w-full h-fit flex items-center text-desc-custom ">
      <div className="h-fit  bg-gradient-to-tr from-green-300 via-cyan-300 to-cyan-500 py-8  text-black px-[10%]">
        <div>
          <h2 className="font-satoshi-bold text-title-custom md:text-right text-left mb-10">Our Values</h2>
          <p className=" mb-10">
            At Acros, we believe in accelerating your brand growth with
            innovative <br /> marketing solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8 text-[19px] mb-16">
          <div className="flex-col ">
            <p className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-medium mb-4">Integrity</p>
            <p className="text-desc-custom ">
              Being honest, transparent, and ethical in all business dealings
              are our top priority, We treat customers, employees, and
              stakeholders with respect and fairness.
            </p>
          </div>
          <div className="flex-col ">
            <p className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-medium mb-4">Collaboration</p>
            <p className="text-desc-custom ">
              We understand the importance of working together to achieve shared
              goals. Fostering a culture of teamwork and open communication
              among its employees.
            </p>
          </div>
          <div className="flex-col ">
            <p className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-medium mb-4">Innovation</p>
            <p className="text-desc-custom ">
              We value innovation and always striving to be on the cutting edge
              of its industry, embracing new technologies and ways of doing
              things to stay ahead of the competition.
            </p>
          </div>
          <div className="flex-col ">
            <p className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-medium mb-4">Customer Focus</p>
            <p className="text-desc-custom ">
              We’re a customer-focused company who puts the needs of its clients
              at the forefront of everything it does, striving to deliver
              exceptional products and services that meet or exceed their
              expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
