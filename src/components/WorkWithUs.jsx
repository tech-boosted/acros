import React from "react";

const WorkWithUs = () => {
  return (
    <div className="md:w-[70vw] w-[90vw] m-auto block md:mt-[130px] mt-[60px]">
      <div className="rounded-[30px] md:p-[50px] p-[20px] m-auto block md:h-[55vh] h-fit text-white md:w-[70vw] w-[90vw] bg-gradient-to-r from-[#A422E5] to-[#0044ff]">
        <section className="flex justify-between items-center">
          <div>
            <p className="md:text-[45px] text-[32px] font-bold">Work With Us</p>
          </div>
        </section>
        <div className="my-10 md:w-[70%] w-[100%] text-[18px]">
          <p>
            Looking to take your e-commerce business to the next level? Let our
            team of indigenous advertising specialists help you build tailored
            strategies and tech stacks that drive success.
          </p>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-10">
          <div>
            <p className="text-[18px]">
              Hire to best agents and outsource your Advertising Operations to
              specialists.
            </p>
          </div>
          <div>
            <p className="text-[18px]">
              Grow your business with a team of indigenous e-commerce
              Advertising Experts.
            </p>
          </div>
          <div>
            <p className="text-[18px]">
              Build tailored strategies and tech stack to increase your
              profitability
            </p>
          </div>
          <div>
            <p className="text-[18px] mb-[10px]">
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
