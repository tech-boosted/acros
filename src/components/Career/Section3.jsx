import React from "react";

const Section3 = () => {
  return (
    <div className="w-screen ">
      <div className="bg-gradient-to-tr from-[#0e6968]  via-[#25153d]  to-[#000] to-[80%] w-full py-[10%] h-fit px-[10%] mb-10 text-white  text-desc-custom mx-auto">
        <h2 className="text-title-large text-center font-satoshi-bold">
          Perks
        </h2>
        <p className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-bold mb-3 mt-4 text-center">
          We are building a neo gen culture at Acros. With our empathetic and{" "}
          <br /> entrepreneurial practices, we are breaking all the moulds of
          corporate structure and <br /> creating a fluid workplace where
          creativity finds its flight.
        </p>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8 mt-16 ">
          <div>
            <h2 className="font-satoshi-bold text-subtitle-custom mb-4 ">
              Equal Pay
            </h2>
            <p>
              Our salary and compensation is merit based regardless of gender or
              geography.
            </p>
          </div>
          <div>
            <h2 className="font-satoshi-bold text-subtitle-custom leading-7 mb-4">
              Health and Wellness Benefits
            </h2>
            <p>
              Our leadership and human resources team run a well connected
              program to drive physical and mental health initiatives.
            </p>
          </div>
          <div>
            <h2 className="font-satoshi-bold text-subtitle-custom mb-4">
              Career Development
            </h2>
            <p>
              We promote entrepreneurship or learning curves and encourage our
              utilize companies resources to realize their growth.
            </p>
          </div>
          <div>
            <h2 className="font-satoshi-bold text-subtitle-custom mb-4">
              International Exposure
            </h2>
            <p>
              We enable regular international travelling opportunities to
              participate in conferences, events and meet up events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
