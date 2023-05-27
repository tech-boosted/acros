import React from "react";

const WorkWithUs = () => {
  return (
    <div className="w-full md:mt-[130px] mt-[60px] text-desc-custom">
      <div className="rounded-[30px] md:p-[50px] p-[20px] md:h-[55vh] h-fit text-white w-full bg-gradient-to-r from-[#A422E5] to-[#0044ff]">
        <section className="flex justify-between items-center">
          <div>
            <p className=" md:text-title-custom text-title-custom-mv font-bold">
              Work With Us
            </p>
          </div>
        </section>
        <div className="my-10 md:w-[70%] w-[100%] ">
          <p>
            Looking to take your e-commerce business to the next level? Let our
            team of indigenous advertising specialists help you build tailored
            strategies and tech stacks that drive success.
          </p>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-10">
          <div>
            <p className="">
              Hire to best agents and outsource your Advertising Operations to
              specialists.
            </p>
          </div>
          <div>
            <p className="">
              Grow your business with a team of indigenous e-commerce
              Advertising Experts.
            </p>
          </div>
          <div>
            <p className="">
              Build tailored strategies and tech stack to increase your
              profitability
            </p>
          </div>
          <div>
            <p className=" mb-[10px]">
              Expand to multi-channel Advertising Operations with immediate
              results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
