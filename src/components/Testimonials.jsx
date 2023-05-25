import React from "react";
import stars from "../assests/acros-media/starts.png";
const Testimonials = () => {
  return (
    <div className="my-10 md:w-[70vw] w-[90vw] block m-auto text-center">
      <h2 className="text-[45px] font-bold mb-10">
        Innovative Solutions, Exceptional Service: <br />
        What Our Clients Are Saying About Acros
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex-col justify-around items-center text-[19px] mt-5">
          <div className="w-full my-4">
            <img src={stars} className="m-auto block " alt="stars" />
          </div>
          <h2 className="text-[25px] mb-4">“Words of Appreciation for Team”</h2>
          <p className="text-[19px] mb-4">
            Just wanted to take a moment to say how much I’ve appreciated the
            entire Acros team! I love how Czar is proactive and supportive in
            meeting our company’s needs, and the team members with us have done
            great work for our clients. We’re really looking forward to growing
            together in the coming months and years.
          </p>
          <p>Abe C Chomali</p>
          <p>Founder.</p>
          <p>XP Strategy</p>
        </div>
        <div className="flex-col justify-around items-center text-[19px] mt-5">
          <div className="w-full my-4">
            <img src={stars} className="m-auto block " alt="stars" />
          </div>
          <h2 className="text-[25px] mb-4">
            “Layered Expertise in Google Ads”
          </h2>
          <p className="text-[19px] mb-4">
            Experts in Google Advertising. The entire team of Acros has deep and
            layered expertise in using Google to its best performance levels to
            drive sales to e-commerce channels. We are working with Acros for 4
            years now and they will play an important part in our operations in
            future as well.
          </p>
          <p>Adam S.</p>
          <p>Delivery Head-Retail.</p>
          <p>Google Advertising.</p>
        </div>
        <div className="flex-col justify-around items-center text-[19px] mt-5">
          <div className="w-full my-4">
            <img src={stars} className="m-auto block " alt="stars" />
          </div>
          <h2 className="text-[25px] mb-4">“Efficient with Execution ”</h2>
          <p className="text-[19px] mb-4">
            It's been great working with Acros. They add great value to our
            Amazon Operations with their subject knowledge and execution
            efficiency. Acros's operational excellence has given us the
            confidence to grow our operations 7x in the last 2 years.
          </p>
          <p>Elizabeth Hamilton,</p>
          <p>VP of Adverting.</p>
          <p>PPC Experts.</p>
        </div>
        <div className="flex-col justify-around items-center text-[19px] mt-5">
          <div className="w-full my-4">
            <img src={stars} className="m-auto block " alt="stars" />
          </div>
          <h2 className="text-[25px] mb-4">“Visionary Thinker”</h2>
          <p className="text-[19px] mb-4">
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
  );
};

export default Testimonials;
