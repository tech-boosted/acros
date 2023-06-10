import React from "react";
import TechStackLogo1 from "../assests/acros-media/TechStack-1.png";
import TechStackLogo2 from "../assests/acros-media/TechStack-2.png";
import TechStackLogo3 from "../assests/acros-media/TechStack-3.png";
import TechStackLogo4 from "../assests/acros-media/TechStack-4.png";
import TechStackLogo5 from "../assests/acros-media/TechStack-5.png";
import TechStackLogo6 from "../assests/acros-media/TechStack-6.png";
import TechStackLogo7 from "../assests/acros-media/TechStack-7.png";
import map from "../assests/acros-media/FINAL-MAP-1024x510.png";

const TechStack = () => {
  return (
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

      <div className=" bg-gradient-to-r from-[#aa00ff] from-73% to-[#0044ff] rounded-[30px] p-[50px] justify-center text-center items-center">
        <img src={map} alt="geographical map" className="mx-auto" />
      </div>
      <div className=" flex items-center justify-center  ">
        <div className="my-16 w-full text-right">
          <h1 className="md:md:text-title-custom text-title-custom-mv mb-8 font-satoshi-bold">
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
              <h1 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                150+
              </h1>
              <p className="font-satoshi-medium">
                Extensive Experience with Top E-commerce Brands
              </p>
            </div>
            <div>
              <h1 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                15+
              </h1>
              <p className="font-satoshi-medium">
                Expanding Horizons with Clients from 15+ Countries
              </p>
            </div>
            <div>
              <h1 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                70+
              </h1>
              <p className="font-satoshi-medium">
                Amplify your Growth with our Team of Experts
              </p>
            </div>
            <div>
              <h1 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                12+
              </h1>
              <p className="font-satoshi-medium">
                Ecommerce Solutions Perfected over 12+ Years
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
