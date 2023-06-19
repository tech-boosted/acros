import React from "react";
import Expertise from "../components/Service/Expertise";
import { BsArrowUpRight } from "react-icons/bs";

import logo1 from "../assests/acros-media/Trusted-By-1.png";
import logo2 from "../assests/acros-media/Trusted-By-2.png";
import logo3 from "../assests/acros-media/Trusted-By-3.png";
import logo4 from "../assests/acros-media/Trusted-By-4.png";
import logo5 from "../assests/acros-media/Trusted-By-5.png";
import logo6 from "../assests/acros-media/Trusted-By-6.png";

import EcommerceLogo1 from "../assests/acros-media/E-Commerce-Platform-Expertise-1.png";
import EcommerceLogo2 from "../assests/acros-media/E-Commerce-Platform-Expertise-2.png";
import EcommerceLogo3 from "../assests/acros-media/E-Commerce-Platform-Expertise-3.png";
import EcommerceLogo4 from "../assests/acros-media/E-Commerce-Platform-Expertise-4.png";
import EcommerceLogo5 from "../assests/acros-media/E-Commerce-Platform-Expertise-5.png";
import EcommerceLogo6 from "../assests/acros-media/E-Commerce-Platform-Expertise-6.png";

import AdsLogo1 from "../assests/acros-media/Advertising-Platform-Expertise-1.png";
import AdsLogo2 from "../assests/acros-media/Advertising-Platform-Expertise-2.png";
import AdsLogo3 from "../assests/acros-media/Advertising-Platform-Expertise-3.png";
import AdsLogo4 from "../assests/acros-media/Advertising-Platform-Expertise-4.png";
import AdsLogo5 from "../assests/acros-media/Advertising-Platform-Expertise-5.png";
import AdsLogo6 from "../assests/acros-media/Advertising-Platform-Expertise-6.png";

import Testimonials from "../components/Home/Section5";
import WorkWithUs from "../components/Home/Section10";
import Connect from "../components/Connect";

const Operations = () => {
  return (
    <div>
      <Expertise />

      <div className="w-screen px-[10%] h-fit my-10">
        <div className="h-[60%] flex  flex-col">
          <div className="uppercase text-title-custom-mv md:text-title-custom  font-satoshi-bold w-full">
            hire a pod, <br />
            increase your efficiency. <br /> reduce your operation expenses.
          </div>
          <div className=" w-full mb-10 flex items-center mt-10">
            Hire a Pod of Advertising Specialists and build an AdOps team to
            drive operations to maximum <br /> efficiency and consistent
            delivery. Subject Matter Experts in Advertising Operations to <br />{" "}
            support agencies of all size.
          </div>
        </div>

        <div className=" grid md:grid-cols-4 grid-cols-1 gap-12 text-center">
          <div className="flex-col ">
            <p className="text-title-custom-mv md:text-title-custom font-satoshi-bold">
              10+
            </p>
            <p className="font-satoshi-medium">
              Diverse Mastery of Advertising & Marketing Disciplines
            </p>
          </div>
          <div className="flex-col ">
            <p className="text-title-custom-mv md:text-title-custom font-satoshi-bold">
              12+
            </p>
            <p className="font-satoshi-medium">
              Backed by over a Decade of Expertise in the E-commerce Industry
            </p>
          </div>
          <div className="flex-col ">
            <p className="text-title-custom-mv md:text-title-custom font-satoshi-bold">
              70+
            </p>
            <p className="font-satoshi-medium">
              Evergrowing Talent Pool of Advertisers who are Thoroughbreds in
              E-commerce Advertising.
            </p>
          </div>
          <div className="flex-col ">
            <p className="text-title-custom-mv md:text-title-custom font-satoshi-bold">
              $12B
            </p>
            <p className="font-satoshi-medium">
              Revenue Generation Across Multiple Channels
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen px-[10%] h-fit text-center my-10">
        <h2 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
          Specialization
        </h2>
        <p className="mb-10 mt-8"> Unleashing your brand potential.</p>

        <div className="grid md:grid-cols-4 grid-cols-1 md:text-subtitle-custom text-subtitle-custom-mv gap-4 font-satoshi-bold">
          <div className="rounded-xl bg-gradient-to-r from-[#AA00FF] to-[#0044FF] py-4 md:px-4 px-4 text-white flex justify-between h-[120px]">
            <h2>PPC Ads</h2>
            <BsArrowUpRight className="self-end " />
          </div>
          <div className="rounded-xl bg-gradient-to-r from-[#AA00FF] to-[#0044FF] py-4 md:px-4 px-4 text-white flex justify-between h-[120px]">
            <h2>
              Paid Social <br /> Ads
            </h2>
            <BsArrowUpRight className="self-end " />
          </div>
          <div className="rounded-xl bg-gradient-to-r from-[#AA00FF] to-[#0044FF] py-4 md:px-4 px-4 text-white flex justify-between h-[120px] text-start">
            <h2>DSP Ads</h2>
            <BsArrowUpRight className="self-end " />
          </div>
          <div className="rounded-xl bg-gradient-to-r from-[#AA00FF] to-[#0044FF] py-4 md:px-4 px-4 text-white flex justify-between h-[120px]">
            <h2>Native Ads</h2>
            <BsArrowUpRight className="self-end " />
          </div>
        </div>
      </div>

      <div className="w-screen px-[10%] text-desc-custom my-10">
        <div className="my-10 text-center ">
          <span className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-bold ">
            Trusted By
          </span>
          <p className=" mt-8">
            With a reputation for excellence, we’re the trusted
          </p>
          <p className=" mb-8">
            e-commerce operations partner for businesses of all sizes.
          </p>
        </div>
        <div className="my-10 w-full bg-gradient-to-r from-[#aa00ff] from-73% to-[#0044ff] rounded-[30px] grid md:grid-cols-6 grid-cols-1  md:justify-center gap-8 px-5 items-center">
          <img
            src={logo1}
            alt="clever click 360"
            className="w-[130px] block m-auto"
          />
          <img
            src={logo2}
            alt="pie analysis"
            className="w-[226px] block m-auto"
          />
          <img src={logo3} alt="sidle" className="w-[107px] block m-auto" />
          <img src={logo4} alt="tetramind" className="w-[171px] block m-auto" />
          <img src={logo5} alt="wake" className="w-[117px] block m-auto" />
          <img
            src={logo6}
            alt="xp strategy"
            className="w-[128px] block m-auto"
          />
        </div>
      </div>

      <Testimonials />
      <WorkWithUs />

      <div className="w-screen px-[10%] my-10 grid md:grid-cols-4 grid-cols-1 text-desc-custom gap-4">
        <div className="flex-col">
          <h2 className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-bold mb-6">
            Immense Talent Pool
          </h2>
          <p>
            We have access to an immense talent pool, out of which we hire the
            best possible subject matter experts for the required capabilites.
          </p>
        </div>
        <div className="flex-col">
          <h2 className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-bold mb-6">
            Flexible Scalability
          </h2>
          <p>
            Client can choose to increase or decrease the size of your
            operations flexibility with no over complicated procedures or cost
            structures.
          </p>
        </div>
        <div className="flex-col">
          <h2 className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-bold mb-6">
            Proven Track Record
          </h2>
          <p>
            70% of our current clients are with us for more than 8 years. We are
            consistently and reliably adding value to leading global advertising
            agencies since 12+ years.
          </p>
        </div>
        <div className="flex-col">
          <h2 className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-bold mb-6">
            Rapid Scalability
          </h2>
          <p>
            Our robust forecasting system enables our clients with optimum level
            of readiness and deployment of faster engagement timeframes.
          </p>
        </div>
      </div>

      <div className="w-screen px-[10%] text-center my-20">
        <h2 className="md:text-title-custom text-title-custom-mv font-satoshi-bold mb-8">
          E-Commerce Platform Expertise
        </h2>
        <p className="">
          Maximize your online potential with our e-commerce platform expertise.
        </p>

        <div className="my-10 md:h-[100px] h-fit w-full bg-gradient-to-r from-[#aa00ff] from-73% to-[#0044ff] rounded-[30px] grid md:grid-cols-6 grid-cols-1  md:justify-center gap-8 px-5 items-center">
          <img
            src={EcommerceLogo1}
            alt="clever click 360"
            className=" block m-auto"
          />
          <img
            src={EcommerceLogo2}
            alt="pie analysis"
            className=" block m-auto"
          />
          <img src={EcommerceLogo3} alt="sidle" className="block m-auto" />
          <img src={EcommerceLogo4} alt="tetramind" className="block m-auto" />
          <img src={EcommerceLogo5} alt="wake" className="block m-auto" />
          <img
            src={EcommerceLogo6}
            alt="xp strategy"
            className=" block m-auto"
          />
        </div>
      </div>

      <div className="w-screen px-[10%] text-center my-20">
        <h2 className="md:text-title-custom text-title-custom-mv font-satoshi-bold mb-8">
          Advertising Platform Expertise
        </h2>
        <p className="">
          Multi-platform ad management for optimal results.
          <br />
          Drive results with our advertising platform mastery.
        </p>

        <div className="my-10 w-full bg-gradient-to-r from-[#aa00ff] from-73% to-[#0044ff] rounded-[30px] grid md:grid-cols-6 grid-cols-1  md:justify-center gap-8 px-5 items-center">
          <img
            src={AdsLogo1}
            alt="clever click 360"
            className=" block m-auto"
          />
          <img src={AdsLogo2} alt="pie analysis" className=" block m-auto" />
          <img src={AdsLogo3} alt="sidle" className="block m-auto" />
          <img src={AdsLogo4} alt="tetramind" className=" block m-auto" />
          <img src={AdsLogo5} alt="wake" className="block m-auto" />
          <img src={AdsLogo6} alt="xp strategy" className=" block m-auto" />
        </div>
      </div>

      <Connect />
    </div>
  );
};

export default Operations;
