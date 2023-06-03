import React from "react";

const Perks = () => {
  return (
    <div className="bg-gradient-to-r from-[#AA00FF] to-[#0044FF]  w-full h-fit px-12 py-10  rounded-[30px] text-white mt-16 text-desc-custom">
      <h2 className="mb-10 md:text-title-custom text-title-custom-mv font-satoshi-bold">
        Perks
      </h2>
      <p className="text-right">
        We are building a neo gen culture at Acros. With our empathetic and{" "}
        <br /> entrepreneurial practices, we are breaking all the moulds of
        corporate structure and <br /> creating a fluid workplace where
        creativity finds its flight.
      </p>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-10">
        <div>
          <h2 className="md:text-subtitle-custom text-subtitle-custom-mv mb-4 ">
            Equal Pay
          </h2>
          <p>
            Our salary and compensation is merit based regardless of gender or
            geography.
          </p>
        </div>
        <div>
          <h2 className="md:text-subtitle-custom text-subtitle-custom-mv leading-7 mb-4">

          Health and Wellness Benefits
          </h2>
          <p>


          Our leadership and human resources team run a well connected program to drive physical and mental health initiatives.
          </p>
        </div>
        <div>
          <h2 className="md:text-subtitle-custom text-subtitle-custom-mv mb-4">


          Career Development
          </h2>
          <p>




          We promote entrepreneurship or learning curves and encourage our utilize companies resources to realize their growth.
          </p>
        </div>
        <div>
          <h2 className="md:text-subtitle-custom text-subtitle-custom-mv mb-4">


          International Exposure
          </h2>
          <p>




          We enable regular international travelling opportunities to participate in conferences, events and meet up events.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Perks;
