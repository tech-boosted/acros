import React from "react";
import stars from "../../assests/acros-media/starts.png";

export const Section4 = () => {
  return (
    <div className="w-screen h-fit px-[10%] bg-gradient-to-r from-[#00112B] from-0% to-[#000103] to-50% text-white py-24 mb-10">
      <section className="flex justify-between items-center">
        <div>
          <p className=" md:text-title-custom text-title-custom-mv font-satoshi-bold">
            Work With Us
          </p>
        </div>
      </section>
      <div className="my-10 md:w-[85%] w-[100%] ">
        <p className="font-satoshi-bold leading-loose">
          Looking to take your e-commerce business to the next level? Let our
          team of indigenous advertising specialists help you build tailored
          strategies and tech stacks that drive success.
        </p>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-10 ">
          <div>
            <p className="pr-8 font-satoshi-bold leading-loose">
              Hire to best agents and outsource your Advertising Operations to
              specialists.
            </p>
          </div>
          <div>
            <p className="pr-8 font-satoshi-bold leading-loose">
              Grow your business with a team of indigenous e-commerce
              Advertising Experts.
            </p>
          </div>
          <div>
            <p className="pr-8 font-satoshi-bold leading-loose">
              Build tailored strategies and tech stack to increase your
              profitability
            </p>
          </div>
          <div>
            <p className="pr-8 font-satoshi-bold leading-loose mb-[10px]">
              Expand to multi-channel Advertising Operations with immediate
              results.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="md:text-title-custom text-title-custom-mv font-bold font-satoshi-bold mb-10">
          Innovative Solutions, Exceptional Service: <br />
          What Our Clients Are Saying About Acros
        </h2>
        <div className="grid h-fit md:grid-cols-2 grid-cols-1 gap-4 text-center">
          <div className="flex-col justify-around items-center  mt-5">
            <div className="w-full my-4">
              <img src={stars} className="m-auto block " alt="stars" />
            </div>
            <h2 className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-bold mb-4">
              “Words of Appreciation for Team”
            </h2>
            <p className=" mb-4 text-[#bfbfbf]">
              Just wanted to take a moment to say how much I’ve appreciated the
              entire Acros team! I love how Czar is proactive and supportive in
              meeting our company’s needs, and the team members with us have
              done great work for our clients. We’re really looking forward to
              growing together in the coming months and years.
            </p>
            <p>Abe C Chomali</p>
            <p>Founder.</p>
            <p>XP Strategy</p>
          </div>
          <div className="flex-col justify-around items-center  mt-5">
            <div className="w-full my-4">
              <img src={stars} className="m-auto block " alt="stars" />
            </div>
            <h2 className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-bold mb-4">
              “Layered Expertise in Google Ads”
            </h2>
            <p className=" mb-4 text-[#bfbfbf]">
              Experts in Google Advertising. The entire team of Acros has deep
              and layered expertise in using Google to its best performance
              levels to drive sales to e-commerce channels. We are working with
              Acros for 4 years now and they will play an important part in our
              operations in future as well.
            </p>
            <p>Adam S.</p>
            <p>Delivery Head-Retail.</p>
            <p>Google Advertising.</p>
          </div>
          <div className="flex-col justify-around items-center  mt-5">
            <div className="w-full my-4">
              <img src={stars} className="m-auto block " alt="stars" />
            </div>
            <h2 className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-bold mb-4">
              “Efficient with Execution ”
            </h2>
            <p className=" mb-4 text-[#bfbfbf]">
              It's been great working with Acros. They add great value to our
              Amazon Operations with their subject knowledge and execution
              efficiency. Acros's operational excellence has given us the
              confidence to grow our operations 7x in the last 2 years.
            </p>
            <p>Elizabeth Hamilton,</p>
            <p>VP of Adverting.</p>
            <p>PPC Experts.</p>
          </div>
          <div className="flex-col justify-around items-center  mt-5">
            <div className="w-full my-4">
              <img src={stars} className="m-auto block " alt="stars" />
            </div>
            <h2 className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-bold mb-4">
              “Visionary Thinker”
            </h2>
            <p className=" mb-4 text-[#bfbfbf]">
              I've known Czar for several years now. He's one of the clearest
              thinkers I know and is able to articulate how the multitude of
              moving parts in e-commerce fit together at both a macro and micro
              level. This, of course, includes the Amazon Marketplace.
            </p>
            <p>Brent Zahradnik</p>
            <p>Founder.</p>
            <p>AMZ Pathfinder</p>
          </div>
        </div>
      </div>

    </div>
  );
};
