import React from "react";
import logo1 from "../assests/acros-media/Trusted-By-1.png";
import logo2 from "../assests/acros-media/Trusted-By-2.png";
import logo3 from "../assests/acros-media/Trusted-By-3.png";
import logo4 from "../assests/acros-media/Trusted-By-4.png";
import logo5 from "../assests/acros-media/Trusted-By-5.png";
import logo6 from "../assests/acros-media/Trusted-By-6.png";
import Slider from "../components/Slider";
import grid1 from "../assests/acros-media/Mattel-brand.png";

const Partners = () => {
  return (
    <div className="w-full text-desc-custom">
      <div className="my-10 md:text-title-custom text-title-custom-mv text-center font-bold">
        <p>We Are The World’s Leading</p>
        <p>E-Commerce Operations Partner</p>
      </div>
      <div className="my-10 text-center ">
        <span className="text-subtitle-custom-mv md:text-subtitle-custom font-bold ">Trusted By</span>
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
        <img src={logo6} alt="xp strategy" className="w-[128px] block m-auto" />
      </div>

      <Slider/>

      <div className="w-full text-center my-20">
        <h2 className="md:text-title-custom text-title-custom-mv font-bold mb-8">
          E-Commerce Platform Expertise
        </h2>
        <p className="">
          Maximize your online potential with our e-commerce platform expertise.
        </p>

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

      <div className="w-full text-center my-20">
        <h2 className="md:text-title-custom text-title-custom-mv font-bold mb-8">
          Advertising Platform Expertise
        </h2>
        <p className="">
          Multi-platform ad management for optimal results.
          <br />
          Drive results with our advertising platform mastery.
        </p>

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
    </div>
  );
};

export default Partners;
