import React from "react";
import logo1 from "../assests/acros-media/Trusted-By-1.png";
import logo2 from "../assests/acros-media/Trusted-By-2.png";
import logo3 from "../assests/acros-media/Trusted-By-3.png";
import logo4 from "../assests/acros-media/Trusted-By-4.png";
import logo5 from "../assests/acros-media/Trusted-By-5.png";
import logo6 from "../assests/acros-media/Trusted-By-6.png";
import map from "../assests/acros-media/Globe.png";

const TechStack = () => {
  return (
    <div className="w-full my-10 text-center text-desc-custom">
      <h2 className="md:text-title-custom text-title-custom-mv font-bold mt-20">Tech Stack</h2>
      <p className=" my-10">
        A group of technologies that marketers leverage to conduct <br />
        and improve their marketing activities.
      </p>
      <div className="my-10 w-full bg-gradient-to-r from-[#aa00ff] from-73% to-[#0044ff] rounded-[30px] grid md:grid-cols-6 grid-cols-1  md:justify-center md:gap-8 gap-2 px-5 items-center">
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

      <div className=" bg-gradient-to-r from-[#aa00ff] from-73% to-[#0044ff] rounded-[30px] p-[50px] justify-center items-center">
        <img
          src={
            "https://acros.co/wp-content/uploads/2023/05/FINAL-MAP-1024x510.png"
          }
          alt="geographical map"
          className="w-800 m-0"
        />
      </div>
      <div className=" flex items-center justify-center  ">
        <div className="my-16 w-full text-right">
          <h1 className="md:md:text-title-custom text-title-custom-mv  font-bold mb-8">
            Geographical Presence
          </h1>
          <p className="text-subtitle-custom-mv md:text-subtitle-custom mb-8">
            Deep understanding of worldwide marketplaces and local consumer
            behaviors.
          </p>
          <div className=" mb-8">
            <p>
              We have developed targeted marketing campaigns that resonate with
              diverse customer segments. By <br /> tailoring their messaging and
              promotions to specific regions and cultures, we build brand
              loyalty and <br /> generate sales effectively.
            </p>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-1 gap-4 text-center">
            <div>
              <h1 className="md:text-title-custom text-title-custom-mv font-extrabold">150+</h1>
              <p className="">
                Extensive Experience with Top E-commerce Brands
              </p>
            </div>
            <div>
              <h1 className="md:text-title-custom text-title-custom-mv font-extrabold">15+</h1>
              <p className="">
                Expanding Horizons with Clients from 15+ Countries
              </p>
            </div>
            <div>
              <h1 className="md:text-title-custom text-title-custom-mv font-extrabold">70+</h1>
              <p className="">Amplify your Growth with our Team of Experts</p>
            </div>
            <div>
              <h1 className="md:text-title-custom text-title-custom-mv font-extrabold">12+</h1>
              <p className="">Ecommerce Solutions Perfected over 12+ Years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
