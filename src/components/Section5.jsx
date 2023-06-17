import React from "react";
import stars from "../assests/acros-media/starts.png";
const Section5 = () => {
  return (
    <div className="w-screen">
      <div className="font-satoshi-bold my-10 w-[92%] rounded-[30px] px-10 h-fit bg-gradient-to-tr from-green-300 via-cyan-300 to-cyan-500 mx-auto py-24  text-center text-desc-custom ">
        <h2 className="md:text-title-custom text-title-custom-mv font-bold mb-10">
          Innovative Solutions, Exceptional Service: <br />
          What Our Clients Are Saying About Acros
        </h2>
        <div className="w-[80%] mx-auto grid h-fit md:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex-col justify-around items-center  mt-5">
            <div className="w-full my-4">
              <img src={stars} className="m-auto block " alt="stars" />
            </div>
            <h2 className="text-subtitle-custom-mv md:text-subtitle-custom  mb-4 ">
              “Words of Appreciation for Team”
            </h2>
            <p className=" mb-4 font-satoshi-regular">
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
            <p className=" mb-4 font-satoshi-regular">
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
            <p className=" mb-4 font-satoshi-regular">
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
            <p className=" mb-4 font-satoshi-regular">
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

export default Section5;
