import React from "react";
import Trustedlogo1 from "../assests/acros-media/Trusted-By-1.png";
import Trustedlogo2 from "../assests/acros-media/Trusted-By-2.png";
import Trustedlogo3 from "../assests/acros-media/Trusted-By-3.png";
import Trustedlogo4 from "../assests/acros-media/Trusted-By-4.png";
import Trustedlogo5 from "../assests/acros-media/Trusted-By-5.png";
import Trustedlogo6 from "../assests/acros-media/Trusted-By-6.png";

import logo1 from "../assests/acros-media/Frame-130.jpg";
import logo2 from "../assests/acros-media/Frame-131.jpg";
import logo3 from "../assests/acros-media/download.png";
import logo4 from "../assests/acros-media/Frame-133.jpg";
import logo5 from "../assests/acros-media/Frame-134.jpg";
import logo6 from "../assests/acros-media/Frame-135.png";
import logo7 from "../assests/acros-media/Frame-136.jpg";
import logo8 from "../assests/acros-media/Frame-137.jpg";
import logo9 from "../assests/acros-media/Frame-138.jpg";
import logo10 from "../assests/acros-media/truskin-logo.png";
import logo11 from "../assests/acros-media/Frame-140.jpg";
import logo12 from "../assests/acros-media/Frame-141.jpg";
import logo13 from "../assests/acros-media/Frame-142.jpg";
import logo14 from "../assests/acros-media/Reckitt-Logo-1.png";
import logo15 from "../assests/acros-media/Frame-145.jpg";


import EcommerceLogo1 from "../assests/acros-media/E-Commerce-Platform-Expertise-1.png";
import EcommerceLogo2 from "../assests/acros-media/E-Commerce-Platform-Expertise-2.png";
import EcommerceLogo3 from "../assests/acros-media/E-Commerce-Platform-Expertise-3.png";
import EcommerceLogo4 from "../assests/acros-media/E-Commerce-Platform-Expertise-4.png";
import EcommerceLogo5 from "../assests/acros-media/E-Commerce-Platform-Expertise-5.png";
import EcommerceLogo6 from "../assests/acros-media/E-Commerce-Platform-Expertise-6.png";

import AdsLogo1 from "../assests/acros-media/Advertising-Platform-Expertise-1.png"
import AdsLogo2 from "../assests/acros-media/Advertising-Platform-Expertise-2.png"
import AdsLogo3 from "../assests/acros-media/Advertising-Platform-Expertise-3.png"
import AdsLogo4 from "../assests/acros-media/Advertising-Platform-Expertise-4.png"
import AdsLogo5 from "../assests/acros-media/Advertising-Platform-Expertise-5.png"
import AdsLogo6 from "../assests/acros-media/Advertising-Platform-Expertise-6.png"


// import Slider from "../components/Slider";

const Partners = () => {
  return (
    <div className="w-full text-desc-custom">
      <div className="my-10 md:text-title-custom text-title-custom-mv text-center font-satoshi-bold">
        <p>We Are The World’s Leading</p>
        <p>E-Commerce Operations Partner</p>
      </div>
      <div className="my-10 text-center ">
        <span className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-bold ">Trusted By</span>
        <p className=" mt-8">
          With a reputation for excellence, we’re the trusted
        </p>
        <p className=" mb-8">
          e-commerce operations partner for businesses of all sizes.
        </p>
      </div>
      <div className="my-10 w-full bg-gradient-to-r from-[#aa00ff] from-73% to-[#0044ff] rounded-[30px] grid md:grid-cols-6 grid-cols-1  md:justify-center gap-8 px-5 items-center">
        <img
          src={Trustedlogo1}
          alt="clever click 360"
          className="w-[130px] block m-auto"
        />
        <img
          src={Trustedlogo2}
          alt="pie analysis"
          className="w-[226px] block m-auto"
        />
        <img src={Trustedlogo3} alt="sidle" className="w-[107px] block m-auto" />
        <img src={Trustedlogo4} alt="tetramind" className="w-[171px] block m-auto" />
        <img src={Trustedlogo5} alt="wake" className="w-[117px] block m-auto" />
        <img src={Trustedlogo6} alt="xp strategy" className="w-[128px] block m-auto" />
      </div>

      {/* Slider is the automatic carousel thing*/}
      {/* <Slider/> */}

      <div className="w-full grid md:grid-cols-5 md:grid-row-3  grid-cols-1">
        <div className="border-2 border-black  md:border-t-0 md:border-r-0 border-b-0 flex justify-center items-center p-3">
          <img src={logo1} alt="mattle" />
        </div>
        <div className="border-2 border-black  md:border-t-0 md:border-r-0 border-b-0 flex justify-center items-center p-3">
          <img src={logo2} alt="mattle" />
        </div>
        <div className="border-2 border-black  md:border-t-0 md:border-r-0 border-b-0 flex justify-center items-center p-3">
          <img src={logo3} alt="mattle" />
        </div>
        <div className="border-2 border-black  md:border-t-0 md:border-r-0 border-b-0 flex justify-center items-center p-3">
          <img src={logo4} alt="mattle" />
        </div>
        <div className="border-2 border-black  md:border-t-0  border-b-0 flex justify-center items-center p-3">
          <img src={logo5} alt="mattle" />
        </div>
        <div className="border-2 border-black   md:border-r-0 border-b-0 flex justify-center items-center p-3">
          <img src={logo6} alt="mattle" />
        </div>
        <div className="border-2 border-black   md:border-r-0 border-b-0 flex justify-center items-center p-3">
          <img src={logo7} alt="mattle" />
        </div>
        <div className="border-2 border-black  md:border-r-0 border-b-0 flex justify-center items-center p-3">
          <img src={logo8} alt="mattle" />
        </div>
        <div className="border-2 border-black   md:border-r-0 border-b-0 flex justify-center items-center p-3">
          <img src={logo9} alt="mattle" />
        </div>
        <div className="border-2 border-black   border-b-0 flex justify-center items-center p-3">
          <img src={logo10} alt="mattle" />
        </div>
        <div className="border-2 border-black   md:border-r-0 border-b-0 flex justify-center items-center p-3">
          <img src={logo11} alt="mattle" />
        </div>
        <div className="border-2 border-black   md:border-r-0 border-b-0 flex justify-center items-center p-3">
          <img src={logo12} alt="mattle" />
        </div>
        <div className="border-2 border-black   md:border-r-0 border-b-0 flex justify-center items-center p-3">
          <img src={logo13} alt="mattle" />
        </div>
        <div className="border-2 border-black   md:border-r-0 border-b-0 flex justify-center items-center p-3">
          <img src={logo14} alt="mattle" />
        </div>
        <div className="border-2 border-black    md:border-b-0 flex justify-center items-center p-3">
          <img src={logo15} alt="mattle" />
        </div>
      </div>


      <div className="w-full text-center my-20">
        <h2 className="md:text-title-custom text-title-custom-mv font-satoshi-bold mb-8">
          E-Commerce Platform Expertise
        </h2>
        <p className="">
          Maximize your online potential with our e-commerce platform expertise.
        </p>

        <div className="my-10 md:h-[100px] w-full bg-gradient-to-r from-[#aa00ff] from-73% to-[#0044ff] rounded-[30px] grid md:grid-cols-6 grid-cols-1  md:justify-center gap-8 px-5 items-center">
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

      <div className="w-full text-center my-20">
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
          <img
            src={AdsLogo2}
            alt="pie analysis"
            className=" block m-auto"
          />
          <img src={AdsLogo3} alt="sidle" className="block m-auto" />
          <img src={AdsLogo4} alt="tetramind" className=" block m-auto" />
          <img src={AdsLogo5} alt="wake" className="block m-auto" />
          <img
            src={AdsLogo6}
            alt="xp strategy"
            className=" block m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
