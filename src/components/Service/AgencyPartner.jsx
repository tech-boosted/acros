import React from "react";
import TechStackLogo1 from "../../assests/acros-media/TechStack-1.png";
import TechStackLogo2 from "../../assests/acros-media/TechStack-2.png";
import TechStackLogo3 from "../../assests/acros-media/TechStack-3.png";
import TechStackLogo4 from "../../assests/acros-media/TechStack-4.png";
import TechStackLogo5 from "../../assests/acros-media/TechStack-5.png";
import TechStackLogo6 from "../../assests/acros-media/TechStack-6.png";
import TechStackLogo7 from "../../assests/acros-media/TechStack-7.png";
import Partners from "../Partners";
import Connect from "../Connect";
import Specializations from "./Specialization";

const AgencyPartner = () => {
  return (
    <div className="w-full h-fit text-desc-custom">
      <div className="h-fit w-full rounded-[30px] bg-gradient-to-r from-[#AA00FF] to-[#0044FF] py-8 px-12 mt-10 text-white">
        <div className="h-[60%] font-satoshi-bold text-right mb-10 text-title-custom">
          <p>Agency Partners</p>
        </div>
        <div className="text-left flex-col justify-end gap-12">
          <span className="">/about/</span>
          <p className="mt-6">
            Our adverstising agency companies throughbred e-commerce Advertising
            Experts who can create <br />
            conversion focused ad campaigns and strategies that resonate with
            the e-commerce target <br />
            audience. They work with highly efficient customer behaviour
            patterns, buyers mind mapping and <br />
            decision influencing tools to deliver gold-standard ROI.
          </p>
        </div>
      </div>

      <div className=" flex items-center justify-center text-desc-custom ">
        <div className="my-[120px] w-full  text-right">
          <h1 className="md:text-title-custom text-title-custom-mv font-satoshi-bold mb-8 uppercase">
            Your Ads managed by indegenous <br /> e commerce advertisers.
          </h1>

          <div className=" mb-8">
            <p>
              A team of ex-Amazon, Google and Meta executives, who know the
              machinery and balance of <br />
              e-commerce and advertising. Indigenous and thoroughbred
              advertising specialist drive your <br /> brand with tailored
              strategies and effective tech stack.
            </p>
            <p>Expand your brand with accelerated growth strategies.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4  grid-cols-1 text-center">
            <div>
              <h1 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                $2B
              </h1>
              <p className="font-satoshi-medium">
                Managed Portfolio Worth $2 Billion in 2022
              </p>
            </div>
            <div>
              <h1 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                14x
              </h1>
              <p className="font-satoshi-medium">
                Achieved Average ROAS of 14x in 2022
              </p>
            </div>
            <div>
              <h1 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                50+
              </h1>
              <p className="font-satoshi-medium">
                Proficient in 50+ Retail and Wholesale Categories
              </p>
            </div>
            <div>
              <h1 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                45%
              </h1>
              <p className="font-satoshi-medium">
                45% Increase in Profitability
              </p>
            </div>
          </div>
        </div>
      </div>

      <Specializations />

      <Partners />

      <div className="w-full my-10 text-center text-desc-custom">
        <h2 className="md:text-title-custom text-title-custom-mv font-bold mt-20">
          Tech Stack
        </h2>
        <p className=" my-10">
          A group of technologies that marketers leverage to conduct <br />
          and improve their marketing activities.
        </p>
        <div className="my-10 w-full bg-gradient-to-r from-[#aa00ff] from-73% to-[#0044ff] rounded-[30px] grid md:grid-cols-7 grid-cols-1  md:justify-center md:gap-8 gap-8 px-8 py-2 items-center">
          <img
            src={TechStackLogo1}
            alt="clever click 360"
            className=" block m-auto h-[50px]"
          />
          <img
            src={TechStackLogo2}
            alt="pie analysis"
            className=" block m-auto md:h-fit h-[40px]"
          />
          <img
            src={TechStackLogo3}
            alt="sidle"
            className=" block m-auto md:h-fit h-[30px]"
          />
          <img
            src={TechStackLogo4}
            alt="tetramind"
            className=" block m-auto md:h-fit h-[35px]"
          />
          <img
            src={TechStackLogo5}
            alt="wake"
            className=" block m-auto md:h-fit h-[40px]"
          />
          <img
            src={TechStackLogo6}
            alt="xp strategy"
            className=" block m-auto md:fit h-[40px]"
          />
          <img
            src={TechStackLogo7}
            alt="xp strategy"
            className=" block m-auto md:h-fit w-[60%] "
          />
        </div>
      </div>

      <Connect />
    </div>
  );
};

export default AgencyPartner;
