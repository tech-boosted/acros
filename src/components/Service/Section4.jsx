import React from "react";
import stars from "../../assests/acros-media/starts.png";

export const Section4 = () => {
  return (
    <>
    <div className="w-full h-fit px-[10%] py-10 ">
       <h2 className="text-title-custom font-satoshi-bold ">We are Acros</h2>
        <p className="">
          We are a team of ex-Amazon, Google and Meta executives who make a
          bigger impact in the e- <br /> commerce industry via thought
          leadership and client servicing. A proven leader in the industry that{" "}
          <br /> believes in providing end-to-end advertising solutions for your
          business growth across multiple channels.
        </p>
    </div>
    <div className="w-full h-fit px-[10%] bg-gradient-to-r from-[#00112B] from-0% to-[#000103] to-50% text-white py-10 mb-10">
       
      <div className="">


      <div className="bg-gradient-to-tr from-[#0e6968]  via-[#25153d]  to-[#000] to-[80%]  w-full h-fit px-12 py-10  rounded-[30px] text-white mt-16 text-desc-custom">
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

        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-10 ">
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

      <div className="mt-20">
        <h2 className="md:text-title-custom text-title-custom-mv font-bold mb-10">
          Innovative Solutions, Exceptional Service: <br />
          What Our Clients Are Saying About Acros
        </h2>
        <div className="grid h-fit md:grid-cols-2 grid-cols-1 gap-4 text-center">
          <div className="flex-col justify-around items-center  mt-5">
            <div className="w-full my-4">
              <img src={stars} className="m-auto block " alt="stars" />
            </div>
            <h2 className="text-subtitle-custom-mv md:text-subtitle-custom  mb-4">
              “Words of Appreciation for Team”
            </h2>
            <p className=" mb-4">
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
            <h2 className="text-subtitle-custom-mv md:text-subtitle-custom  mb-4">
              “Layered Expertise in Google Ads”
            </h2>
            <p className=" mb-4">
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
            <h2 className="text-subtitle-custom-mv md:text-subtitle-custom  mb-4">
              “Efficient with Execution ”
            </h2>
            <p className=" mb-4">
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
            <h2 className="text-subtitle-custom-mv md:text-subtitle-custom  mb-4">
              “Visionary Thinker”
            </h2>
            <p className=" mb-4">
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

    </div>
    </>

  );
};
